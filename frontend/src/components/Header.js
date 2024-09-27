import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-blue-500 text-white">
    <header className="flex justify-between items-center p-5 bg-blue-500 text-white">
    <header className="flex justify-between items-center p-5 bg-blue-500 text-white">
      <h1 className="text-2xl">TrackRevision</h1>
      <nav>
        <Link to="/" className="mr-5">Home</Link>
        <Link to="/about" className="mr-5">About</Link>
        <Link to="/loginsignup" className="mr-5">Login/SignUp</Link>
        <a href="/api/users/google" className="mr-5">Google Login</a>
      </nav>
    </header>
  );
};

export default Header;