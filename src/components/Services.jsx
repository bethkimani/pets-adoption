import React from 'react';

const Services = () => {
  return (
    <div className="py-10">
      <h3 className="text-2xl font-bold">Shop & Save</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h4 className="font-semibold">Royal Canin</h4>
          <p>10% off</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h4 className="font-semibold">Dog Food</h4>
          <p>15% off</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h4 className="font-semibold">Dog Toys</h4>
          <p>20% off</p>
        </div>
      </div>
    </div>
  );
};

export default Services;