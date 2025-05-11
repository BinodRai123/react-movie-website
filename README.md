# 🎬 React Movie Website

A dynamic and responsive movie web application built with React and Tailwind CSS, leveraging The Movie Database (TMDB) API to showcase current movies with detailed information.

## 📌 Features

- **Movie Listings**: Displays a collection of current movies with their posters, titles, ratings, descriptions, and release dates.
- **Search Functionality**: Search for movies by their names using the integrated search bar.
- **Responsive Design**: Ensures optimal viewing experience across various devices.
- **API Integration**: Fetches real-time data from TMDB API.

## 🚀 Technologies Used

- **Frontend**: React, Tailwind CSS
- **API**: The Movie Database (TMDB) API
- **Build Tool**: Vite

## 📁 Folder Structure

```
react-movie-website/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── # Static assets like images
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   └── SearchBar.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## ⚠️ Important Note

> I cannot provide you with my TMDB API key due to security and usage policy.  
> You must **create your own API key** by signing up at [The Movie Database (TMDB)](https://www.themoviedb.org/).  
> Once you have the key, create a `.env` file in the root directory and add:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

Make sure the variable name matches exactly with what is used in the source code: `VITE_TMDB_API_KEY`.

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BinodRai123/react-movie-website.git
   cd react-movie-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure your `.env` file** (see the warning above).

4. **Start the development server**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173/`.

## 📝 License

This project is licensed under the [MIT License](LICENSE).
