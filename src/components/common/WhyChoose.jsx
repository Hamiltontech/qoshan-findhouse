import { useState, useEffect } from 'react';
import axios from 'axios';


const WhyChoose = ({ style = "" }) => {

  const handleFetch = () => {
    axios.get("https://qoshan.com/wp-json/wp/v2/properties?per_page=100&offset=200").then((response) => {
      console.log(response);

      response.data?.map((post) => {
       
          let data = new FormData();
          data.append("Name", post?.title?.rendered);
          data.append("Description", post?.content?.rendered);
          data.append("seo", post?.excerpt?.rendered);
          data.append("Price", post?.property_meta.fave_property_price);
          data.append("Area", post?.property_meta.fave_property_size);
          data.append("LArea", post?.property_meta.fave_property_land);
          data.append("Bedrooms", post?.property_meta.fave_property_bedrooms);
          data.append("Bathrooms", post?.property_meta.fave_property_bathrooms);
          data.append("Garages", post?.property_meta.fave_property_garage);
          data.append("PropertyID", post?.property_meta.fave_property_id);
        

            axios.post("https://strapi-125841-0.cloudclusters.net/api/proerties/", {
              "data": {
                "Name": post?.title?.rendered,
                "Description": post?.content?.rendered,
                "seo": post?.excerpt?.rendered,
                "Price": post?.property_meta.fave_property_price,
                "Area": post?.property_meta.fave_property_size,
                "LArea": post?.property_meta.fave_property_land,
                "Bedrooms": post?.property_meta.fave_property_bedrooms,
                "Bathrooms": post?.property_meta.fave_property_bathrooms,
                "Garages": post?.property_meta.fave_property_garage,
                "PropertyID": post?.property_meta.fave_property_id,
              }
            }).then((data) => {
              console.log(data);
            }).catch((error) => {
              console.log(error);
            });
          });
        });

  };


  const whyCooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Trusted By Thousands",
      descriptions: `Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.`,
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: "Wide Renge Of Properties",
      descriptions: `Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.`,
    },
    {
      id: 3,
      icon: "flaticon-profit",
      title: "Financing Made Easy",
      descriptions: `Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.`,
    },
  ];


  return (
    <>
      {whyCooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
            <div className="details">
              <button onClick={handleFetch}>Click me</button>
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};



export default WhyChoose;