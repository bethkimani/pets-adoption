// src/components/ShopSave.jsx
import React from 'react';
import royalCanin from '../assets/royalcanin.png';
import eukanubaPro from '../assets/eukanubapro.png';
import pedigreeClassic from '../assets/pedigreeclassic.png';
import lambChicken from '../assets/lamb&chicken.png';

const ShopSave = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Shop & Save up to 10%</h2>
        <p className="mb-8">on these top auto ship products!</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border rounded-lg shadow p-4">
            <img src={royalCanin} alt="Royal Canin" className="w-full mb-2" />
            <p>Royal Canin</p>
          </div>
          <div className="border rounded-lg shadow p-4">
            <img src={eukanubaPro} alt="Eukanuba Pro" className="w-full mb-2" />
            <p>Eukanuba Pro</p>
          </div>
          <div className="border rounded-lg shadow p-4">
            <img src={pedigreeClassic} alt="Pedigree Classic" className="w-full mb-2" />
            <p>Pedigree Classic</p>
          </div>
          <div className="border rounded-lg shadow p-4">
            <img src={lambChicken} alt="Lamb & Chicken" className="w-full mb-2" />
            <p>Lamb & Chicken</p>
          </div>
        </div>
        <div className="mt-8">
         
        </div>
      </div>
    </section>
  );
};

export default ShopSave;