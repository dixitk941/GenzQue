// src/components/CTA.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12 text-center rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Get Started?</h2>
      <p className="text-lg md:text-xl mb-8">
        Experience the convenience and efficiency of GenZQue today!
      </p>
      <button
        onClick={handleModalOpen}
        className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-purple-200 transition duration-300 transform hover:scale-105"
      >
        Sign Up Now
      </button>
      {isModalOpen && <LoginModal onClose={handleModalClose} />}
    </section>
  );
};

export default CTA;