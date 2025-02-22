// src/components/Navbar.jsx
import { useState } from 'react';
import homeIcon from '../assets/homeicon.png'; // Adjust the path as needed
import loginIcon from '../assets/login.png';   // Adjust the path as needed
import searchIcon from '../assets/search.png'; // Adjust the path as needed

const Navbar = () => {
  const [isHowItWorksDropdownOpen, setIsHowItWorksDropdownOpen] = useState(false);
  const [isAdoptionDropdownOpen, setIsAdoptionDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img src={homeIcon} alt="Home" className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-teal-500">Puppy Club</h1>
          </div>

          <div className="hidden md:flex md:space-x-4">
            <a href="#find-a-dog" className="text-gray-700 hover:text-teal-500">Find a Dog</a>

            <div className="relative group">
              <button
                onClick={() => setIsHowItWorksDropdownOpen(!isHowItWorksDropdownOpen)}
                className="text-gray-700 hover:text-teal-500 focus:outline-none"
              >
                How It Works ▼
              </button>
              {isHowItWorksDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
                  <a href="#step1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Step 1</a>
                  <a href="#step2" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Step 2</a>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                onClick={() => setIsAdoptionDropdownOpen(!isAdoptionDropdownOpen)}
                className="text-gray-700 hover:text-teal-500 focus:outline-none"
              >
                Adoption Info ▼
              </button>
              {isAdoptionDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
                  <a href="#process" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Adoption Process</a>
                  <a href="#fees" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Adoption Fees</a>
                </div>
              )}
            </div>

            <a href="#dog-care" className="text-gray-700 hover:text-teal-500">Dog Care</a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring focus:ring-teal-500"
              />
              <button className="absolute right-0 top-0 mt-1 mr-2">
                <img src={searchIcon} alt="Search" className="h-5 w-5" />
              </button>
            </div>
            <button className="flex items-center text-gray-700 hover:text-teal-500 focus:outline-none">
              <img src={loginIcon} alt="Login" className="h-6 w-6" />
              <span className="ml-2">Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;