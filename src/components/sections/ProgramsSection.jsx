
import React from 'react';
import ProgramCard from '../ProgramCard';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Web Development",
      description: "Learn full-stack web technologies including HTML, CSS, JavaScript, React, Node.js to build modern websites and applications.",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      description: "Master user interface and user experience design principles to create intuitive, engaging digital products.",
      icon: "🎨"
    },
    {
      title: "Graphic Design",
      description: "Develop skills in visual communication, branding, and using tools like Adobe Photoshop and Illustrator.",
      icon: "📐"
    },
    {
      title: "Video Editing",
      description: "Gain hands-on experience with video production, editing software, and storytelling techniques.",
      icon: "🎬"
    },
    {
      title: "Mobile Phone & Gadget Repairs",
      description: "Learn practical skills in troubleshooting and repairing mobile devices and electronic gadgets.",
      icon: "📱"
    },
    {
      title: "Delivery Services",
      description: "Understand logistics, customer service, and technology integration to efficiently manage product deliveries.",
      icon: "🚚"
    },
    {
      title: "Forex Trading",
      description: "Get introduced to financial markets, trading strategies, and risk management for forex trading.",
      icon: "📈"
    },
    {
      title: "Data Analysis",
      description: "Learn data gathering, cleaning, visualization, and interpretation using tools like Excel and Python.",
      icon: "📊"
    }
  ];

  return (
    <section id="courses" className="section-dark-blue py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          What We Offer & Our Programs
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Discover our comprehensive range of technology courses and services designed to equip you with the skills needed for today's digital world.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
