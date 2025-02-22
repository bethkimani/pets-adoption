// src/components/Hero.jsx
const Hero = () => {
  return (
    <div className="relative bg-blue-200 text-center p-10 rounded-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Find Your Smart Dog</h1>
      </div>
      <p className="mt-4 text-lg">Animals have come to mean so much in our lives.</p>
      <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
};

export default Hero;