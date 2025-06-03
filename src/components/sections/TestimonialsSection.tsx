
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      course: "Web Development",
      quote: "The mentorship at JE Tech Hub transformed my career. The hands-on approach and real-world projects gave me the confidence to land my dream job as a frontend developer.",
      rating: 5
    },
    {
      name: "Michael Chen",
      course: "UI/UX Design",
      quote: "I loved the project-based learning approach. Building actual products for real clients helped me understand the industry better than any textbook could.",
      rating: 5
    },
    {
      name: "Aisha Patel",
      course: "Data Analysis",
      quote: "The flexible class schedule allowed me to learn while working full-time. The instructors were always available to help, and the community support was amazing.",
      rating: 5
    }
  ];

  return (
    <section className="section-dark-blue py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          What Our Students Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#001f4d] border border-gray-700 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-orange text-sm">{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
