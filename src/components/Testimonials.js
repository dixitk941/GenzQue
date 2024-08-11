// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              "GenZQue has completely transformed our appointment booking process. It's fast, efficient, and user-friendly."
            </p>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">Manager, XYZ Clinic</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              "Managing queues has never been easier. Our customers love the convenience GenZQue provides."
            </p>
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-500">Owner, ABC Salon</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              "The real-time updates are a game-changer. We can now manage our appointments with confidence."
            </p>
            <h3 className="text-xl font-semibold">Michael Brown</h3>
            <p className="text-gray-500">Director, QRS Health</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
