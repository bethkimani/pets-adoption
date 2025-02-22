import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import PetsCatalog from './components/PetsCatalog';
import Booking from './components/Booking';
import LiveChat from './components/LiveChat';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ShopSave from './components/ShopSave';
import ProfessionalsSection from './components/ProfessionalsSection'; // New import
import AboutUs from './components/AboutUs'; // New import
import Services from './components/Services'; // New import
import Adoption from './components/Adoption'; // New import

function App() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Hero />
      
      <ProfessionalsSection /> {/* New section added */}
      <AboutUs /> 
      <ShopSave /> {/* New section added */}
      <Services /> {/* New section added */}
      <Testimonials /> {/* New section added */}
      <Adoption/>
      
      <LiveChat />
      <Footer />
    </div>
  );
}

export default App;