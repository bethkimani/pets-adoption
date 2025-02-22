// src/components/Navbar.jsx
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Puppy Club</h1>
          </div>
          <div className="hidden md:flex md:space-x-8">
            <a href="#find-a-dog" className="text-gray-700 hover:text-blue-600">Find a Dog</a>
            <a href="#adoption-info" className="text-gray-700 hover:text-blue-600">Adoption Info</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact Us</a>
          </div>
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600">
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#find-a-dog" className="block text-gray-700 hover:text-blue-600">Find a Dog</a>
            <a href="#adoption-info" className="block text-gray-700 hover:text-blue-600">Adoption Info</a>
            <a href="#products" className="block text-gray-700 hover:text-blue-600">Products</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;