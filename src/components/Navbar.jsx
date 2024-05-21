// src/components/Navbar.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logoBlack.svg'; 


export default function Navbar({ color }) {
  return (
    <nav className={`hidden md:flex w-full justify-between text-${color} p-2 border-b border-b-red`}>
      <div className="w-11/12 flex mx-auto py-2">
        <div className="flex text-xl font-bold p-2 py-3 w-1/4 justify-start">
          <img src={logo} alt="Logo" className="h-10" /> {/* Use your logo image */}
        </div>
        <div className="flex w-2/4 text-lg font-custom font-medium p-2 py-3">
          <ul className='flex w-full justify-between'>
            <Link to="/" className='hover:border-b hover:border-black'><li>Manteaux</li></Link>
            <Link to="/" className='hover:border-b hover:border-black'><li>Robes</li></Link>
            <Link to="/" className='hover:border-b hover:border-black'><li>Chaussures</li></Link>
            <Link to="/" className='hover:border-b hover:border-black'><li>Sac</li></Link>
            <Link to="/" className='hover:border-b hover:border-black'><li>Pantalons</li></Link>
            <Link to="/" className='hover:border-b hover:border-black'><li>Vestes</li></Link>
            <Link to="/products" className='hover:border-b hover:border-black'><li>Products</li></Link>
          </ul>
        </div>
        <div className="flex w-1/4 justify-end p-2 py-3">
          <Link to="/signin" className={`px-4 py-2 text-${color} border-2 border-${color} rounded-md`}>Se Connecter</Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  color: PropTypes.string.isRequired,
};
