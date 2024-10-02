import React, { useState } from 'react';

const Dashboard = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [newChapter, setNewChapter] = useState('');
  const [newFile, setNewFile] = useState(null);
  const [priority, setPriority] = useState('green'); // Default priority

  const handleAddSubject = () => {
    const subject = {
      subject: newSubject,
      chapter: newChapter,
      file: newFile,
    };
    setSubjects([...subjects, subject]);
    setNewSubject('');
    setNewChapter('');
    setNewFile(null);
  };

  const handleFileChange = (e) => {
    setNewFile(e.target.files[0]);
  };

  return (
    <div className="dashboard p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Revision Tracker Dashboard</h1>

      {/* Add Subject Form */}
      <div className="add-subject bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Add Subject & Chapter</h2>
        <input
          type="text"
          placeholder="Subject Name"
          className="p-2 border rounded w-full mb-4"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Chapter Name"
          className="p-2 border rounded w-full mb-4"
          value={newChapter}
          onChange={(e) => setNewChapter(e.target.value)}
        />

        {/* File Upload */}
        <input
          type="file"
          className="mb-4"
          onChange={handleFileChange}
        />

        {/* Save Button */}
        <button
          className="bg-blue-600 text-white p-3 rounded w-full"
          onClick={handleAddSubject}
        >
          Save Subject
        </button>
      </div>

      {/* List of Subjects */}
      <div className="subject-list">
        <h2 className="text-2xl font-semibold mb-4">Your Subjects</h2>
        {subjects.length > 0 ? (
          subjects.map((subject, index) => (
            <div
              key={index}
              className={"subject-item mb-4 p-4 rounded-lg shadow-md"}>
              <h3 className="text-xl font-bold">{subject.subject}</h3>
              <p className="text-md">Chapter: {subject.chapter}</p>
              {subject.file && (
                <p>
                  <a
                    href={URL.createObjectURL(subject.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Open Uploaded File
                  </a>
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No subjects added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;