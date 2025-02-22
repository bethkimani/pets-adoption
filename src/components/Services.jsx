// src/components/Services.jsx
import React from 'react';
import servicesImage from '../assets/services.png'; // Use the specified image

const Services = () => {
  return (
    <section className="flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left md:mr-10">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="mb-6">
            Money can buy you a fine dog, but only love can make him wag his tail. 
            Dogs make the best friends, and it's only right that we celebrate them for all the joy they've given us. 
            Whether labeled on a dog bandana or a paw print poster, you'll need the perfect dog quote to accompany your piece.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="relative md:w-1/2">
          <div className="absolute inset-0 bg-blue-200 rounded-full -z-10"></div>
          <img src={servicesImage} alt="Services" className="rounded-lg w-full" />
        </div>
      </div>
    </section>
  );
};

export default Services;