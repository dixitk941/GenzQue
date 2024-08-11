// src/pages/Booking.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Layout from '../components/Layout';

const Booking = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'appointments'), {
        name,
        phone,
        appointmentType,
        appointmentTime,
        createdAt: new Date(),
      });
      alert('Appointment booked successfully!');
      // Reset form
      setName('');
      setPhone('');
      setAppointmentType('');
      setAppointmentTime('');
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book appointment. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
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
          <div>
            <label className="block text-sm font-medium text-gray-700">Appointment Type</label>
            <input
              type="text"
              value={appointmentType}
              onChange={(e) => setAppointmentType(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Book Appointment
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Booking;
