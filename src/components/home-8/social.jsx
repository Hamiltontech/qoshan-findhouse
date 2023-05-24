import React, { useState } from 'react';

const SocialComponent = () => {
  const [isOpen, setOpen] = useState(false);

  const socialStyles = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: '999',
  };

  const iconStyles = {
    marginRight: '10px',
    fontSize: '20px',
    color: '#555',
    textDecoration: 'none',
  };

  const phoneNumberStyles = {
    fontSize: '14px',
    color: '#555',
    textDecoration: 'none',
  };

  return (
    <>
      {isOpen && (
        <div style={socialStyles}>
          <div>
            <a href="#" style={iconStyles}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" style={iconStyles}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" style={iconStyles}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div>
            <span style={phoneNumberStyles}>Phone: 123-456-7890</span>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialComponent;
