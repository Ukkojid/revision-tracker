import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaTachometerAlt, FaBell, FaClipboardList, FaChartLine, FaSyncAlt, FaStickyNote, FaUserFriends } from 'react-icons/fa';

const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="relative">
        {/* Menu Bar Icon in the Top-Right Corner */}
               {isMenuOpen ? (
            <button onClick={closeMenu} className="focus:outline-none">
              <FaTimes className="text-white text-3xl" />
            </button>
          ) : (
            <button onClick={toggleMenu} className="focus:outline-none">
              <FaBars className="text-black text-3xl" />
            </button>
          )}


        {/* Sliding Sidebar for mobile - now on the left side */}
        <div
          className={`fixed top-0 left-0 h-full bg-zinc-600 text-white font-bold flex flex-col p-4 space-y-6 w-64 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          {/* Close button */}
          <button className="self-end mb-6 text-white text-2xl" onClick={closeMenu}>
            <FaTimes />
          </button>

          <Link to="/dashboard" className="flex items-center space-x-2" onClick={closeMenu}>
            <FaTachometerAlt className="text-xl" /> <span>Dashboard</span>
          </Link>
          <Link to="/smartreminders" className="flex items-center space-x-2" onClick={closeMenu}>
            <FaBell className="text-xl" /> <span>SmartReminders</span>
          </Link>
          <Link to="/studyplans" className="flex items-center space-x-2" onClick={closeMenu}>
            <FaClipboardList className="text-xl" /> <span>StudyPlans</span>
          </Link>
          <Link to="/analytics" className="flex items-center space-x-2" onClick={closeMenu}>
            <FaChartLine className="text-xl" /> <span>Analytics</span>
          </Link>
          <Link to="/sync" className="flex items-center space-x-2" onClick={closeMenu}>
            <FaSyncAlt className="text-xl" /> <span>Sync</span>
          </Link>
          <Link to="/interactivenotes" className="flex items-center space-x-2" onClick={closeMenu}>
            <FaStickyNote className="text-xl" /> <span>InteractiveNotes</span>
          </Link>
          <Link to="/friendlyinterface" className="flex items-center space-x-2" onClick={closeMenu}>
            <FaUserFriends className="text-xl" /> <span>FriendlyInterface</span>
          </Link>
        </div>
      </div>

      {/* Full sidebar for desktop */}
      <div className="hidden md:flex flex-col space-y-4 w-64 bg-zinc-600 text-white p-4 ">
        
        <Link to="/dashboard" className="flex items-center space-x-2"><FaTachometerAlt /> <span>Dashboard</span></Link>
        <Link to="/smartreminders" className="flex items-center space-x-2"><FaBell /> <span>SmartReminders</span></Link>
        <Link to="/studyplans" className="flex items-center space-x-2"><FaClipboardList /> <span>StudyPlans</span></Link>
        <Link to="/analytics" className="flex items-center space-x-2"><FaChartLine /> <span>Analytics</span></Link>
        <Link to="/sync" className="flex items-center space-x-2"><FaSyncAlt /> <span>Sync</span></Link>
        <Link to="/interactivenotes" className="flex items-center space-x-2"><FaStickyNote /> <span>InteractiveNotes</span></Link>
        <Link to="/friendlyinterface" className="flex items-center space-x-2"><FaUserFriends /> <span>FriendlyInterface</span></Link>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to TrackRevision</h2>
        <p className="mt-4 text-lg mb-8">Your personal tool for tracking and managing your study revisions.</p>
        <img src="/images/StepDemoLogin.png" alt="Demo Login" className="mx-auto p-10 w-full h-3/4 rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Profile;