import Link from "next/link";
import featureContent from "../../../data/properties";

import {useState, useEffect} from 'react'
import axios from "axios";

const FeaturedListings = ({relatedCtegory, setRelatedCategory}) => {

  const [relatedNews, setRelatedNews] = useState([])


  // maybe you should pass the id as a second parameter
  useEffect(()=>{
    axios.get("https://strapi-125841-0.cloudclusters.net/api/articles?populate=*").then((response)=>{
      setRelatedNews(response?.data?.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])



  // bring the location and type through props
  const handleRelated = (item) =>{
    if(item?.attributes?.category?.data?.attributes?.Category === relatedCtegory){
      return item?.attributes?.category?.data?.attributes?.Category
    }
  }

  console.log(relatedNews)
  return (
    <>
      {relatedNews?.slice(0,5)?.filter(handleRelated)?.map((item) => (
        <div className="media d-flex" key={item?.id}>
          <Link href={`/news-details/${item?.attributes?.URL}`}>
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
            <Link href={`/news-details/${item?.attributes?.URL}`}>
                    <a>{item?.attributes?.Title}</a>
                  </Link>
            </h5>
            <span style={{fontSize: '14px'}}>
            {item?.attributes?.createdAt.split('T')[0]}
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
