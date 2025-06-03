
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001f4d] to-[#003366] dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-left">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 text-left max-w-3xl">
              Get in touch with us for any questions about our courses or services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-left">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#ff6b35] mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@jetechhub.com</p>
                    <p className="text-gray-600 dark:text-gray-300">support@jetechhub.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#ff6b35] mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#ff6b35] mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Tech Street<br />
                      Innovation District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <img 
                  src={`https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop`}
                  alt="Office building"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-left">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#ff6b35] text-white py-3 px-6 rounded-lg hover:bg-[#e55a2b] transition-colors duration-300 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
