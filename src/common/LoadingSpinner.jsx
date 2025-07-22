import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'primary', 
  text = '', 
  className = '' 
}) => {
  return (
    <div className={`loading-spinner-container ${className}`}>
      <div className={`loading-spinner spinner-${size} spinner-${color}`}>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;