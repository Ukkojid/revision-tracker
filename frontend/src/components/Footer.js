import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4 mt-10">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} TrackRevision. All Rights Reserved.</p>
        <p>
          Built with love by the TrackRevision team.{' '}
          <a href="https://github.com/Ukkojid/TrackRevision" className="underline">
            GitHub Repository
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;