
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: "LEARN, GROW AND EXPLORE ENDLESS OPPORTUNITIES!",
      subtext: "Join a community of like-minded learners and industry professionals passionate about technology and innovation.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
    },
    {
      heading: "We Provide Services That You Can Trust!",
      subtext: "Dedicated to empowering individuals and businesses with cutting-edge solutions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
    },
    {
      heading: "JOE EXPRESS",
      subtext: "Get the skills, mentorship, and resources you need to thrive in today's digital world.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen flex items-center bg-gradient-to-br from-[#001f4d] to-[#003366] dark:from-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full min-h-[80vh]">
          {/* Text Content - Left Aligned */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {slides[currentSlide].heading}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              {slides[currentSlide].subtext}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#ff6b35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2b] transition-colors duration-300 text-lg font-semibold">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#001f4d] transition-all duration-300 text-lg font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src={slides[currentSlide].image} 
                alt="Hero"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#ff6b35] transition-colors p-2 bg-black/20 rounded-full backdrop-blur-sm"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#ff6b35] transition-colors p-2 bg-black/20 rounded-full backdrop-blur-sm"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#ff6b35]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
