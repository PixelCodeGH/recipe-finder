# Recipe Finder

A modern, full-stack web application that helps users discover and save recipes based on their preferences, dietary restrictions, and available ingredients.

![Recipe Finder Preview](./preview/home.png)

## 🌟 Features

- 🔍 **Advanced Recipe Search**
  - Search by ingredients
  - Filter by cuisine type
  - Dietary restrictions support
- 👤 **User Authentication**
  - Secure JWT-based authentication
  - User profile management
- ❤️ **Personalization**
  - Save favorite recipes
  - Customizable dietary preferences
- 📱 **Responsive Design**
  - Modern, clean UI
  - Mobile-first approach
- ⚡ **Real-time Updates**
  - Instant search results
  - Live recipe recommendations


## 🛠️ Built With

- **Frontend**
  - React.js
  - Tailwind CSS
  - Heroicons
  - React Router DOM
  - React Hot Toast

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication

- **API Integration**
  - Edamam Recipe API

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Edamam API credentials

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/recipe-finder.git
cd recipe-finder
```

2. Install dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
```

3. Create a `.env` file in the root directory
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
EDAMAM_APP_ID=your_edamam_app_id
EDAMAM_APP_KEY=your_edamam_app_key
PORT=3001
```

4. Start the development servers
```bash
# Start both frontend and backend
npm run dev:full

# Or start them separately
npm run dev     # Backend
npm run client  # Frontend
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app

## 📁 Project Structure

```
recipe-finder/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # Reusable components
│       └── pages/        # Page components
├── models/                # MongoDB models
├── routes/                # API routes
├── middleware/            # Custom middleware
└── server.js             # Express server
```

## 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT |
| `EDAMAM_APP_ID` | Edamam API App ID |
| `EDAMAM_APP_KEY` | Edamam API Key |
| `PORT` | Backend server port |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- [Edamam API](https://www.edamam.com/)
- [Create React App](https://create-react-app.dev/) 