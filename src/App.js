// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import JoinQueue from './pages/JoinQueue';
import Booking from './pages/Booking';
import Appointments from './pages/Appointments';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="p-6" style={{ scrollBehavior: 'smooth' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<JoinQueue />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;