import {BsTiktok} from 'react-icons/bs'
import { FaCopy, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Social = ({ propertyUrl }) => {
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

  function copied() {
    setTimeout(function() {
        document.getElementById('mydiv').style.display = 'block';
    });
    setTimeout(function() {
      document.getElementById('mydiv').style.display = 'none';
  }, 2000)
}

  
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    copied()
  };

  return (
    <div>
 
      <ul >
      <strong>شارك</strong>
       <li className="list-inline-item" >
          <a href='#'  onClick={copyLink}>
            <FaCopy size={18} /> 
           
          </a>
        </li>

       
        <li className="list-inline-item" >
          <a href="http://facebook.com/qoshancom" target="_blank" rel="noopener noreferrer" onClick={sharePropertyWA}>
          <FaWhatsapp size={18} />  
          </a>
        </li>
        <li className="list-inline-item" >
          <a href="http://instagram.com/qoshancom" target="_blank" rel="noopener noreferrer" onClick={sharePropertyFB}>
          <FaFacebook size={18}  />  
          </a>
        </li>
        <li className="list-inline-item" >
          <a href="https://twitter.com/qoshancom" target="_blank" rel="noopener noreferrer" onClick={sharePropertyEmail}>
          <FaEnvelope size={18}  />  
          </a>
        </li>
        </ul>

        <span style={{fontSize: "12px", marginRight: "5px", display: "none"}} id="mydiv">
        تم نسخ الرابط
      !  </span>
    </div>
  );
};

export default Social;
