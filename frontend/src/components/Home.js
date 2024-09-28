import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Home = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 600,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="home">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Welcome to TrackRevision</h2>
        <p className="mt-4 text-lg">Your personal tool for tracking and managing your study revisions.</p>
      
      <img src="/images/homepage.jpg" alt="Scrolling Image"  className="mx-auto mt-10 " />
      </div>
      
    </div>
  );
};

export default Home;