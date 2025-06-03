
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-black py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-8">
          About JE Tech Hub
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            At JE Tech Hub, we are passionate about empowering individuals through technology education. 
            Our mission is to bridge the gap between traditional learning and the rapidly evolving tech industry 
            by providing hands-on, practical training that prepares students for real-world challenges.
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            We believe in nurturing creativity, fostering innovation, and building a community where learners 
            can grow together. Our comprehensive programs are designed to not just teach technical skills, 
            but to develop critical thinking, problem-solving abilities, and the confidence to succeed in 
            today's digital landscape.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
