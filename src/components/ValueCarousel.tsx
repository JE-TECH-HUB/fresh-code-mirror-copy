
import React, { useState } from 'react';

const ValueCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const values = [
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience"
    },
    {
      icon: "🛠️",
      title: "Project-Based Learning",
      description: "Build real projects that showcase your skills to employers"
    },
    {
      icon: "🤝",
      title: "Mentorship & Internships",
      description: "Get personalized guidance and hands-on work experience"
    },
    {
      icon: "⏰",
      title: "Flexible Classes",
      description: "Learn at your own pace with flexible scheduling options"
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Quality education with scholarships and payment plans available"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, values.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, values.length - 2)) % Math.max(1, values.length - 2));
  };

  return (
    <section className="section-dark-blue py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Why Choose JE Tech Hub?
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {values.map((value, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-[#001f4d] border border-gray-700 rounded-lg p-6 text-center h-full">
                    <div className="text-4xl mb-4 text-orange">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-orange transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-orange transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueCarousel;
