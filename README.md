# movies_app🎬 Movies & TV Show App

A Next.js 13+ web application that allows users to browse trending movies and TV shows, search for titles, and view details — powered by the TMDB API.

🚀 Features

📺 Browse Trending Movies & TV Shows

🔍 Search for movies, TV shows, and people

🖼️ Beautiful UI with TailwindCSS

📡 Server-side data fetching using Next.js App Router

🔑 Secure API access with .env.local

movies_app/
│── app/
│   ├── movie/page.jsx       # Movies page
│   ├── tv/page.jsx          # TV Shows page
│   ├── search/page.jsx      # Search page
│   ├── page.jsx             # Home page (Trending)
│   ├── layout.jsx           # Layout + Navbar
│── components/
│   ├── MediaCard.jsx        # Card for movie/TV item
│   ├── MediaGrid.jsx        # Grid wrapper
│   ├── Navbar.jsx           # Navigation bar
│── lib/
│   ├── tmdb.js              # TMDB API helper functions
│── public/                  # Public assets
│── styles/
│   ├── global.css           # Global styles
│── .env.local.example       # Example environment file
│── package.json
│── README.md
🛠️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/yourusername/movies_app.git
cd movies_app
2️⃣ Install dependencies
npm install
3️⃣ Set up environment variables

Create a .env.local file in the project root:
TMDB_API_KEY=your_tmdb_api_key_here
4️⃣ Run the development servernpm run dev
App will be available at 👉 http://localhost:3000

🔧 Tech Stack

Next.js 13+ (App Router)

React

Tailwind CSS

TMDB API

📜 License

This project is licensed under the MIT License.