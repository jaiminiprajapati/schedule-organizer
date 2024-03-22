import React from 'react';
import Logo from '../../assets/Flowify_Logo_1.png';
import { Link } from 'react-router-dom';

// Defines the Navbar component
const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowify.netlify.app/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-second-color">Flowify</span>
        </a>
        <div className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-second-color rounded hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
            </li>
            <li>
              <Link to="/features" className="block py-2 px-3 text-second-color rounded hover:bg-gray-100 dark:hover:bg-gray-700">Features</Link>
            </li>
            <li>
              <Link to="/carousel" className="block py-2 px-3 text-second-color rounded hover:bg-gray-100 dark:hover:bg-gray-700">About</Link>
            </li>
            <li>
              <Link to="/comments" className="block py-2 px-3 text-second-color rounded hover:bg-gray-100 dark:hover:bg-gray-700">Feedback</Link>
            </li>
            <li>
              <Link to="/signup" className="block py-2 px-3 text-second-color rounded hover:bg-gray-100 dark:hover:bg-gray-700">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
