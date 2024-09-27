import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/Abput';
import LoginSignUp from './components/LoginSignUp';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginsignup" element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;