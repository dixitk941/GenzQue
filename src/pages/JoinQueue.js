// src/pages/JoinQueue.js
import React, { useState } from 'react';
import Layout from '../components/Layout';

const JoinQueue = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('User Joined Queue:', { name, phone });
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Join the Queue</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Join Queue
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default JoinQueue;
