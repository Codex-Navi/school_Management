import React from 'react';
import './herosection.css'

function HeroSection(props) {
  return (
    <div className="hero-container">
    <div className="welcome-banner">
      <i className="fas fa-graduation-cap"></i>
      <span>Welcome to ItHelpdesk School</span>
    </div>
    <h1 className="hero-title">Your Complete School Management Solution</h1>
    <p className="hero-subtitle">
      From admissions to academics, simplify every aspect of school administration with our comprehensive and user-friendly platform.
    </p>
    <div className="hero-buttons">
      <a href="#" className="btn btn-primary">
        Get Started <i className="fas fa-arrow-right"></i>
      </a>
      <a href="#" className="btn btn-secondary">
        See All Features <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  </div>
  );
}

export default HeroSection;