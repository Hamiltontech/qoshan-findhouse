import Link from "next/link";
import relatedPostContent from "../../data/blogs";
import {useState, useEffect} from 'react'
import axios from "axios";

const RelatedPost = ({relatedType, relatedLocation}) => {

    
  const [relatedProperteis, setRelatedProperties] = useState([])


  // maybe you should pass the id as a second parameter
  useEffect(()=>{
    axios.get("https://strapi-125841-0.cloudclusters.net/api/proerties?populate=*").then((response)=>{
      setRelatedProperties(response?.data?.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])


  // bring the location and type through props
  const handleRelated = (item) =>{
    if((item?.attributes?.areas?.data?.attributes?.Name === relatedLocation) && (item?.attributes?.type?.data?.attributes?.Name === relatedType)){
      return item?.attributes?.areas?.data?.attributes?.Name, item?.attributes?.type?.data?.attributes?.Name
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
                  <img className="img-whp"  src={'https://strapi-125841-0.cloudclusters.net' + item?.attributes?.Featured?.data?.attributes?.formats?.large?.url} alt={item.img} />
                </a>
              </Link>
            </div>
            <div className="details">
              <div className="tc_content">
                <h4>
                  <Link href={`/details/${item?.attributes?.URL}`}>
                    <a>{item?.attributes?.Name}</a>
                  </Link>
                </h4>
                <ul className="bpg_meta">
                  
                  {/* <li className="list-inline-item">
                    <a href="#">{item.postedDate}</a>
                  </li> */}
                </ul>
                <p>{item?.attributes?.Description?.slice(0, 65)}</p>
              </div>
              {/* End . tc_content */}

              <div className="fp_footer">
                
                <a className="fp_pdate float-end text-thm" href={`/details/${item?.attributes?.URL}`}>
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
