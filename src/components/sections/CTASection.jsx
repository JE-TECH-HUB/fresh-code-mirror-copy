
import React from 'react';

const CTASection = () => {
  return (
    <section className="section-black py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-8">
          Ready to level up your skills?
        </h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Join thousands of students who have transformed their careers with JE Tech Hub. 
          Start your journey today and unlock your potential in the tech industry.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary text-lg px-8 py-4">
            Join Now
          </button>
          <button className="btn-primary text-lg px-8 py-4">
            Browse Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
