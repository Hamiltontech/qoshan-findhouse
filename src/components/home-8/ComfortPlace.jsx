import Link from "next/link";
import {TfiRulerAlt} from 'react-icons/tfi'
import { useState, useEffect } from "react";
import axios from "axios";


const ComfortPlaces = ({data}) => {

  const [ postNum, setPostNum] = useState(8);

  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 8) 
  }

  // const [inittags, setinitTags] = useState([])
  // useEffect(()=>{
  //   axios.get("/property_tags.json").then((res)=>{
  //     setinitTags(res.data)
  //   })
  // }, [])


  // let tags = data?.map((item)=>{
  //   inittags.filter(c => item?.x_studio_tags?.includes(c.id));
  // })
 
  return (
    <>
 {data?.slice(0, postNum).map((item) => (
  <div   className="col-sm-6 col-lg-3"  dir="rtl" key={item.id} >
    <div className="feat_property home3">
      <div className="thumb">
        <img className="img-whp" src={item.x_studio_featured_url && item.x_studio_featured_url} alt="fp1.jpg" />
        <div className="thmb_cntnt">

          {/* tags */}
          {/* <ul className="tag ">
  {tags.map((item)=>(
    <li key={item?.id} className="list-inline-item" style={{width: "150px"}}>
        <a>{item?.x_name}</a>
     </li>
 
  ))}
  </ul> */}

          {/* price */}
          {item.x_studio_sale_price ? 
          <Link href={`/details/${item.x_name.replace(/\s+/g, '-')}`}>
          <a className="fp_price">
              {item.x_studio_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني 
          </a>
        </Link>
        : <></>  
        }
        
        </div>
      </div>

      <div className="details">
        <div className="tc_content">
          {/* type */}
          <p className="text-thm">{item.x_studio_property_type[1]}</p>
          <h4>
            <Link href={`/details/${item.x_name.replace(/\s+/g, '-')}`}>
              <a>{item.x_name}</a>
            </Link>
          </h4>

          {/* location */}
          <p>
            <span className="flaticon-placeholder" style={{marginLeft: '5px'}}></span>
            {item.x_studio_many2one_field_YbLip[1]}
          </p>

           {/* area */}
          <ul className="prop_details mb0">
              <li className="list-inline-item">
                <a href="#" style={{display: 'flex', gap: '5px'}}>
                  <TfiRulerAlt size={15}/>
                  المساحة: {item.x_studio_property_area} متر مربع
                </a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
))}
<div style={{ display: "flex", placeContent: "center"}}>
<button  className="btn btn-thm" type="submit" onClick={handleClick}>عرض المزيد</button></div>
    </>
  );
};


export default ComfortPlaces;



