// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 sm:p-6 md:p-8 text-white flex flex-col sm:flex-row justify-between items-center shadow-xl fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-screen-xl rounded-lg">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          <Link to="/" className="hover:underline">GenZQue</Link>
        </h1>
        <div className="sm:hidden ml-auto">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      <nav className={`flex-col sm:flex-row ${isOpen ? 'flex' : 'hidden'} sm:flex space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0`}>
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/join" className="hover:underline">Join Queue</Link></li>
          <li><Link to="/booking" className="hover:underline">Book Appointment</Link></li>
          <li><Link to="/appointments" className="hover:underline">View Appointments</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;