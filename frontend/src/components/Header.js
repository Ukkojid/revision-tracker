import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-blue-500 text-white">
      <h1 className="text-2xl bold">TrackRevision</h1>
      <nav>
        <Link to="/" className="mr-5 bg-blue-900 rounded-lg">Home</Link>
        <Link to="/about" className="mr-5 bg-blue-900 rounded-lg">About</Link>
        <Link to="/loginsignup" className="mr-5 bg-red-600 rounded-lg">Login/SignUp</Link>
        <a href="/demoLogin" className="mr-5 bg-blue-900 text-white rounded-lg">Admin Login</a>
      </nav>
    </header>
  );
};

export default Header;