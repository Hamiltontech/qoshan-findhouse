import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '00962796868500';

  const handleWhatsAppClick = () => {
    const pageLink = encodeURIComponent(window.location.href);
    const message = encodeURIComponent(`مرحبا انا مهتم بالعقار التالي: ${pageLink}`);

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: '999',
      }}
    >
      <a href="#!" onClick={handleWhatsAppClick}>
        <img
          src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684695479/whatsapp_cru5zb.png" 
          alt="WhatsApp"
          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
