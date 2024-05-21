import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import logoBlack from '../assets/images/logoBlack.svg'; 
import logoWhite from '../assets/images/logoWhite.svg'; 

export default function Navbar({color}) {
  const location = useLocation();

  // Check the URL pathname to determine which logo to use
  const logo = location.pathname === '/' ? logoWhite : logoBlack;

  return (
    <nav className={`hidden md:flex w-full ${color} justify-between p-2`}>
      <div className="w-11/12 flex mx-auto py-2">
        <div className="flex text-xl font-bold p-2 py-3 w-1/4 justify-start">
          <Link to="/"><img src={logoBlack} alt="Logo" className="h-20 " /></Link>
        </div>
        <div className="flex w-2/4 text-lg font-custom font-medium p-2 py-4 my-4">
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
        <div className="flex w-1/4 justify-end p-2 py-3 my-3">
          <Link to="/signin" className="px-4 py-2  h-fit border-2 border-white rounded-md">Se Connecter</Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  color: PropTypes.string.isRequired,
};
