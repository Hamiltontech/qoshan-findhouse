import {BsTiktok} from 'react-icons/bs'

const Social = () => {
  const socialContent = [
    { id: 0, liveLink: "https://twitter.com/qoshancom", icon: "fa-twitter" },
    { id: 1, liveLink: "http://instagram.com/qoshancom", icon: "fa-instagram" },
    { id: 2, liveLink: "https://api.whatsapp.com/send/?phone=962796868500&", icon: "fa-whatsapp" },

    
  ];
  return (
    <div>
      {/* {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`}></i>
          </a>
        </li>
      ))} */}
      <ul >
       <li className="list-inline-item" >
          <a href="http://tiktok.com/qoshancom" target="_blank" rel="noopener noreferrer">
            <i ><BsTiktok /></i>
          </a>
        </li>
        <li className="list-inline-item" >
          <a href="http://facebook.com/qoshancom" target="_blank" rel="noopener noreferrer">
            <i className='fa fa-facebook'/>
          </a>
        </li>
        <li className="list-inline-item" >
          <a href="http://instagram.com/qoshancom" target="_blank" rel="noopener noreferrer">
            <i className='fa fa-instagram'/>
          </a>
        </li>
        <li className="list-inline-item" >
          <a href="https://twitter.com/qoshancom" target="_blank" rel="noopener noreferrer">
            <i className='fa fa-twitter'/>
          </a>
        </li>
        <li className="list-inline-item" >
          <a href="https://api.whatsapp.com/send/?phone=962796868500&" target="_blank" rel="noopener noreferrer">
            <i className='fa fa-whatsapp'/>
          </a>
        </li>
        </ul>
    </div>
  );
};

export default Social;
