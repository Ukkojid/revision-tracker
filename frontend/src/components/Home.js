import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const letters = h2Ref.current.textContent.split("");
    h2Ref.current.textContent = ""; // Clear the h2 content to add span letters

    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      h2Ref.current.appendChild(span);
    });

    const tl = gsap.timeline();

    // GSAP animation for h2 letters (larger size)
    tl.fromTo(
      h2Ref.current.children,
      { opacity: 0, y: 50, scale: 1.5 }, // Start large
      {
        opacity: 1,
        y: 0,
        scale: 1, // Shrink back to normal size
        stagger: 0.1,
        ease: "power2.out",
        duration: 1,
      }
    )
    // Shrink the entire h2 to normal size
    .to(
      h2Ref.current,
      {
        scale: 1, // Ensure it's at normal size after the letter animation
        duration: 0.5,
        ease: "power2.inOut",
      },
      "+=0.2"
    )
    // Fade in the p tag after h2 animation completes
    .fromTo(
      pRef.current,
      { opacity: 0, y: 20 }, // Starting state for p tag
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "+=0.3" // Start this 0.3 seconds after the h2 animation
    )
    // Fade in the img tag after p animation completes
    .fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 }, // Starting state for image
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      "+=0.3"
    );
  }, []);

  return (
    <div className="home flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-5">
        <h2 ref={h2Ref} className="text-4xl font-bold text-blue-600">
          Welcome to TrackRevision
        </h2>
        <p ref={pRef} className="mt-4 text-lg text-gray-700">
          Your personal tool for tracking and managing your study revisions.
        </p>
        <img
          ref={imgRef}
          src="/images/homepage.jpg"
          alt="Scrolling Image"
          className="mx-auto mt-10 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;