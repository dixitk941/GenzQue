import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20 px-8 mt-16">
      <div className="container mx-auto text-center rounded-full">
  <h1 className="text-4xl md:text-6xl font-extrabold mb-6 rounded-full">
    Welcome to GenZQue
  </h1>
  <p className="text-lg md:text-2xl mb-8 rounded-full">
    Manage your queues and appointments with ease and efficiency.
  </p>
  <div className="space-x-4 rounded-full">
    <Link to="/booking">
      <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-200 transition duration-300">
        Book an Appointment
      </button>
    </Link>
    <Link to="/join">
      <button className="bg-white text-pink-500 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-200 transition duration-300">
        Join a Queue
      </button>
    </Link>
  </div>
</div>
    </section>
  );
};

export default Hero;