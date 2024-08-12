import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition duration-300 transform ${
        isTop ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg' : 
        'bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl rounded-lg mx-auto my-2 w-11/12'
      }`}
      style={{
        boxShadow: isTop 
          ? '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)' 
          : '0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 30px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-8 rounded-full">
        <Link 
          to="/" 
          className="text-3xl font-extrabold text-white transform transition-transform duration-300 hover:scale-110"
          style={{
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
          }}
        >
          GenZQue
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className="text-lg font-medium text-white hover:text-gray-300 transform transition-transform duration-300 hover:scale-110"
          >
            Home
          </Link>
          <Link 
            to="/join" 
            className="text-lg font-medium text-white hover:text-gray-300 transform transition-transform duration-300 hover:scale-110"
          >
            Join Queue
          </Link>
          <Link 
            to="/booking" 
            className="text-lg font-medium text-white hover:text-gray-300 transform transition-transform duration-300 hover:scale-110"
          >
            Book Appointment
          </Link>
          <Link 
            to="/appointments" 
            className="text-lg font-medium text-white hover:text-gray-300 transform transition-transform duration-300 hover:scale-110"
          >
            View Appointments
          </Link>
          <Link 
            to="/about" 
            className="text-lg font-medium text-white hover:text-gray-300 transform transition-transform duration-300 hover:scale-110"
          >
            About
          </Link>
        </nav>
        <button className="md:hidden text-white" onClick={() => {}}>
          <svg 
            className="w-8 h-8 transform transition-transform duration-300 hover:scale-110" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
