
import React from 'react';
import ProgramCard from '../ProgramCard';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Web Development",
      description: "Learn full-stack web technologies including HTML, CSS, JavaScript, React, Node.js to build modern websites and applications.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "UI/UX Design",
      description: "Master user interface and user experience design principles to create intuitive, engaging digital products.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop"
    },
    {
      title: "Graphic Design",
      description: "Develop skills in visual communication, branding, and using tools like Adobe Photoshop and Illustrator.",
      icon: "📐",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop"
    },
    {
      title: "Video Editing",
      description: "Gain hands-on experience with video production, editing software, and storytelling techniques.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop"
    },
    {
      title: "Mobile Phone & Gadget Repairs",
      description: "Learn practical skills in troubleshooting and repairing mobile devices and electronic gadgets.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
    },
    {
      title: "Delivery Services",
      description: "Understand logistics, customer service, and technology integration to efficiently manage product deliveries.",
      icon: "🚚",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop"
    },
    {
      title: "Forex Trading",
      description: "Get introduced to financial markets, trading strategies, and risk management for forex trading.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop"
    },
    {
      title: "Data Analysis",
      description: "Learn data gathering, cleaning, visualization, and interpretation using tools like Excel and Python.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What We Offer & Our Programs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Discover our comprehensive range of technology courses and services designed to equip you with the skills needed for today's digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
              image={program.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
