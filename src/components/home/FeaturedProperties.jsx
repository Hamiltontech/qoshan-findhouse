import Link from "next/link";
import Slider from "react-slick";
import properties from "../../data/properties";
import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedProperties = () => {

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    axios.get("https://strapi-125841-0.cloudclusters.net/api/articles?populate=*").then((res)=>{
      setArticles(res?.data?.data)
  }).catch((err)=>{
    console.log(err)
  })
  }, [])


  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
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
        <div className="thumb">
          <img className="img-whp" src={'https://strapi-125841-0.cloudclusters.net' + item?.attributes?.Featured?.data?.attributes?.formats?.large?.url} alt="fp1.jpg" />
          <div className="thmb_cntnt">
            {/* <ul className="tag mb0">
              {item.saleTag.map((val, i) => (
                <li className="list-inline-item" key={i}>
                  <a href="#">{val}</a>
                </li>
              ))}
            </ul> */}
            {/* End .tag */}

            {/* End .icon */}

            {/* <Link href={`/news-details/${item.id}`}>
              <a className="fp_price">
                ${item.price}
                <small>/mo</small>
              </a>
            </Link> */}
          </div>
        </div>
        {/* End .thumb */}

        <div className="details">
          <div className="tc_content">
            <p className="text-thm">{item?.attributes?.category?.data?.attributes?.Category}</p>
            <h4>
              <Link href={`/news-details/${item?.attributes?.URL}`}>
                <a>{item.attributes.Title}</a>
              </Link>
            </h4>
            {/* <p>
              <span className="flaticon-placeholder"></span>
              {item.location}
            </p> */}

            {/* <ul className="prop_details mb0">
              {item.itemDetails.map((val, i) => (
                <li className="list-inline-item" key={i}>
                  <a href="#">
                    {val.name}: {val.number}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>
          {/* End .tc_content */}

          <div className="fp_footer">
            {/* <ul className="fp_meta float-start mb0">
              <li className="list-inline-item">
                <Link href="/agent-v2">
                  <a>
                    <img src={item.posterAvatar} alt="pposter1.png" />
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/agent-v2">
                  <a>{item.posterName}</a>
                </Link>
              </li>
            </ul> */}
            <div className="fp_pdate float-end">{item.attributes?.createdAt.split('T')[0]}</div>
          </div>
          {/* End .fp_footer */}
        </div>
        {/* End .details */}
      </div>
    </div>
  ));

  return (
    <>
      <Slider {...settings} arrows={false}>
        {content}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
