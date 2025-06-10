# 🎬 Mobile Movie App

A beautiful, modern mobile application for discovering and managing your favorite movies. Built with React Native and Expo, featuring a sleek dark theme and intuitive user experience.

## ✨ Features

### 🏠 **Home Screen**

- **Latest Movies**: Browse popular movies in a responsive grid layout
- **Trending Movies**: Discover trending movies with an elegant horizontal carousel
- **Movie Ratings**: View IMDb-style ratings with star indicators
- **Release Years**: Quick access to movie release information

### 🔍 **Movie Search**

- **Real-time Search**: Instant movie search with The Movie Database (TMDB) API
- **Search History**: Trending searches tracked with Appwrite backend
- **Responsive Results**: Grid layout optimized for mobile viewing

### 📖 **Movie Details**

- **Comprehensive Information**: Overview, genres, budget, revenue, production companies
- **High-Quality Posters**: Full-resolution movie posters and backdrops
- **Detailed Metadata**: Runtime, vote count, production details
- **Ratings Display**: Professional rating presentation with vote counts

### 💾 **Save & Bookmark System**

- **Universal Save Button**: Save movies from any screen (home, search, details)
- **Visual Feedback**: Color-coded save states (white/purple) with smooth transitions
- **Persistent Storage**: Local save functionality with plans for cloud sync
- **Save Collection**: Dedicated saved movies tab for easy access

### 👤 **User Profile**

- **Personal Stats**: Track movies watched, favorites, and engagement
- **User Preferences**: Customizable settings and preferences
- **Profile Management**: Complete user profile with avatar support

## 🛠 Technology Stack

### **Frontend**

- **React Native** (0.79.3) - Cross-platform mobile development
- **Expo** (~53.0.10) - Development platform and tools
- **Expo Router** (~5.0.7) - File-based routing system
- **TypeScript** (~5.8.3) - Type-safe development

### **Styling**

- **NativeWind** (^4.1.23) - Tailwind CSS for React Native
- **TailwindCSS** (^3.4.17) - Utility-first CSS framework
- **Custom Color Palette** - Dark theme with purple accents

### **Navigation**

- **Expo Router** - File-based navigation
- **Bottom Tab Navigation** - Four main sections (Home, Search, Saved, Profile)
- **Stack Navigation** - Movie details with smooth transitions

### **Data & APIs**

- **The Movie Database (TMDB) API** - Movie data and imagery
- **Appwrite** (^0.9.2) - Backend services for trending data
- **Custom Hooks** - useFetch for data management
- **Local Storage** - Movie save functionality

### **UI Components**

- **Reusable Components** - MovieCard, TrendingCard, SaveButton, SearchBar
- **Masked Views** - Trending movie rankings with gradient overlays
- **Responsive Design** - Optimized for various screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm
- Expo CLI
- TMDB API Key
- Appwrite Project (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aal51282/mobile_movie_app
   cd mobile_movie_app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key_here
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_appwrite_database_id
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

4. **Get TMDB API Key**

   - Register at [The Movie Database](https://developer.themoviedb.org/reference/intro/getting-started)
   - Go to Settings > API and create a new API key
   - Add the API key to your `.env` file

5. **Start the development server**

   ```bash
   npx expo start
   ```

6. **Run on your device**
   - Install Expo Go app on your phone
   - Scan the QR code from the terminal
   - Or run on simulator: `npm run ios` or `npm run android`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for movie data and imagery
- [Expo](https://expo.dev/) for the excellent development platform
- [NativeWind](https://www.nativewind.dev/) for Tailwind CSS in React Native
