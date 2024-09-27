import React, { useState } from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">About Revision Tracker</h1>
        
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Revision Tracker" 
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover mb-4 md:mb-0 md:mr-4"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-700 mb-2">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At Revision Tracker, we believe in enhancing your learning experience through effective revision strategies. Our algorithm is designed to optimize your study sessions, ensuring that you retain information efficiently and effectively.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-gray-700 mb-4">How It Works</h2>
        <p className="text-lg text-gray-600 mb-4">
          Our platform utilizes a unique algorithm that adapts to your learning style and preferences. By tracking your progress and revisiting concepts at optimal intervals, we help you reinforce your knowledge and master the material.
        </p>
        
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
          <li>Personalized revision plans tailored to your needs</li>
          <li>Data-driven insights to track your progress</li>
          <li>User-friendly interface for a seamless experience</li>
          <li>Continuous updates to improve your learning journey</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Join Us</h2>
        <p className="text-lg text-gray-600">
          Start your journey with Revision Tracker today and take control of your revision process. Together, we can achieve your academic goals!
        </p>
      </div>
    </div>
  );
};

export default About;