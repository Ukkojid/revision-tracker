import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import LoginSignUp from './components/LoginSignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/dashboard';
import SmartReminders from './components/smartreminders';
import StudyPlans from './components/studyplans';
import Analytics from './components/analytics';
import Sync from './components/sync';
import InteractiveNotes from './components/interactivenotes';
import FriendlyInterface from './components/friendlyinterface';
import Profile from './components/Profile'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginsignup" element={<LoginSignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/smartreminders" element={<SmartReminders />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/studyplans" element={ <StudyPlans />} />
        <Route path="/sync" element={ <Sync />} />
        <Route path="/interactivenotes" element={ <InteractiveNotes />} />
        <Route path="/friendlyinterface" element={ <FriendlyInterface />} />
        <Route path="/profile" element={ <Profile /> }
        />
        
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
