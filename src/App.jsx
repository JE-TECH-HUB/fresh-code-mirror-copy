
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import ValueCarousel from './components/ValueCarousel';
import AboutSection from './components/sections/AboutSection';
import ProgramsSection from './components/sections/ProgramsSection';
import DeliverySection from './components/sections/DeliverySection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Navbar />
      <ValueCarousel />
      <AboutSection />
      <ProgramsSection />
      <DeliverySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
