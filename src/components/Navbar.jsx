import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoBlack from '../assets/images/logoBlack.svg'; 
import { fetchDataFromApi } from '../services/apiService';

const Navbar = ({ color }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const response = await fetchDataFromApi('category');
        // Access the 'data' array from the response
        const categoriesData = response.data || [];
        setCategories(categoriesData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCategoriesData();
  }, []);

  return (
    <nav className={`hidden md:flex w-full ${color} justify-between p-2`}>
      <div className="w-11/12 flex mx-auto py-2">
        <div className="flex text-xl font-bold p-2 py-3 w-1/4 justify-start">
          <Link to="/"><img src={logoBlack} alt="Logo" className="h-20 " /></Link>
        </div>
        <div className="flex w-2/4 text-lg font-custom font-medium p-2 py-4 my-4">
          {categories.length > 0 && (
            <ul className='flex w-full justify-between'>
              {categories.map(category => (
                <Link to={`/category/${category.slug}`} key={category.id} className='hover:border-b hover:border-black'>
                  {/* Access the 'name' property of each category */}
                  <li>{category.name}</li>
                </Link>
              ))}
            </ul>
          )}
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

export default Navbar;
