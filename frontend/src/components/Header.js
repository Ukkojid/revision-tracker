import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUserCircle, FaArrowLeft } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex justify-between items-center p-5 bg-blue-600 text-white shadow-md">
      <h1 className="text-3xl font-bold">TrackRevision</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-5">
            <Link to="/" className="hover:bg-blue-700 rounded px-3 py-2 transition">Home</Link>
            <Link to="/about" className="hover:bg-blue-700 rounded px-3 py-2 transition">About</Link>
            <Link to="/loginsignup" className="hover:bg-red-600 rounded px-3 py-2 transition">Login/SignUp</Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <FaBars className="text-white w-6 h-6" />
        </button>
        {isMenuOpen && (
          <div className="absolute right-4 top-12 w-40 bg-white text-black rounded-lg shadow-lg z-50">
            <nav className="flex flex-col p-2">
                  <Link to="/" className="hover:bg-blue-200 rounded px-3 py-2 transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link to="/about" className="hover:bg-blue-200 rounded px-3 py-2 transition" onClick={() => setIsMenuOpen(false)}>About</Link>
                  <Link to="/loginsignup" className="hover:bg-red-200 rounded px-3 py-2 transition" onClick={() => setIsMenuOpen(false)}>Login/SignUp</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;