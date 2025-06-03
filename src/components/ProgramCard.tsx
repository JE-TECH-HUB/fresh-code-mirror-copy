
import React from 'react';
import PropTypes from 'prop-types';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: string;
  image?: string;
  duration?: string;
  level?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  title, 
  description, 
  icon, 
  image, 
  duration, 
  level 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-3xl mr-3">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {(duration || level) && (
          <div className="mb-4 space-y-2">
            {duration && (
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Duration:</span>
                <span className="ml-2">{duration}</span>
              </div>
            )}
            {level && (
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Level:</span>
                <span className="ml-2">{level}</span>
              </div>
            )}
          </div>
        )}
        
        <button className="w-full bg-[#ff6b35] text-white py-3 px-4 rounded-lg hover:bg-[#e55a2b] transition-colors duration-300 font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

ProgramCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  image: PropTypes.string,
  duration: PropTypes.string,
  level: PropTypes.string
};

export default ProgramCard;
