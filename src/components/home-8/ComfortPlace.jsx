import Link from "next/link";
import {TfiRulerAlt} from 'react-icons/tfi'


const ComfortPlaces = ({data}) => {

  return (
    <>
 {data.slice(0,20).map((item) => (
  <div   className="col-sm-6 col-lg-3"  dir="rtl" key={item.id} >
    <div className="feat_property home3">
      <div className="thumb">
        <img className="img-whp" src={item.x_studio_property_images && item.x_studio_property_images.split(",")[0]} alt="fp1.jpg" />
        <div className="thmb_cntnt">

          {/* tags */}
          {/* <ul className="tag ">
  {item?.attributes?.property_tags?.data?.map((item)=>(
    <li key={item?.id} className="list-inline-item" style={{width: "150px"}}>
        <a>{item?.attributes?.Tag}</a>
     </li>
 
  ))}
  </ul> */}

          {/* price */}
          <Link href={`/details/${item.x_name.replace(/\s+/g, '-')}`}>
            <a className="fp_price">
                {item.x_studio_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني 
            </a>
          </Link>
        </div>
      </div>

      <div className="details">
        <div className="tc_content">
          {/* type */}
          <p className="text-thm">{item.x_studio_type}</p>
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

    </>
  );
};

export default ComfortPlaces;



