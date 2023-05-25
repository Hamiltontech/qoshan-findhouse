import React from 'react';
import { FaCopy, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Sharing = ({ propertyUrl }) => {
  const shareProperty = () => {
    const message = `${propertyUrl}`;
    console.log(`Sharing property: ${message}`);
  };
  const sharePropertyEmail = () => {
    const subject = 'عقار من قوشان';
    const body = `مرحباً , شاهد هذا العقار على قوشان الآن :\n${propertyUrl}`;
    const emailUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = emailUrl;
  };
  const sharePropertyWA = () => {
    const message = `شاهد هذا العقار على قوشان: ${propertyUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };
  const sharePropertyFB = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(propertyUrl)}`;

    window.open(facebookUrl, '_blank');
  };
  const copyLink = () => {
    navigator.clipboard.writeText(propertyUrl)
      .then(() => {
        console.log('Property link copied to clipboard');
      })
      .catch((error) => {
        console.error('Failed to copy property link:', error);
      });
  };

  return (
    <div className="property-share-icons">
    <strong>شارك العقار</strong>
      <button className="property-share-icon" onClick={copyLink} style={{background: '#404041', border: 'none', borderRadius: '10px', padding: '10px', margin: '10px', color: 'white' }}>
        <FaCopy size={18} color="white" /> 
      </button>
      <button className="property-share-icon" onClick={sharePropertyWA} style={{background: '#404041', border: 'none', borderRadius: '10px', padding: '10px', margin: '10px', color: 'white' }}>
        <FaWhatsapp size={18} color="white" />  
      </button>
      <button className="property-share-icon" onClick={sharePropertyFB} style={{background: '#404041', border: 'none', borderRadius: '10px', padding: '10px', margin: '10px', color: 'white' }}>
        <FaFacebook size={18} color="white" />      </button>
      <button className="property-share-icon" onClick={sharePropertyEmail} style={{background: '#404041', border: 'none', borderRadius: '10px', padding: '10px', margin: '10px', color: 'white' }}>
        <FaEnvelope size={18} color="white" />       </button>
    </div>
  );
};

export default Sharing;
