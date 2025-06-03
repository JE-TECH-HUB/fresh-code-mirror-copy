
import React from 'react';
import PropTypes from 'prop-types';

const ProgramCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[#001f4d] border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="border-l-4 border-orange pl-4">
        <div className="text-3xl mb-3 text-orange">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
        <button className="btn-primary w-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

ProgramCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default ProgramCard;
