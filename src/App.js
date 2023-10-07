import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Artwork from './pages/Artwork';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artwork" element={<Artwork />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
