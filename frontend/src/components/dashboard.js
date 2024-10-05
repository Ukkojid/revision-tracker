import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlusCircle, FaClipboardList, FaBell, FaChartLine, FaArrowLeft } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="relative dashboard p-6 bg-gray-100 min-h-screen">
      <button onClick={()=>{navigate(-1)}} className="absolute bg-gray-300 text-black p-2 rounded hover:bg-gray-400 transition left-1 top-1"><FaArrowLeft /></button>
      <div className="dashboard-header text-center mb-8">
        <h2 className="text-4xl font-bold">Welcome to Your Dashboard</h2>
        <p className="text-lg text-gray-700">Manage your study materials and track your progress</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-white shadow-md rounded-lg p-5 flex flex-col items-center">
          <FaPlusCircle className="text-6xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Add Subject</h3>
          <p className="text-gray-600">Easily add new subjects to your study plan.</p>
          <button
            className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            onClick={() => navigate('/addsubject')}
          >
            Go to Add Subject
          </button>
        </div>

        <div className="card bg-white shadow-md rounded-lg p-5 flex flex-col items-center">
          <FaClipboardList className="text-6xl text-green-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Manage Subjects</h3>
          <p className="text-gray-600">View and manage your existing subjects.</p>
          <button
            className="mt-4 bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
            onClick={() => navigate('/subjects')}
          >
            Go to Manage Subjects
          </button>
        </div>

        <div className="card bg-white shadow-md rounded-lg p-5 flex flex-col items-center">
          <FaBell className="text-6xl text-yellow-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">View Reminders</h3>
          <p className="text-gray-600">Check your upcoming study reminders.</p>
          <button
            className="mt-4 bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700 transition"
            onClick={() => navigate('/smartreminders')}
          >
            Go to View Reminders
          </button>
        </div>

        <div className="card bg-white shadow-md rounded-lg p-5 flex flex-col items-center">
          <FaChartLine className="text-6xl text-purple-600 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Track Progress</h3>
          <p className="text-gray-600">Visualize your study progress and performance.</p>
          <button
            className="mt-4 bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
            onClick={() => navigate('/analytics')}
          >
            Go to Track Progress
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-3xl font-semibold mb-4">Recent Activities</h3>
        <ul className="bg-white shadow-md rounded-lg p-4">
          <li className="mb-2">Added new subject: Mathematics</li>
          <li className="mb-2">Completed revision for: Physics</li>
          <li className="mb-2">Set reminder for: Chemistry test</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;