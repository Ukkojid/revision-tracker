import React from 'react';

const Home = () => {
  return (
    <div className="home flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-5">
        <h2 className="text-4xl font-bold text-blue-600">Welcome to TrackRevision</h2>
        <p className="mt-4 text-lg text-gray-700">
          Your personal tool for tracking and managing your study revisions.
        </p>
        <img
          src="/images/homepage.jpg"
          alt="Scrolling Image"
          className="mx-auto mt-10 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;