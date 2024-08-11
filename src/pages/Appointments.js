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
      <div className="max-w-2xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Upcoming Appointments</h2>
        <ul className="space-y-4">
          {appointments.map(appointment => (
            <li key={appointment.id} className="p-4 border border-gray-300 rounded">
              <h3 className="font-bold">{appointment.name}</h3>
              <p>Type: {appointment.appointmentType}</p>
              <p>Phone: {appointment.phone}</p>
              <p>Time: {new Date(appointment.appointmentTime).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Appointments;
