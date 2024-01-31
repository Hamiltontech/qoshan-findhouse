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


  return (
    <>
      {relatedNews?.slice(0,5).map((item) => (
        <div className="media d-flex" key={item?.id}>
          <Link href={`/news-details/${item.x_studio_property_id}`}>
            <a>
              <img
                className="align-self-start me-3"
                src={item?.x_studio_featured_image[1] && item?.x_studio_featured_image[1]}
                alt="featured listing image"
              />
            </a>
          </Link>

          <div className="media-body" style={{margin: '5px'}}>
            <h5 className="mt-0 post_title">
            <Link href={`/news-details/${item.x_studio_property_id}`}>
                    <a>{item?.x_name}</a>
                  </Link>
            </h5>

            <ul>
           <li className="list-inline-item">
           <i className="flaticon-calendar"></i> 
           </li>
           <li className="list-inline-item">
            <span style={{fontSize: '14px', marginRight: "5px"}}>
            {item?.x_studio_original_create_date}
                </span>
           </li>
           </ul>
          
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
