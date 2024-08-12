// src/pages/About.js
import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Introduction Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">About GenZQue</h1>
        <p className="text-lg md:text-2xl">
          Revolutionizing queue management and appointment scheduling for the modern era.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What We Do</h2>
          <p className="text-lg mb-6">
            GenZQue provides a seamless solution to manage queues and appointments across various industries.
            We focus on reducing wait times, enhancing customer experience, and bringing efficiency to businesses
            through innovative technology.
          </p>
          <p className="text-lg">
            Our platform is designed to cater to hospitals, salons, medical stores, and more, enabling them to 
            operate smoothly while keeping their customers satisfied.
          </p>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How We Do It</h2>
          <p className="text-lg mb-6">
            At GenZQue, we leverage cutting-edge technology to deliver real-time updates, easy-to-use interfaces,
            and comprehensive analytics. Our platform is built using React and Tailwind CSS for a modern, responsive
            frontend, while Firebase powers our backend for secure, scalable data management.
          </p>
          <p className="text-lg">
            We are committed to continuous improvement, ensuring that our solution evolves with the needs of our users.
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Karan Dixit"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Karan Dixit</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://linkedin.com/in/karan-dixit-7223a628a" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://twitter.com/karandixit" className="text-blue-400 hover:text-blue-600">
                  <FaTwitter size={24} />
                </a>
                <a href="https://github.com/dixitk941" className="text-gray-800 hover:text-gray-600">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
            {/* Additional team members can be added here */}
            {/* Team Member 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
                  <FaTwitter size={24} />
                </a>
                <a href="https://github.com" className="text-gray-800 hover:text-gray-600">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Lead Developer</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
                  <FaTwitter size={24} />
                </a>
                <a href="https://github.com" className="text-gray-800 hover:text-gray-600">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-12 bg-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Connect with Us</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://linkedin.com" className="hover:text-gray-300">
            <FaLinkedin size={32} />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-300">
            <FaTwitter size={32} />
          </a>
          <a href="https://github.com" className="hover:text-gray-300">
            <FaGithub size={32} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
