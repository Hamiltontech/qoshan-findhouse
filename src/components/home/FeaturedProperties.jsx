import Link from "next/link";
import Slider from "react-slick";
import properties from "../../data/properties";
import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedProperties = () => {

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    axios.get("/news.json").then((res)=>{
      setArticles(res.data)
  }).catch((err)=>{
    console.log(err)
  })
  }, [])

  articles?.sort(function(a,b){
    return new Date(b?.x_studio_original_create_date) - new Date(a?.x_studio_original_create_date);
  });

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  let content = articles?.slice(0, 12)?.map((item) => (
    <div className="item" key={item.id}>
      
      <div className="feat_property">
        <a href={`/news-details/${item.x_name.replace(/\s+/g, '-')}`}>
        <div className="thumb">
          <img className="img-whp" src={item?.x_studio_featured_image[1]} alt="fp1.jpg" />
          <div className="thmb_cntnt">
          </div>
        </div>
        {/* End .thumb */}

        <div className="details">
          <div className="tc_content">
            <p className="text-thm">{item?.attributes?.category?.data?.attributes?.Category}</p>
            <h4>
              <Link href={`/news-details/${item.x_name.replace(/\s+/g, '-')}`}>
                <a>{item.x_name}</a>
              </Link>
            </h4>
            <ul className="">
                  <li className="list-inline-item text-thm" >
                      <i className="flaticon-calendar"></i>
                  </li>
                  <li className="list-inline-item text-thm" style={{margin: 5,}}>
                 {item.x_studio_original_create_date}
                  </li>
                </ul>
          </div>
         
          {/* End .tc_content */}

          <div className="fp_footer">
          <a className=" text-thm" href={`/news-details/${item.x_name.replace(/\s+/g, '-')}`}>
                  إقرأ المزيد <span className="flaticon-back"></span>
                </a>
          </div>
          {/* End .fp_footer */}
        </div>
        </a>
        {/* End .details */}
      </div>
    </div>
  ));

  return (
    <>
      <Slider {...settings} arrows={false} >
        {content}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
