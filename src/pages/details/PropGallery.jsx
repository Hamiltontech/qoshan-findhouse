import Link from "next/link";
import Slider from "react-slick";
import { TfiRulerAlt } from 'react-icons/tfi'


const PropGallery = ({ gal }) => {


  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>

      {/* should be featured.slice(0,12).map */}
      <Slider {...settings} arrows={true}>
        {gal?.map((val, i) => (
          <div className="item mt10" key={i} dir="rtl">
            <div className=" home3">
              <a  style={{zIndex: "1000"}}>
              <div className="thumb">
                <img className="img-whp" src={val} alt="fp1.jpg" />
              </div>
              </a>
            </div>
          </div>
          ))}
      </Slider>
    </>
  );
};

export default PropGallery;



