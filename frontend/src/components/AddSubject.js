import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const AddSubject = () => {
  const navigate = useNavigate();
  
  
  return (
    <div className="relative add-subject p-6 bg-gray-100 min-h-screen">
      <button onClick={()=>{navigate(-1)}} className="absolute bg-gray-300 text-black p-2 rounded hover:bg-gray-400 transition left-1 top-1"><FaArrowLeft /></button>
      <h2 className="text-4xl font-bold text-center mb-6">Add New Subject</h2>
      <form className="bg-white shadow-md rounded-lg p-8">
        <div className="mb-4">
          <label htmlFor="subjectName" className="block text-lg font-medium mb-2">
            Subject Name
          </label>
          <input
            type="text"
            required
            className="border border-gray-300 p-2 w-full rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="chapterName" className="block text-lg font-medium mb-2">
            Chapter Name
          </label>
          <input
            type="text"
            required
            className="border border-gray-300 p-2 w-full rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="file" className="block text-lg font-medium mb-2">
            Upload File
          </label>
          <input
            type="file"
            className="border border-gray-300 p-2 w-full rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Add Subject
        </button>
      </form>
    </div>
  );
};

export default AddSubject;