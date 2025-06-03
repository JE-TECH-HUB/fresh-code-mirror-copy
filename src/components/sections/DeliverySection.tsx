
import React from 'react';

const DeliverySection = () => {
  return (
    <section className="section-black py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-8">
          Reliable Delivery Services
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-white mb-6 leading-relaxed">
            JE Tech Hub provides fast, reliable, and affordable delivery services for tech gadgets, 
            electronics, and learning materials. We understand the importance of getting your equipment 
            quickly and safely, which is why we prioritize timeliness and security in every delivery.
          </p>
          <p className="text-lg text-white mb-8 leading-relaxed">
            Our dedicated delivery team ensures that your tech products reach you in perfect condition, 
            whether you're ordering learning materials for our courses or purchasing the latest gadgets. 
            Trust us to handle your deliveries with the same care and professionalism we bring to our education services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#001f4d] px-6 py-3 rounded-lg">
              <span className="text-orange font-semibold">✓</span>
              <span className="text-white ml-2">Fast Delivery</span>
            </div>
            <div className="bg-[#001f4d] px-6 py-3 rounded-lg">
              <span className="text-orange font-semibold">✓</span>
              <span className="text-white ml-2">Secure Packaging</span>
            </div>
            <div className="bg-[#001f4d] px-6 py-3 rounded-lg">
              <span className="text-orange font-semibold">✓</span>
              <span className="text-white ml-2">Affordable Rates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
