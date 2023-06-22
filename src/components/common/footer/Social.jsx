import {TbBrandTiktok} from 'react-icons/tb'

const Social = () => {

  return (
    <div>
      <ul >
       <li className="list-inline-item" >
          <a href="http://tiktok.com/qoshancom" target="_blank" rel="noopener noreferrer" style={{marginLeft: "-5px"}}>
            <i ><TbBrandTiktok size={25}/></i>
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
          <a href="https://youtube.com/@qoshancom4230" target="_blank" rel="noopener noreferrer">
            <i className='fa fa-youtube'/>
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
