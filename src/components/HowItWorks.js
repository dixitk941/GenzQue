// src/components/HowItWorks.js
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Step 1: Sign Up</h3>
            <p className="text-gray-600">
              Create an account to get started with GenZQue.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Step 2: Book or Join</h3>
            <p className="text-gray-600">
              Choose to book an appointment or join a queue based on your needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Step 3: Get Notified</h3>
            <p className="text-gray-600">
              Receive real-time notifications and updates about your status.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;