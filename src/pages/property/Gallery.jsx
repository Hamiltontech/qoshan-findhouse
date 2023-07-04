import Link from "next/link";
import Slider from "react-slick";
import { Item } from "react-photoswipe-gallery";

const Gallery = ({gal}) => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
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
            <div className="feat_property">
            <div className="spls_style_two img-gallery-box mt10">
                          <Item
                            original={val}
                            thumbnail={val}
                            width={752}
                            height={450}
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
