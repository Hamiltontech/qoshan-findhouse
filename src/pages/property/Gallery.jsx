
import Slider from "react-slick";
import { Item } from "react-photoswipe-gallery";

const Gallery = ({gal}) => {
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 700,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {gal?.map((val, id) => (
          <div className="item" key={id}>
            <div className="feat_property mt10">
            <div className="spls_style_two img-gallery-box ">
              
                          <Item
                            original={val}
                            thumbnail={val}
                            // width={452}
                            // height={550}
                            priority
                            layout="responsive"
                            placeholder="blur"
                            blurDataURL={val} 
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
              {/* End .thumb */}

            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Gallery;
