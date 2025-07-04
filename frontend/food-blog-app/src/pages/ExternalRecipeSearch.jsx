import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function ExternalRecipeSearch() {
  const { randomImage } = useLoaderData();
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [barcode, setBarcode] = useState('');
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentRandomImg, setCurrentRandomImg] = useState(randomImage);

  // Fetch recipes when query changes
  useEffect(() => {
    if (!query.trim()) {
      setRecipes([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      setLoading(true);
      setError('');
      
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => {
          setRecipes(data.meals || []);
          setLoading(false);
          if (!data.meals) {
            setError('No recipes found for your search');
          }
        })
        .catch(err => {
          setError('Failed to fetch recipes');
          setLoading(false);
        });
    }, 500); // Debounce search

    return () => clearTimeout(timeoutId);
  }, [query]);

  // Handle barcode product lookup
  const handleBarcodeSearch = () => {
    if (!barcode.trim()) return;
    
    setLoading(true);
    setError('');
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 1) {
          setProductInfo(data.product);
          setError('');
        } else {
          setError('Product not found');
          setProductInfo(null);
        }
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch product info');
        setLoading(false);
      });
  };

  // Get a new random food image
  const getNewRandomImage = () => {
    fetch('https://foodish-api.herokuapp.com/api/')
      .then(res => res.json())
      .then(data => setCurrentRandomImg(data.image))
      .catch(err => console.log('Random image failed to load'));
  };

  return (
    <div className="external-recipe-search">
      {/* Header with Random Food Image */}
      <div className="header-section">
        <h1>🌐 Discover External Recipes</h1>
        <p>Search recipes from TheMealDB and get product information</p>
        
        {currentRandomImg && (
          <div className="random-image-container">
            <img 
              src={currentRandomImg} 
              alt="Random food" 
              className="random-food-image"
            />
            <button
              onClick={getNewRandomImage}
              className="refresh-image-btn"
            >
              🔄 New Image
            </button>
          </div>
        )}
      </div>

      {/* Recipe Search Section */}
      <div className="search-section">
        <h2>🔍 Search Global Recipes</h2>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for recipes (e.g., chicken, pasta, cake)..."
          className="search-input"
        />
        
        {loading && <div className="loading">Searching recipes...</div>}
        
        {error && query && (
          <div className="error-message">{error}</div>
        )}

        {/* Recipes Display */}
        {recipes.length > 0 && (
          <div className="recipes-grid">
            <h3>Found {recipes.length} recipe(s):</h3>
            <div className="recipes-container">
              {recipes.map(recipe => (
                <div key={recipe.idMeal} className="recipe-card">
                  <img 
                    src={recipe.strMealThumb} 
                    alt={recipe.strMeal}
                    className="recipe-image"
                  />
                  <div className="recipe-content">
                    <h4 className="recipe-title">{recipe.strMeal}</h4>
                    <p className="recipe-meta">
                      <span className="category">📂 {recipe.strCategory}</span>
                      <span className="area">🌍 {recipe.strArea}</span>
                    </p>
                    <div className="recipe-actions">
                      {recipe.strSource && (
                        <a 
                          href={recipe.strSource} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          📄 View Recipe
                        </a>
                      )}
                      {recipe.strYoutube && (
                        <a 
                          href={recipe.strYoutube} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                        >
                          🎥 Watch Video
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Barcode Product Search Section */}
      <div className="barcode-section">
        <h2>🏷️ Product Info by Barcode</h2>
        <div className="barcode-search">
          <input
            type="text"
            value={barcode}
            onChange={e => setBarcode(e.target.value)}
            placeholder="Enter product barcode (e.g., 3017620422003)"
            className="barcode-input"
          />
          <button
            onClick={handleBarcodeSearch}
            className="btn btn-orange"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search Product'}
          </button>
        </div>

        {productInfo && (
          <div className="product-info">
            <div className="product-content">
              {productInfo.image_url && (
                <img 
                  src={productInfo.image_url} 
                  alt={productInfo.product_name}
                  className="product-image"
                />
              )}
              <div className="product-details">
                <h3>{productInfo.product_name || 'Unknown Product'}</h3>
                <div className="product-meta">
                  <p><strong>Brand:</strong> {productInfo.brands || 'N/A'}</p>
                  <p><strong>Categories:</strong> {productInfo.categories || 'N/A'}</p>
                </div>
                {productInfo.nutriments && (
                  <div className="nutrition-info">
                    <h4>Nutrition (per 100g):</h4>
                    <div className="nutrition-grid">
                      <div className="nutrition-item">
                        <span className="nutrition-label">🔥 Energy:</span>
                        <span>{productInfo.nutriments.energy_100g || 'N/A'} kJ</span>
                      </div>
                      <div className="nutrition-item">
                        <span className="nutrition-label">🍞 Carbs:</span>
                        <span>{productInfo.nutriments.carbohydrates_100g || 'N/A'} g</span>
                      </div>
                      <div className="nutrition-item">
                        <span className="nutrition-label">🥩 Protein:</span>
                        <span>{productInfo.nutriments.proteins_100g || 'N/A'} g</span>
                      </div>
                      <div className="nutrition-item">
                        <span className="nutrition-label">🧈 Fat:</span>
                        <span>{productInfo.nutriments.fat_100g || 'N/A'} g</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tips Section */}
      <div className="tips-section">
        <h3>💡 Tips:</h3>
        <ul>
          <li>Try searching for ingredients like "chicken", "beef", or "vegetarian"</li>
          <li>Click "New Image" to refresh the header image</li>
          <li>Use barcodes from food packages to get detailed nutrition info</li>
          <li>Example barcode to try: 3017620422003 (Nutella)</li>
        </ul>
      </div>
    </div>
  );
}

export default ExternalRecipeSearch;