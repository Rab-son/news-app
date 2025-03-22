# News Room

News Room is a React Native application that provides the latest news from various categories using [NewsAPI.org](https://newsapi.org/). The app features a navigation system with a splash screen, a home screen, and category-specific news sections.

## Features
- **Splash Screen**: Displays an initial loading screen before navigating to the main content.
- **Drawer Navigation**: Allows users to navigate between different news categories.
- **Home Screen**: Displays general news articles.
- **Category Screens**: Fetches news articles based on selected categories (Sports, Business, Technology, Science, Health, and Entertainment).
- **React Navigation**: Uses stack and drawer navigators for seamless navigation.

## Screens
1. **Splash Screen** - Shown initially when the app loads.
2. **Home Screen** - Displays general news.
3. **Category Screens** - Display category-specific news based on selection.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Rab-son/react-native-projects.git
   cd news-room
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Technologies Used
- **React Native** - Framework for building mobile applications.
- **React Navigation** - Used for navigating between screens.
- **NewsAPI.org** - Fetches real-time news articles.

## Project Structure
```
news-room/
├── components/
│   ├── NewsCard.jsx
├── navigation/
│   ├── DrawNavigation.jsx
├── screens/
│   ├── SplashScreen.jsx
│   ├── HomeScreen.jsx
│   ├── CategoryScreen.jsx
├── App.js
├── package.json
└── .env
```

## API Usage
The app fetches news from `https://newsapi.org/v2/top-headlines`


