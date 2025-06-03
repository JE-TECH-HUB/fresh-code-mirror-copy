
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001f4d] to-[#003366] dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-left">
              About JE Tech Hub
            </h1>
            <p className="text-xl text-gray-200 text-left max-w-3xl">
              Empowering the next generation of tech professionals through innovative education and practical training.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-left">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 text-left leading-relaxed">
                At JE Tech Hub, we are passionate about empowering individuals through technology education. 
                Our mission is to bridge the gap between traditional learning and the rapidly evolving tech industry 
                by providing hands-on, practical training that prepares students for real-world challenges.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-left leading-relaxed">
                We believe in nurturing creativity, fostering innovation, and building a community where learners 
                can grow together. Our comprehensive programs are designed to not just teach technical skills, 
                but to develop critical thinking, problem-solving abilities, and the confidence to succeed.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 h-80 flex items-center justify-center">
              <img 
                src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop`}
                alt="Students learning together"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 h-80 flex items-center justify-center order-2 lg:order-1">
              <img 
                src={`https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop`}
                alt="Modern technology workspace"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-left">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 text-left leading-relaxed">
                We envision a world where technology education is accessible to everyone, regardless of their background. 
                Our goal is to create a generation of tech-savvy professionals who can drive innovation and solve 
                complex problems in the digital age.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-left leading-relaxed">
                Through our programs, we aim to democratize technology education and provide equal opportunities 
                for all learners to succeed in the ever-evolving tech landscape.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Practical Learning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn by doing with real-world projects and hands-on experience.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Expert Mentors</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn from industry professionals with years of experience.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Career Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get career guidance and job placement assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
