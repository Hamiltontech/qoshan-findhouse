import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";


const FeaturedListings = ({relatedCtegory}) => {
const [relatedNews, setRelatedNews] = useState([])

useEffect(()=>{
  axios.get("/news.json").then((res)=>{
    const related = res.data.filter((item)=> item.x_studio_many2one_field_doQAc[1] === relatedCtegory)
    setRelatedNews(related)
  }).catch((err)=>{
    console.log(err)
  })
}, [relatedCtegory])

  // // bring the location and type through props
  // const handleRelated = (item) =>{
  //   if(item.x_studio_many2one_field_doQAc[1] === relatedCtegory){
  //     return item?.x_studio_many2one_field_doQAc[1]
  //   }
  // }

  // console.log(relatedCtegory)
  return (
    <>
      {relatedNews?.slice(0,5).map((item) => (
        <div className="media d-flex" key={item?.id}>
          <Link href={`/news-details/${item.x_name.replace(/\s+/g, '-')}`}>
            <a>
              <img
                className="align-self-start me-3"
                src={item?.x_studio_api_url && item?.x_studio_api_url}
                alt="featured listing image"
              />
            </a>
          </Link>

          <div className="media-body" style={{margin: '5px'}}>
            <h5 className="mt-0 post_title">
            <Link href={`/news-details/${item.x_name.replace(/\s+/g, '-')}`}>
                    <a>{item?.x_name}</a>
                  </Link>
            </h5>
            <span style={{fontSize: '14px'}}>
            {item?.x_studio_original_create_date}
                </span>

          
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
