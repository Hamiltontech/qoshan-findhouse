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
          src={singleItem.x_studio_featured_url && singleItem.x_studio_featured_url}
          alt="slider-property" />
          
          <div className="carousel-slide ">
            <div className="bs-caption">
              <div className="container">
                <div className="row align-items-center">
                 
                  <div className="col-md-7 col-lg-8">

         {/* tags */}
                {/* <ul className="tag">
                  {tags?.map((item) => (
                    <li key={item?.id} className="list-inline-item" style={{ color: 'white', margin: '6px', backgroundColor: '#c2b49a', paddingLeft: '20px', paddingRight: '20px', borderRadius: '6px' }}>
                      {item?.x_name}
                    </li>
                  ))}
                </ul> */}
  
                 

                  {/* title */}
                    <a href={`/property/${singleItem?.x_studio_property_id}`}>
                    <div className="main_title" style={{fontSize: '40px', fontFamily: 'Changa'}}>{singleItem?.x_name}</div>
                    </a>
               
              
                  {/* details */}
                  <div style={{display: 'flex', justifyContent: 'start', gap: '20px'}}>
                    {/* location */}

                    {singleItem?.x_studio_many2one_field_YbLip ? 
                    
                  <div style={{display: 'flex', gap: '2px', }}>
                  <span className="flaticon-maps-and-flags" /> <p style={{color: 'white', fontSize: '16px'}}>{singleItem?.x_studio_many2one_field_YbLip && singleItem?.x_studio_many2one_field_YbLip[1]}</p>
                  </div>
                    :
                    <></>}

                    {/* bathrooms */}
                    {singleItem?.x_studio_bathrooms_count ? 
                  <div style={{display: 'flex', gap: '2px', }}>
                  <BiBath size={20}/> <p style={{color: 'white', fontSize: '16px'}}>حمامات:  {singleItem?.x_studio_bathrooms_count}</p>
                  </div>  
                    : <></>}

                    {/* bedrooms */}
                    {singleItem?.x_studio_beedrooms_count ? 
                  <div style={{display: 'flex', gap: '2px', }}>
                  <IoBedOutline size={20} /> <p style={{color: 'white', fontSize: '16px'}}>غرف نوم: {singleItem?.x_studio_beedrooms_count}</p>
                  </div>
                    : <></>
                  }
                  </div>


                  {/* Area */}
                  {singleItem?.x_studio_landarea > 0 ? 
                  <div style={{display: 'flex', gap: '2px', }}>
                  <TfiRulerAlt size={20} /> <p style={{color: 'white', fontSize: '16px'}}>المساحة: {singleItem?.x_studio_landarea} متر مربع</p>
                  </div>
                  : <></>
                  }
                  

                  {/* price */}
                  <p style={{fontSize: '22px', color: '#c2b49a', fontWeight: 'bold'}}>
                  {singleItem.x_studio_sales_price?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني 
                </p>      

                {/* details */}
                <Link href={`/property/${singleItem.x_studio_property_id}`}>
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
