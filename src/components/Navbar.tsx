
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-[#001f4d] dark:bg-gray-800 text-white py-4 shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-[#ff6b35] transition-colors">
          JE Tech Hub
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`hover:text-[#ff6b35] transition-colors duration-300 ${
                  isActive(link.href) ? 'text-[#ff6b35] font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-[#ff6b35] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#001f4d] dark:bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block hover:text-[#ff6b35] transition-colors duration-300 py-2 ${
                    isActive(link.href) ? 'text-[#ff6b35] font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
