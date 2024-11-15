import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Platform</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are dedicated to providing cutting-edge solutions and services to our clients. 
              With years of experience and a team of experts, we ensure the highest quality 
              and reliability in everything we do.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to empower businesses and individuals with innovative tools 
              and resources that drive success and growth in today's dynamic environment.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
              Learn More
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-indigo-600 opacity-10 rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;