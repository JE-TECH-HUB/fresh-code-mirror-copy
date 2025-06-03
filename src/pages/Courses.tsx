
import React from 'react';
import ProgramCard from '../components/ProgramCard';

const Courses = () => {
  const programs = [
    {
      title: "Web Development",
      description: "Learn full-stack web technologies including HTML, CSS, JavaScript, React, Node.js to build modern websites and applications.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      duration: "12 weeks",
      level: "Beginner to Advanced"
    },
    {
      title: "UI/UX Design",
      description: "Master user interface and user experience design principles to create intuitive, engaging digital products.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
      duration: "10 weeks",
      level: "Beginner to Intermediate"
    },
    {
      title: "Graphic Design",
      description: "Develop skills in visual communication, branding, and using tools like Adobe Photoshop and Illustrator.",
      icon: "📐",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop",
      duration: "8 weeks",
      level: "Beginner to Advanced"
    },
    {
      title: "Video Editing",
      description: "Gain hands-on experience with video production, editing software, and storytelling techniques.",
      icon: "🎬",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop",
      duration: "6 weeks",
      level: "Beginner to Intermediate"
    },
    {
      title: "Mobile Phone & Gadget Repairs",
      description: "Learn practical skills in troubleshooting and repairing mobile devices and electronic gadgets.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      duration: "4 weeks",
      level: "Beginner"
    },
    {
      title: "Delivery Services",
      description: "Understand logistics, customer service, and technology integration to efficiently manage product deliveries.",
      icon: "🚚",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
      duration: "3 weeks",
      level: "Beginner"
    },
    {
      title: "Forex Trading",
      description: "Get introduced to financial markets, trading strategies, and risk management for forex trading.",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      duration: "8 weeks",
      level: "Intermediate to Advanced"
    },
    {
      title: "Data Analysis",
      description: "Learn data gathering, cleaning, visualization, and interpretation using tools like Excel and Python.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      duration: "10 weeks",
      level: "Beginner to Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001f4d] to-[#003366] dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop"
            alt="Courses hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-left">
              Our Courses
            </h1>
            <p className="text-xl text-gray-200 text-left max-w-3xl">
              Discover our comprehensive range of technology courses designed to equip you with the skills needed for today's digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From beginner-friendly courses to advanced specializations, we have something for everyone.
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
                duration={program.duration}
                level={program.level}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
