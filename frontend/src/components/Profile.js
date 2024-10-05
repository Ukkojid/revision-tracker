import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaTachometerAlt, FaBell, FaClipboardList, FaBookOpen } from 'react-icons/fa';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here, such as clearing user session
    navigate('/'); // Redirect to home after logout
  };

  return (
    <div className="profile p-6 bg-gray-100 min-h-screen">
      <div className="profile-header text-center mb-8">
        <FaUserCircle className="text-8xl mx-auto text-blue-600" />
        <h2 className="text-4xl font-bold mt-4">deepak01</h2>
        <p className="text-lg text-gray-700">Manage your study materials and revisions</p>
      </div>

      <div className="profile-content bg-white shadow-md rounded-lg p-5">
        <h3 className="text-3xl font-semibold mb-4">Profile Information</h3>
        <div className="mb-4">
          <strong>Name:</strong> <span className="text-gray-700">Deepak Ukkoji</span>
        </div>
        <div className="mb-4">
          <strong>Email:</strong> <span className="text-gray-700">ukkojid@gmail.com</span>
        </div>
        <div className="mb-4">
          <strong>Joined:</strong> <span className="text-gray-700">October 5, 2024</span>
        </div>

        <h3 className="text-3xl font-semibold mb-4 mt-6">Actions</h3>
        <div className="action-buttons flex flex-col space-y-4">
          <button
            className="flex items-center bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            onClick={() => navigate('/dashboard')}
          >
            <FaTachometerAlt className="mr-2" /> Dashboard
          </button>
          <button
            className="flex items-center bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
            onClick={() => navigate('/studyplans')}
          >
            <FaClipboardList className="mr-2" /> Manage Subjects
          </button>
          <button
            className="flex items-center bg-yellow-600 text-white p-3 rounded hover:bg-yellow-700 transition"
            onClick={() => navigate('/smartreminders')}
          >
            <FaBell className="mr-2" /> View Reminders
          </button>
          <button
            className="flex items-center bg-purple-600 text-white p-3 rounded hover:bg-purple-700 transition"
            onClick={() => navigate('/studyplans')}
          >
            <FaBookOpen className="mr-2" /> Study Materials
          </button>
        </div>

        <button
          className="mt-6 w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 transition"
          onClick={ ()=> navigate('/')
          }
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;