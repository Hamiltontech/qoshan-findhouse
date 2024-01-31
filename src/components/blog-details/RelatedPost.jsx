import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import relatedPostContent from "../../data/blogs";
import ReactHtmlParser from 'react-html-parser';


const RelatedPost = ({relatedCtegory}) => {
  const [relatedNews, setRelatedNews] = useState([])

useEffect(()=>{
  axios.get("/news.json").then((res)=>{
    const related = res.data.filter((item)=> item.x_studio_many2one_field_doQAc[1] === relatedCtegory)
    setRelatedNews(related)
  }).catch((err)=>{
    console.log(err)
  })
}, [relatedCtegory])

relatedNews?.sort(function(a,b){
  return new Date(b?.x_studio_original_create_date) - new Date(a?.x_studio_original_create_date);
});


  return (
    <>
      {relatedNews?.slice(0,4).map((item) => (
        <div className="col-md-6 col-lg-6" key={item?.id} dir="rtl">
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/news-details/${item.x_name.replace(/\s+/g, '-')}`}>
                <a>
                  <img className="img-whp" src={item?.x_studio_featured_image[1] && item?.x_studio_featured_image[1]} alt={item?.x_studio_featured_image[1] && item?.x_studio_featured_image[1]} />
                </a>
              </Link>
            </div>
            <div className="details">
              <div className="tc_content">
                <h4>
                  <Link href={`/news-details/${item.x_name.replace(/\s+/g, '-')}`}>
                    <a>{item?.x_name}</a>
                  </Link>
                </h4>
                <ul className="bpg_meta">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="flaticon-calendar"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{item?.x_studio_original_create_date}</a>
                  </li>
                </ul>
                <p>{ReactHtmlParser(item?.x_studio_body.slice(0, 90) + "...")}</p>
              </div>
              {/* End . tc_content */}

              <div className="fp_footer">
               
              <a className=" text-thm" href={`/news-details/${item.x_name.replace(/\s+/g, '-')}`}>
                  إقرأ المزيد <span className="flaticon-back"></span>
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
