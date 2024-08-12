// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero className="mt-16" />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;