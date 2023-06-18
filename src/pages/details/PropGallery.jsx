import Link from "next/link";
import Slider from "react-slick";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";




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
              {/* <div className="thumb">
                <img className="img-whp" src={val} alt="fp1.jpg" />
              </div> */}

<div className="spls_style_two img-gallery-box mb24">
                          <Item
                            original={val}
                            thumbnail={val}
                            width={752}
                            height={450}
                            priority
                            layout="responsive"

                          >
                            {({ ref, open }) => (
                              <div role="button" ref={ref} onClick={open}>
                                <img
                                  className="img-fluid w100"
                                  src={val}
                                  alt="2.jpg"
                                  priority
                                />
                              </div>
                            )}
                          </Item>
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



