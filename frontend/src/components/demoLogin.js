import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const DemoLogin = () => {
  return (
    <div className=" flex flex-row justify-around item-center">
      <div className="flex flex-col pt-20 pl-3 bg-zinc-600 text-white font-bold gap-10" >
        <Link to="/dashboard" className="mr-5">Dashboard</Link>
        <Link to="/smartreminders" className="mr-5">SmartReminders</Link>
        <Link to="/studyplans" className="mr-5">StudyPlans</Link>
        <Link to="/analytics" className="mr-5">Analytics</Link>
        <Link to="/sync" className="mr-5">Sync</Link>
        <Link to="/interactivenotes" className="mr-5">InteractiveNotes</Link>
        <Link to="/friendlyinterface" className="mr-5">FriendlyInterface</Link>
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold">Welcome to TrackRevision</h2>
        <p className="mt-4 text-lg">Your personal tool for tracking and managing your study revisions.</p>
      
      
      <img src="/images/StepDemoLogin.png" alt="Scrolling Image"  className="mx-auto p-10  w-full h-3/4" />
      </div>
    </div>
  );
};

export default DemoLogin;