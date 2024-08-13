// src/components/SocialLinks.js

import React from 'react';
import '../styles/App.css';

const SocialLinks = () => {
    return (
      <div className="social-links">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            </a>
      </div>
    );
  };

  export default SocialLinks;