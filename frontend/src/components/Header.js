import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaInfoCircle, FaSignInAlt, FaUserShield } from 'react-icons/fa'; // Importing icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu when an option is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-5 bg-blue-600 text-white shadow-md">
      <h1 className="text-3xl font-bold">TrackRevision</h1>
      <nav className="hidden md:flex space-x-5">
        <Link to="/" className="flex items-center hover:bg-blue-700 rounded px-3 py-2 transition">
          <FaHome className="mr-2" /> Home
        </Link>
        <Link to="/about" className="flex items-center hover:bg-blue-700 rounded px-3 py-2 transition">
          <FaInfoCircle className="mr-2" /> About
        </Link>
        <Link to="/loginsignup" className="flex items-center hover:bg-red-600 rounded px-3 py-2 transition">
          <FaSignInAlt className="mr-2" /> Login/SignUp
        </Link>
        <a href="/demoLogin" className="flex items-center hover:bg-blue-700 rounded px-3 py-2 transition">
          <FaUserShield className="mr-2" /> Admin Login
        </a>
      </nav>
      {/* Mobile menu toggle button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <FaBars className="text-white w-6 h-6" />
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute right-4 top-0 mt-12 w-42 bg-white text-black rounded-lg shadow-lg z-50">
          <nav className="flex flex-col p-2">
            <Link to="/" className="hover:bg-blue-200 rounded px-3 py-2 transition" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="hover:bg-blue-200 rounded px-3 py-2 transition" onClick={closeMenu}>
              About
            </Link>
            <Link to="/loginsignup" className="hover:bg-red-200 rounded px-3 py-2 transition" onClick={closeMenu}>
              Login/SignUp
            </Link>
            <a href="/demoLogin" className="hover:bg-blue-200 rounded px-3 py-2 transition" onClick={closeMenu}>
              Admin Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;