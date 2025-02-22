// src/components/AboutUs.jsx
import React from 'react';
import dogImage from '../assets/dogparty.jpeg'; // Use the specified image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  return (
    <section className="flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="relative md:w-1/2">
          <div className="absolute inset-0 bg-blue-200 rounded-full -z-10"></div>
          <img src={dogImage} alt="About Us" className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 text-center md:text-left md:ml-10">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-6">
            Animals have come to mean so much in our lives. Happiness is a warm puppy.
            Money can buy you a fine dog, but you can’t make him wag his tail.
            Dogs are not our whole life, but they make our lives whole.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded flex items-center">
            <FontAwesomeIcon icon={faPlay} className="mr-2" />
            Play it to see our work
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;