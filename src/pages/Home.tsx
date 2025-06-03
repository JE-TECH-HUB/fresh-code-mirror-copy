
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ValueCarousel from '../components/ValueCarousel';
import AboutSection from '../components/sections/AboutSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import DeliverySection from '../components/sections/DeliverySection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ValueCarousel />
      <AboutSection />
      <ProgramsSection />
      <DeliverySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;
