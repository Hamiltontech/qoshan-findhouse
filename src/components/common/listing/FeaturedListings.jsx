import Link from "next/link";
import featureContent from "../../../data/properties";

import {useState, useEffect} from 'react'
import axios from "axios";

const FeaturedListings = ({relatedType, relatedLocation}) => {

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
        <div className="media d-flex" key={item?.id}>
          <Link href={`/detials/${item?.id}`}>
            <a>
              <img
                className="align-self-start me-3"
                src={'https://strapi-125841-0.cloudclusters.net' + item?.attributes?.Featured?.data?.attributes?.formats?.large?.url}
                alt="featured listing image"
              />
            </a>
          </Link>

          <div className="media-body" style={{margin: '5px'}}>
            <h5 className="mt-0 post_title">
              <Link href={`/details/${item?.attributes?.URL}`}>
                <a>{item?.attributes?.Name}</a>
              </Link>
            </h5>
            <span style={{fontSize: '14px'}}>
                {item?.attributes?.Price?.slice(0,3)},{item?.attributes?.Price?.slice(3)} دينار أردني 
                </span>

            {/* <ul className="mb0">
              {item.itemDetails.map((val, i) => (
                <li key={i} className="list-inline-item">
                  {val.name}:{val.number} &nbsp;
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
