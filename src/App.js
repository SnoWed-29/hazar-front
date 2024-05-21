// src/App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Products from './pages/Product/Product';
// import Navbar from './components/Navbar';
import Home from './pages/Home/Home'
import './index.css'; // Ensure you have the correct path
function App() {
  return (
    <Router className="bg-gray-100 text-center p-4">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signin" element={<div>Sign In Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
