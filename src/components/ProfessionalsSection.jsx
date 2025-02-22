// src/components/ProfessionalsSection.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faBowlFood, faBrush, faHeart } from '@fortawesome/free-solid-svg-icons';

const ProfessionalsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Some Pup Professionals for You</h2>
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faDog} size="3x" />
            <p className="mt-2">Dog Training</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faBowlFood} size="3x" />
            <p className="mt-2">Hygienic Care</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faBrush} size="3x" />
            <p className="mt-2">Aesthetic Services</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faHeart} size="3x" />
            <p className="mt-2">Healthcare Tips</p>
          </div>
        </div>
        <div className="mt-8">
          
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;