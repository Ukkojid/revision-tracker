import React, { useState } from 'react';

const Dashboard = () => {
  const [subject, setSubject] = useState('');
  const [chapter, setChapter] = useState('');
  const [notes, setNotes] = useState('');
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding revision logic here
  };

  return (
    <div className="flex flex-col p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Personalized Dashboard</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Add Revision</h2>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border border-gray-300 rounded w-full p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Chapter"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          className="border border-gray-300 rounded w-full p-2 mb-2"
        />
        <textarea
          placeholder="Revision Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="border border-gray-300 rounded w-full p-2 mb-2"
        />
        <input
          type="file"
          multiple
          onChange={(e) => setFiles([...e.target.files])}
          className="mb-2"
        />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">
          Add Revision
        </button>
      </form>

      <div className="flex flex-col space-y-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-semibold">Current Revisions</h2>
          {/* Render current revisions here */}
        </div>

        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-semibold">Upcoming Revisions</h2>
          {/* Render upcoming revisions here */}
        </div>

        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-semibold">Missed Sessions</h2>
          {/* Render missed sessions here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;