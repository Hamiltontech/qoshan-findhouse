import {BsTiktok} from 'react-icons/bs'

const Social = () => {
  const socialContent = [
    { id: 1, liveLink: "http://facebook.com/qoshancom", icon: "fa-facebook" },
    { id: 2, liveLink: "https://twitter.com/qoshancom", icon: "fa-twitter" },
    { id: 3, liveLink: "http://instagram.com/qoshancom", icon: "fa-instagram" },
    { id: 4, liveLink: "https://api.whatsapp.com/send/?phone=962796868500&", icon: "fa-whatsapp" },

    
  ];
  return (
    <div style={{marginLeft: "10px"}}>
      {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`}></i>
          </a>
        </li>
      ))}
       <li className="list-inline-item" >
          <a href="http://tiktok.com/qoshancom" target="_blank" rel="noopener noreferrer">
            <i><BsTiktok /></i>
          </a>
        </li>
    </div>
  );
};

export default Social;
