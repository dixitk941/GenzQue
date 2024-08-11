// src/pages/Appointments.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import Layout from '../components/Layout';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'appointments'), orderBy('appointmentTime', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const appointmentsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAppointments(appointmentsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20 px-8 mt-16">
        <div className="container mx-auto text-center rounded-full">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 rounded-full">Upcoming Appointments</h2>
          <ul className="space-y-4">
            {appointments.map(appointment => (
              <li key={appointment.id} className="p-4 border border-gray-300 rounded bg-white text-purple-600 shadow-lg">
                <h3 className="font-bold text-pink-500">{appointment.name}</h3>
                <p>Type: {appointment.appointmentType}</p>
                <p>Phone: {appointment.phone}</p>
                <p>Time: {new Date(appointment.appointmentTime).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Appointments;