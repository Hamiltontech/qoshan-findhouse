import Link from "next/link";
import Slider from "react-slick";
import {TfiRulerAlt} from 'react-icons/tfi'


const ComfortPlaces = ({featured, data}) => {



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
 {/* <Slider {...settings} arrows={true}> */}


 {data?.map((item) => (
  <div   className="col-sm-6 col-lg-3"  dir="rtl" key={item?.id} >
    <div className="feat_property home3">
      <div className="thumb">
        <img className="img-whp" src={'https://strapi-125841-0.cloudclusters.net' + item?.attributes?.Featured?.data?.attributes?.formats?.large?.url} alt="fp1.jpg" />
        <div className="thmb_cntnt">

          {/* tags */}
          <ul className="tag ">
  {item?.attributes?.property_tags?.data?.map((item)=>(
    <li key={item?.id} className="list-inline-item" style={{width: "150px"}}>
        <a>{item?.attributes?.Tag}</a>
     </li>
 
  ))}
  </ul>


          {/* price */}

          <Link href={`/details/${item?.attributes?.URL}`}>
            <a className="fp_price">
            {item?.attributes?.Price?.slice(0,3)},{item?.attributes?.Price?.slice(3)} دينار أردني

            </a>
          </Link>
        </div>
      </div>

      <div className="details">
        <div className="tc_content">
          {/* type */}
          <p className="text-thm">{item?.attributes?.type?.data?.attributes?.Name}</p>
          <h4>
            <Link href={`/details/${item?.attributes?.URL}`}>
              <a>{item?.attributes?.Name}</a>
            </Link>
          </h4>

          {/* location */}
          <p>
            <span className="flaticon-placeholder" style={{marginLeft: '5px'}}></span>
            {item?.attributes?.areas?.data?.attributes?.Name}
          </p>


                {/* area */}
          <ul className="prop_details mb0">
              <li className="list-inline-item">
                <a href="#" style={{display: 'flex', gap: '5px'}}>
                  <TfiRulerAlt size={15}/>
                  المساحة: {item?.attributes?.Area} متر مربع
                </a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
))}
{/* </Slider> */}

    </>
  );
};

export default ComfortPlaces;



