import Link from "next/link";
import Slider from "react-slick";

// diala
import axios from "axios";
import { useEffect, useState } from "react";
import {BiBath} from 'react-icons/bi'
import {IoBedOutline} from 'react-icons/io5'
import {TfiRulerAlt} from 'react-icons/tfi'

const HeroSlider = ({heroProperties}) => {


  const settings = {
    dots: true,
    arrow: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };


  return (
    <Slider {...settings} arrows={false}>
      {heroProperties.map((singleItem) => (
        <div
        dir="rtl"
          className={`bs_carousel_bg vh-100`}
          key={singleItem.id}
        >
          <img className="vh-100 image-hero" 
          src={singleItem.x_studio_property_images && singleItem.x_studio_property_images.split(",")[0]}
          alt="slider-property" />
          
          <div className="carousel-slide ">
            <div className="bs-caption">
              <div className="container">
                <div className="row align-items-center">
                 
                  <div className="col-md-7 col-lg-8">

                    {/* tags */}
                    {/* <ul className="tag">
                    {singleItem?.attributes?.property_tags?.data?.map((item)=>(
                          <>
                        <li className="list-inline-item" style={{color:'white',margin: '6px', backgroundColor: '#404041', paddingLeft: '20px',paddingRight: '20px', borderRadius: '6px'}}>
                      {item?.attributes?.Tag}
                        </li>
                          </>
                       ))}
                    </ul> */}
  
                 

                  {/* title */}
                    <div className="main_title" style={{fontSize: '40px', fontFamily: 'Changa'}}>{singleItem?.x_name}</div>
                   
                  {/* details */}
                  <div style={{display: 'flex', justifyContent: 'start', gap: '20px'}}>
                    {/* location */}
                  <div style={{display: 'flex', gap: '2px', }}>
                  <span className="flaticon-maps-and-flags" /> <p style={{color: 'white', fontSize: '16px'}}>{singleItem?.x_studio_many2one_field_YbLip && singleItem?.x_studio_many2one_field_YbLip[1]}</p>
                  </div>

                    {/* bathrooms */}
                    {singleItem?.x_studio_bathrooms_1 ? 
                  <div style={{display: 'flex', gap: '2px', }}>
                  <BiBath size={20}/> <p style={{color: 'white', fontSize: '16px'}}>حمامات:  {singleItem?.x_studio_bathrooms_1}</p>
                  </div>  
                    : <></>}

                    {/* bedrooms */}
                    {singleItem?.x_studio_bedrooms ? 
                  <div style={{display: 'flex', gap: '2px', }}>
                  <IoBedOutline size={20} /> <p style={{color: 'white', fontSize: '16px'}}>غرف نوم: {singleItem?.x_studio_bedrooms}</p>
                  </div>
                    : <></>
                  }
                  </div>


                  {/* Area */}
                  {singleItem?.x_studio_land_area > 0 ? 
                  <div style={{display: 'flex', gap: '2px', }}>
                  <TfiRulerAlt size={20} /> <p style={{color: 'white', fontSize: '16px'}}>المساحة: {singleItem?.x_studio_land_area} متر مربع</p>
                  </div>
                  : <></>
                  }
                  

                  {/* price */}
                  <p style={{fontSize: '22px', color: '#c2b49a', fontWeight: 'bold'}}>
                  {singleItem.x_studio_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني 
                </p>      

                {/* details */}
                <Link href={`/details/${singleItem.x_name.replace(/\s+/g, '-')}`}>
                <button className="btn btn-thm" type="submit">تفاصيل</button>
                </Link>
                  </div>
                </div>
              </div>
              {/* End .container */}
            </div>    
          </div>
        </div>
        
      ))}
    </Slider>
  );
};

export default HeroSlider;
