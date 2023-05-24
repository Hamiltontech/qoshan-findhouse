import Link from "next/link";
import Slider from "react-slick";

// diala
import axios from "axios";
import { useEffect, useState } from "react";
import {BiBath} from 'react-icons/bi'
import {IoBedOutline} from 'react-icons/io5'
import {TfiRulerAlt} from 'react-icons/tfi'

const HeroSlider = () => {
// diala
const [data, setData] = useState([])

useEffect(()=>{
  axios.get("https://strapi-125841-0.cloudclusters.net/api/proerties?populate=*").then((res)=>{
    setData(res.data.data)
  }).catch((err)=>{
    console.log(err)
  })
}, [])  


// diala - to find only the featured then slice them to only 3
let arr = data?.filter((ele) => ele?.attributes?.Slider === true) 
// const ar = arr?.slice(Math.max(arr?.length - 3, 1))


  const settings = {
    dots: true,
    arrow: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const sliderContent = [
    {
      id: 1,
      bgImage: "slidebg-1",
      propertyList: [
        {
          id: 1,
          img: "assets/images/property/fp1.jpg",
          price: "1300",
          type: "Apartment",
          title: "Luxurious Apartment",
          location: `1421 San Pedro
          St, Los Angeles, CA 90015`,
          saleTag: ["مميز", "للبيع"],
          itemDetails: [
            { name: "غرف نوم", number: "4" },
            { name: "حمامات", number: "2" },
            { name: "المساحة", number: "5280" },
          ],
        },
      ],
    },
    {
      id: 2,
      bgImage: "slidebg-1",
      title: "Your Property, Our Priority.",
      subTitle: "From as low as $10 per day with limited time offer discounts",
      propertyList: [
        {
          id: 2,
          img: "assets/images/property/fp2.jpg",
          price: "1300",
          type: "Villa",
          title: "Renovated Apartment",
          location: `1421 San Pedro
          St, Los Angeles, CA 90015`,
          saleTag: ["Featured", "For Rent"],
          itemDetails: [
            { name: "Beds", number: "4" },
            { name: "Baths", number: "2" },
            { name: "SqFt", number: "5280" },
          ],
          posterAvatar: "assets/images/property/pposter1.png",
          posterName: "Ali Tufan",
          postedYear: "1 year ago",
        },
      ],
    },
    {
      id: 3,
      bgImage: "slidebg-1",
      title: "Find Your Dream Home",
      subTitle: "From as low as $10 per day with limited time offer discounts",
      propertyList: [
        {
          id: 3,
          img: "assets/images/property/fp3.jpg",
          price: "1300",
          type: "Single Family Home",
          title: "Luxurious Apartment",
          location: `1421 San Pedro
          St, Los Angeles, CA 90015`,
          saleTag: ["Featured", "For Rent"],
          itemDetails: [
            { name: "Beds", number: "4" },
            { name: "Baths", number: "2" },
            { name: "SqFt", number: "5280" },
          ],
          posterAvatar: "assets/images/property/pposter1.png",
          posterName: "Ali Tufan",
          postedYear: "1 year ago",
        },
      ],
    },
  ];

  return (
    <Slider {...settings} arrows={false}>
      {arr.map((singleItem) => (
        <div
        dir="rtl"
          className={`bs_carousel_bg vh-100`}
          key={singleItem.id}
        >
          <img className="vh-100 image-hero" src={'https://strapi-125841-0.cloudclusters.net' + singleItem?.attributes?.Featured?.data?.attributes?.formats?.large?.url} />
          
          <div className="carousel-slide ">
            <div className="bs-caption">
              <div className="container">
                <div className="row align-items-center">
                 
                  <div className="col-md-7 col-lg-8">

                    {/* tags */}
                    <ul className="tag">
                    {singleItem?.attributes?.property_tags?.data?.map((item)=>(
                          <>
                        <li className="list-inline-item" style={{color:'white',margin: '6px', backgroundColor: '#404041', paddingLeft: '20px',paddingRight: '20px', borderRadius: '6px'}}>
                      {item?.attributes?.Tag}
                        </li>
                          </>
                       ))}
                    </ul>
  
                 

                  {/* title */}
                    <div className="main_title" style={{fontSize: '40px', fontFamily: 'Changa'}}>{singleItem?.attributes?.Name}</div>
                   
                  {/* details */}
                  <div style={{display: 'flex', justifyContent: 'start', gap: '20px'}}>
                    {/* location */}
                  <div style={{display: 'flex', gap: '2px', }}>
                  <span className="flaticon-maps-and-flags" /> <p style={{color: 'white', fontSize: '16px'}}>{singleItem?.attributes?.areas?.data?.attributes?.Name}</p>
                  </div>

                    {/* bathrooms */}
                  <div style={{display: 'flex', gap: '2px', }}>
                  <BiBath size={20}/> <p style={{color: 'white', fontSize: '16px'}}>حمامات:  {singleItem?.attributes?.Bathrooms}</p>
                  </div>  

                    {/* bedrooms */}
                  <div style={{display: 'flex', gap: '2px', }}>
                  <IoBedOutline size={20} /> <p style={{color: 'white', fontSize: '16px'}}>غرف نوم: {singleItem?.attributes?.Bedrooms}</p>
                  </div>
                  </div>


                  {/* Area */}
                  <div style={{display: 'flex', gap: '2px', }}>
                  <TfiRulerAlt size={20} /> <p style={{color: 'white', fontSize: '16px'}}>المساحة: {singleItem?.attributes?.Area} متر مربع</p>
                  </div>
                  

                  {/* price */}
                  <p style={{fontSize: '22px', color: '#c2b49a', fontWeight: 'bold'}}>
                {singleItem?.attributes?.Price?.slice(0,3)},{singleItem?.attributes?.Price?.slice(3)} دينار أردني
                </p>      

                {/* details */}
                <Link href={`/details/${singleItem?.attributes?.URL}`}>
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
