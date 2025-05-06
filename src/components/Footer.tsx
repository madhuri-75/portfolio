import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy py-6 text-center text-sm text-slate">
      <div className="max-w-7xl mx-auto px-4">
        <p>Designed & Built by Madhuri Sri Durga Visali Perumalla</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
