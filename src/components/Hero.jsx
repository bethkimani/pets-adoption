import React from "react";
import dogImage from "../assets/dog.jpeg"; // Ensure this path is correct
import IconsSection from "./IconsSection";

const Hero = () => {
  return (
    <section className="flex items-center justify-center bg-white py-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2 relative">
          <h1 className="text-4xl font-bold mb-4">Find your Smart Dog</h1>
          <p className="mb-6">
            A dog is the only thing on earth that loves you more than you love
            yourself. When the dog looks at you, the dog is not thinking what
            kind of a person you are.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="relative md:w-1/2">
          <div className="absolute inset-0 bg-yellow-300 rounded-full -z-10"></div>
          <img src={dogImage} alt="Dog" className="w-full" />
          <div className="absolute bottom-10 left-10">
            <IconsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;