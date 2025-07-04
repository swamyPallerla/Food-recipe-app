# 🍳 Food Recipe App

A full-stack web application built with the MERN stack that allows users to discover, create, and manage their favorite food recipes.

## 📸 Screenshots

![Home Page](screenshots/home.png)
*Browse all available recipes*

![Recipe Details](screenshots/recipe-details.png)
*View detailed recipe information*

![My Recipes](screenshots/my-recipes.png)
*Manage your personal recipes*

## 🚀 Features

### 🔐 Authentication & Security
- **User Registration & Login**: Secure account creation and authentication
- **JWT Token Authentication**: Stateless authentication using JSON Web Tokens
- **Password Hashing**: Passwords secured with bcrypt encryption
- **Protected Routes**: Middleware ensures only authenticated users access protected features

### 📝 Recipe Management
- **Add New Recipes**: Create recipes with title, cooking time, ingredients, and instructions
- **Image Upload**: Upload cover images for recipes with automatic storage
- **View All Recipes**: Browse complete recipe database on homepage
- **My Recipes**: Personal dashboard for user-created recipes
- **Edit Recipes**: Update existing recipes with pre-populated forms
- **Delete Recipes**: Remove recipes with automatic cleanup from favorites
- **Smart Ingredients**: Comma-separated input automatically converted to structured data

### ❤️ Favorites System
- **Mark Favorites**: Heart icon to save preferred recipes
- **Persistent Storage**: Favorites stored in browser local storage
- **Dedicated View**: Separate tab for easy access to favorite recipes

### 🎨 User Interface
- **Responsive Design**: Mobile-friendly interface
- **Dynamic Navigation**: Context-aware UI elements
- **Modal Dialogs**: Clean pop-up forms for login/registration
- **Interactive Icons**: Visual feedback for all user actions

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **multer** - File upload handling
- **cors** - Cross-origin resource sharing

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Icon components

### Development Tools
- **nodemon** - Auto-restart development server
- **dotenv** - Environment variable management

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/swamyPallerla/Food-recipe-app.git
   cd Food-recipe-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/foodrecipe
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

4. **Start the backend server**
   ```bash
   npm run dev
   ```
   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Start the frontend application**
   ```bash
   npm run dev
   ```
   Application will run on `http://localhost:5173`

## 🎯 Usage

### Getting Started
1. **Access the Application**: Open `http://localhost:5173` in your browser
2. **Create Account**: Click "Login" → "Create New Account" to register
3. **Login**: Use your credentials to access protected features

### Managing Recipes
- **Browse Recipes**: View all recipes on the homepage
- **Add Recipe**: Click "Share Your Recipe" (login required)
- **Edit Recipe**: Use the pencil icon in "My Recipes" section
- **Delete Recipe**: Use the trash icon in "My Recipes" section
- **Mark Favorites**: Click the heart icon on any recipe card

### Navigation
- **Home**: View all available recipes
- **My Recipes**: Manage your personal recipes (protected)
- **Favorites**: Access your favorite recipes (protected)

## 📁 Project Structure

```
Food-recipe-app/
├── backend/
│   ├── models/
│   │   ├── Recipe.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── recipes.js
│   ├── middleware/
│   │   └── verifyToken.js
│   ├── public/
│   │   └── images/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Recipes
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/user` - Get user's recipes (protected)
- `POST /api/recipes` - Create new recipe (protected)
- `PUT /api/recipes/:id` - Update recipe (protected)
- `DELETE /api/recipes/:id` - Delete recipe (protected)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the MERN stack community for excellent documentation
- Icons provided by React Icons
- UI inspiration from modern recipe applications

## 📧 Contact

**Swamy Pallerla** - [GitHub Profile](https://github.com/swamyPallerla)

Project Link: [https://github.com/swamyPallerla/Food-recipe-app](https://github.com/swamyPallerla/Food-recipe-app)

---

⭐ Don't forget to star this repository if you found it helpful!

