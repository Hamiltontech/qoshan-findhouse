import Link from "next/link";
import relatedPostContent from "../../data/blogs";
import {useState, useEffect} from 'react'
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';

const RelatedPost = ({relatedType, relatedLocation, property}) => {
  const [relatedProperteis, setRelatedProperties] = useState([])


  useEffect(()=>{
    axios.get("/data.json").then((response)=>{
      setRelatedProperties(response.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])

  relatedProperteis?.sort(function(a,b){
    return new Date(b?.x_studio_create_date_wp) - new Date(a?.x_studio_create_date_wp);
  })

  // bring the location and type through props
  const handleRelated = (item) =>{
    if((item?.x_studio_many2one_field_YbLip[1] === relatedLocation )){
      return item?.x_studio_many2one_field_YbLip[1]
    }  
  }

const handleType = (item)=>{
  if(item?.x_name !== property?.x_name){
    return item?.x_name
  }
}

  return (
    <>
       {relatedProperteis?.filter(handleRelated)?.filter(handleType)?.slice(0, 6).map((item) => (
        <div className="col-md-6 col-lg-6" key={item?.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/property/${item?.x_studio_property_id}`}>
                <a>
                  <img className="img-whp" src={item?.x_studio_featured_url && item?.x_studio_featured_url} alt={item.img} />
                </a>
              </Link>
            </div>
            <div className="details">
              <div className="tc_content">
                <p style={{color: "#c2b49a"}}>{item?.x_studio_property_type[1]}</p>
                <h4>
                  <Link href={`/property/${item?.x_studio_property_id}`}>
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
                
                <a className="fp_pdate float-end text-thm" href={`/property/${item?.x_studio_property_id}`}>
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
