import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      x: 300,
      duration: 3,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="home">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Welcome to TrackRevision</h2>
        <p className="mt-4 text-lg">Your personal tool for tracking and managing your study revisions.</p>
      </div>
      <img src="/images/homepage.jpg" alt="Scrolling Image" ref={imageRef} className="mx-auto mt-10" />
    </div>
  );
};

export default Home;