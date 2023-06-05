import Link from "next/link";
import Slider from "react-slick";
import { TfiRulerAlt } from 'react-icons/tfi'


const FeaturedProperties = ({ featured }) => {


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
        {featured?.slice(0, 12)?.map((item) => (
          <div className="item" key={item?.id} dir="rtl">
            <div className="feat_property home3">
              <div className="thumb">
                <img className="img-whp" src={item?.x_studio_featured_url && item?.x_studio_featured_url} alt="fp1.jpg" />
                <div className="thmb_cntnt">

                  {/* tags */}
                  {/* <ul className="tag ">
                    {item?.attributes?.property_tags?.data?.map((item) => (
                      <>
                        <li className="list-inline-item" style={{ width: "150px" }}>
                          <a>{item?.attributes?.Tag}</a>
                        </li>

                      </>
                    ))}
                  </ul> */}

              

                  {/* price */}

                  <Link href={`/details/${item?.x_name.replace(/\s+/g, '-')}`}>
                    <a className="fp_price">
                    {item?.x_studio_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني 

                    </a>
                  </Link>
                </div>
              </div>

              <div className="details">
                <div className="tc_content">
                  {/* type */}
                  <p className="text-thm">{item?.x_studio_property_type[1]}</p>
                  <h4>
                    <Link href={`/details/${item.x_name.replace(/\s+/g, '-')}`}>
                      <a>{item?.x_name}</a>
                    </Link>
                  </h4>

                  {/* location */}
                  <p>
                    <span className="flaticon-placeholder" style={{ marginLeft: '5px' }}></span>
                    {item?.x_studio_many2one_field_YbLip && item?.x_studio_many2one_field_YbLip[1]}
                  </p>


                  {/* area */}
                  <ul className="prop_details mb0">
                    {item?.x_studio_property_area > 0 ? 
                    <li className="list-inline-item">
                      <a href="#" style={{ display: 'flex', gap: '5px' }}>
                        <TfiRulerAlt size={15} />
                       {item?.x_studio_property_area} متر مربع
                      </a>
                    </li>
                    : <></>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeaturedProperties;



