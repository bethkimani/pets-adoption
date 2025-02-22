import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PetsCatalog from './components/PetsCatalog';
import Booking from './components/Booking';
import LiveChat from './components/LiveChat';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ShopSave from './components/ShopSave';

function App() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Hero />
      <Services />
      <PetsCatalog />
      <Booking />
      <Testimonials />
      <LiveChat />
      <Footer />
    </div>
  );
}

export default App;