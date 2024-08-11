// src/components/Features.js
import React from 'react';
import { FaCalendarCheck, FaClock, FaMobileAlt } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FaCalendarCheck className="text-purple-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
            <p className="text-gray-600">
              Book appointments and manage queues effortlessly with our intuitive interface.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FaClock className="text-pink-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
            <p className="text-gray-600">
              Stay updated with real-time notifications and status updates.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FaMobileAlt className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile-Friendly</h3>
            <p className="text-gray-600">
              Access GenZQue from any device, anywhere, anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
