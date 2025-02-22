// src/components/Testimonials.jsx
import React from 'react';
import testimonialsImage from '../assets/testimonials.png'; // Use the specified image

const Testimonials = () => {
  return (
    <section className="flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="relative md:w-1/2">
          <div className="absolute inset-0 bg-blue-200 rounded-full -z-10"></div>
          <img src={testimonialsImage} alt="Testimonials" className="rounded-lg w-full" />
        </div>
        <div className="md:w-1/2 text-center md:text-left md:ml-10">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <div className="mb-4">
            <span className="text-yellow-500">★★★★★</span>
          </div>
          <blockquote className="mb-6">
            “My favorite type of pet has always been a dog. They’re loyal, kind, and offer endless affection. 
            My friend Eric says, ‘The more people I meet, the more I like my dog.’ Funny thought! 
            And Puppy Club meets me with my dog.”
          </blockquote>
          <p className="font-bold">Adelle Petricia</p>
          <p className="text-gray-600">CEO & Founder @ Ballet</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;