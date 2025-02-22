// src/components/Adoption.jsx
import React from 'react';

const Adoption = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-8">
        {/* Adoption Section */}
        <h2 className="text-3xl font-bold mb-2">Wants To Adopt A Dog</h2>
        <p className="mb-4">For Schedule a Adoption</p>
        <div className="flex justify-center mb-8">
          <input
            type="email"
            placeholder="Type your email"
            className="border border-gray-300 p-2 rounded-l-lg w-64"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-r-lg">
            Send Now
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="flex justify-between items-center mb-6">
        {/* Centered Boarding & Daycare */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-bold">Boarding & Daycare</h3>
          <p>(204) 696 2958</p>
          <p>145 Street View Ave</p>
          <p>Mikowville, NC 27986</p>
        </div>

        {/* Right-aligned Grooming & Healthcare with reduced padding */}
        <div className="text-center md:text-left md:ml-2">
          <h3 className="text-lg font-bold">Grooming & Healthcare</h3>
          <p>(204) 586 2958</p>
          <p>214 Sir Johnson Rd</p>
          <p>Mikowville, NC 27986</p>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="text-left md:ml-10">
        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
        <div className="flex justify-start space-x-4">
          <a href="#" className="text-blue-500">Instagram</a>
          <a href="#" className="text-blue-500">Facebook</a>
          <a href="#" className="text-blue-500">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default Adoption;