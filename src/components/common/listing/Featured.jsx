import featureProContent from "../../../data/properties";
import Slider from "react-slick";
import Link from "next/link";

const Featured = ({featured}) => {
    const settings = {
        dots: true,
        arrows: false,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
    };

    return (
        <>
            <Slider {...settings} arrows={false}>
                {featured?.slice(0,5)?.map((item) => (
                    <div className="item" key={item.id}>
                         <a href={`/details/${item?.x_name.replace(/\s+/g, '-')}`}>
                        <div className="feat_property home7">
                            <div className="thumb">
                              
                                <img
                                    className="img-whp"
                                    src={item?.x_studio_featured_url && item?.x_studio_featured_url}
                                    alt="properties identity"
                            
/>
                                <div className="thmb_cntnt">
                                    {/* <ul className="tag mb0">
                                        {item?.attributes?.property_tags?.data?.map((val, i) => (
                                            <li
                                                className="list-inline-item"
                                                key={i}
                                            >
                                                <a href="#">{val?.attributes?.Tag}</a>
                                            </li>
                                        ))}
                                    </ul> */}
                                    <a className="fp_price" href={`/details/${item?.x_name.replace(/\s+/g, '-')}`}>
                                    {item?.x_studio_sale_price && item?.x_studio_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني 
                                    </a>
                                    <h4 className="posr color-white">
                                        {item?.x_name}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default Featured;
