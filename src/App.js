import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import FeaturedArtworksSection from './components/FeaturedArtworksSection';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <HeroSection />
        <FeaturedArtworksSection />
        <Footer />
        <Routes></Routes>
      </div>
    </Router>
  );
}

export default App;
