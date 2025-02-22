// src/components/Hero.jsx
const Hero = () => {
  return (
    <div className="relative bg-yellow-200 text-center pt-20 pb-10">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Find Your Smart Dog</h1>
        <p className="mt-4 text-lg">A dog is the only thing on earth that loves you more than he loves himself.</p>
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <img src="path_to_your_dog_image" alt="Dog" className="w-1/2" />
      </div>
      <div className="bg-blue-500 rounded-full absolute top-10 left-10 h-48 w-48"></div>
      <div className="bg-red-500 rounded-full absolute bottom-10 right-10 h-36 w-36"></div>
    </div>
  );
};

export default Hero;