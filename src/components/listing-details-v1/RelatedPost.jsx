import Link from "next/link";
import relatedPostContent from "../../data/blogs";
import {useState, useEffect} from 'react'
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';

const RelatedPost = ({relatedType, relatedLocation}) => {
  const [relatedProperteis, setRelatedProperties] = useState([])


  useEffect(()=>{
    axios.get("/data.json").then((response)=>{
      setRelatedProperties(response.data)
    })
  }, [])


  // bring the location and type through props
  const handleRelated = (item) =>{
    if((item?.x_studio_many2one_field_YbLip[1] === relatedLocation)){
      return item?.x_studio_many2one_field_YbLip[1]
    }
  }

  return (
    <>
       {relatedProperteis?.filter(handleRelated)?.slice(0, 4).map((item) => (
        <div className="col-md-6 col-lg-6" key={item?.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/detials/${item?.id}`}>
                <a>
                  <img className="img-whp"  src={item?.x_studio_property_images && item?.x_studio_property_images.split(",")[0]} alt={item.img} />
                </a>
              </Link>
            </div>
            <div className="details">
              <div className="tc_content">
                <h4>
                  <Link href={`/details/${item?.x_name.replace(/\s+/g, '-')}`}>
                    <a>{item?.x_name}</a>
                  </Link>
                </h4>
                <ul className="bpg_meta">
                  
                  <li className="list-inline-item">
                  <span className="flaticon-maps-and-flags" /> <a href="#">{item?.x_studio_many2one_field_YbLip[1]}</a>
                  </li>
                </ul>
                {/* <p> {item?.x_studio_property_information &&  ReactHtmlParser(item?.x_studio_property_information.slice(0, 65)) }</p> */}
              </div>
              {/* End . tc_content */}

              <div className="fp_footer">
                
                <a className="fp_pdate float-end text-thm" href={`/details/${item?.x_name.replace(/\s+/g, '-')}`}>
                  تفاصيل <span className="flaticon-back"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedPost;
