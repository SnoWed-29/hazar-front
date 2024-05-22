// src/App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Products from './pages/Product/Product';
// import Navbar from './components/Navbar';
import Home from './pages/Home/Home'
import './index.css'; // Ensure you have the correct path
import './App.css'; // Ensure you have the correct path
import ShowProduct from './pages/ShowProduct/ShowProduct';
import TestApiComponent from './components/TestApiComponent';
function App() {
  return (
    <Router className="bg-gray-100 text-center p-4">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/showproduct" element={<ShowProduct />} />
          <Route path="/testapi" element={<TestApiComponent />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
