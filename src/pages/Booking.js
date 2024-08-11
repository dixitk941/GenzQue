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
      console.error('Error booking appointment: ', error);
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20 px-8 mt-16 rounded-lg shadow-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Book an Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Appointment Type"
                value={appointmentType}
                onChange={(e) => setAppointmentType(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="datetime-local"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-purple-600 text-white font-bold rounded hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;