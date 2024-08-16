import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';

const SocialLinks = () => {
  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '18px',
    color: '#343a40', 
    backgroundColor: 'transparent', // Transparent background
    border: '1px solid #343a40', // Border color
    borderRadius: '5px',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const iconStyle = {
    marginRight: '8px',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <a href="https://www.linkedin.com/in/akhileshwar-gurram-b434591b6/" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
        <FaLinkedin style={iconStyle} /> LinkedIn
      </a>
      <a href="https://twitter.com/akhileshwar333" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
        <FaTwitter style={iconStyle} /> Twitter
      </a>
      <a href="https://github.com/Maveric-k07" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
        <FaGithub style={iconStyle} /> GitHub
      </a>
      <a href="https://medium.com/@gurramakhileshwar333" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
        <FaMedium style={iconStyle} /> Medium
      </a>
    </div>
  );
};

export default SocialLinks;
