// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const WhyChoose = ({ style = "" }) => {

//   const handleFetch = () => {
//     axios.get("https://qoshan.com/wp-json/wp/v2/properties").then((response) => {

//       response.data?.map((post) => {
        
//             const mediaFile = new File(["blob"], post?.x_featured_media_original, {
//               type: "image/jpeg",
//             });

//             const fileData = new FormData();
//             fileData.append("files", mediaFile);

//             axios
//               .post("https://strapi-125841-0.cloudclusters.net/api/upload/", fileData)
//               .then((res) => {
//                 const fileId = res.data[0].id;

//                 axios
//                   .post("https://strapi-125841-0.cloudclusters.net/api/properties/", {
//                     data: {
//                       Name: post?.title?.rendered,
//                       Description: post?.content?.rendered,
//                       seo: post?.excerpt?.rendered,
//                       Price: post?.property_meta.fave_property_price,
//                       Area: post?.property_meta.fave_property_size,
//                       LArea: post?.property_meta.fave_property_land,
//                       Bedrooms: post?.property_meta.fave_property_bedrooms,
//                       Bathrooms: post?.property_meta.fave_property_bathrooms,
//                       Garages: post?.property_meta.fave_property_garage,
//                       PropertyID: post?.property_meta.fave_property_id,
//                       Featured: fileId,
//                     },
//                   })
//                   .then((data) => {
//                     console.log(data);
//                   })
//                   .catch((error) => {
//                     console.log(error);
//                   });
//               });
//           })
//       });
   
//   };

//   return (
//     <div>
//       <button onClick={handleFetch}>Move Files</button>
//     </div>
//   );
// };

// export default WhyChoose;


import { useState, useEffect } from 'react'
import axios from 'axios';


const WhyChoose = ({ style = "" }) => {


  const handleFeth = ()=>{
    axios.get("https://qoshan.com/wp-json/wp/v2/properties").then((response)=>{
      console.log(response)
    
      
      response.data?.map((post)=>{

          const mediaa = new File([post?.x_featured_media_original], post?.x_featured_media_original, {
            type: "image/jpeg",
          });
       

          const file = new FormData()
          file.append("files", mediaa)

          let data = new FormData();
          data.append("Name", post?.title?.rendered)
          data.append("Description", post?.content?.rendered)
          data.append("seo", post?.excerpt?.rendered)
          data.append("Price", post?.property_meta.fave_property_price)
          data.append("Area", post?.property_meta.fave_property_size)
          data.append("LArea", post?.property_meta.fave_property_land)
          data.append("Bedrooms", post?.property_meta.fave_property_bedrooms)
          data.append("Bathrooms", post?.property_meta.fave_property_bathrooms)
          data.append("Garages", post?.property_meta.fave_property_garage)
          data.append("PropertyID", post?.property_meta.fave_property_id)
          data.append("files", mediaa);

          axios.post("https://strapi-125841-0.cloudclusters.net/api/upload/", file).then((res)=>{
            const fileId = res.data[0].id
            console.log(res)


      axios.post("https://strapi-125841-0.cloudclusters.net/api/proerties/", {
        "data":{
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
          "Featured": fileId
        }
      }).then((data)=>{
        console.log(data)
      }).catch((error)=>{
        console.log(error)
      })
    })
      })
    })
  }

  



    //   const handleSubmit = (post) =>{
    //     // creating file from the image url
    //     const mediaa = new File(["featured_image"], post?.x_featured_media_original, {
    //       type: "",
    //     });
    //     setMedia(mediaa)

    //     // appendnig it to the form data
    //     const file = new FormData()
    //     file.append("files", media)

    //     let data = new FormData();
    //     data.append("Name", post?.title?.rendered)
    //     data.append("Description", post?.content.rendered)
    //     data.append("seo", post?.excerpt.rendered)
    //     data.append("Price", post?.property_meta.fave_property_price)
    //     data.append("Area", post?.property_meta.fave_property_size)
    //     data.append("LArea", post?.property_meta.fave_property_land)
    //     data.append("Bedrooms", post?.property_meta.fave_property_bedrooms)
    //     data.append("Bathrooms", post?.property_meta.fave_property_bathrooms)
    //     data.append("Garages", post?.property_meta.fave_property_garage)
    //     data.append("PropertyID", post?.property_meta.fave_property_id)
    //     data.append("privatee", post?.property_meta.fave_privatee_note)
    //     data.append("Promoted", post?.property_meta.fave_privatee_note)
    //     data.append("Slider", post?.property_meta.fave_privatee_note)
    //     data.append("files", media);

    // //  posting the image file to uploads
    //  axios.post("https://strapi-125841-0.cloudclusters.net/api/upload/", file
    // ).then((res)=>{
    //   const fileId = res.data[0].id

    //   axios.post("https://strapi-125841-0.cloudclusters.net/api/proerties/", {
    //     "data":{
    //       "Name": post?.title.rendered,
    //       "Description": post?.content.rendered,
    //       "seo": post?.excerpt.rendered,
    //       "Price": post?.property_meta.fave_property_price,
    //       "Area": post?.property_meta.fave_property_size,
    //       "LArea": post?.property_meta.fave_property_land,
    //       "Bedrooms": post?.property_meta.fave_property_bedrooms,
    //       "Bathrooms": post?.property_meta.fave_property_bathrooms,
    //       "Garages": post?.property_meta.fave_property_garage,
    //       "PropertyID": post?.property_meta.fave_property_id,
    //       "privatee": post?.property_meta.fave_privatee_note,
    //       "Promoted": post?.property_meta.fave_privatee_note,
    //       "Slider": post?.property_meta.fave_privatee_note,
    //       "Featured": fileId
    //     }
    //   }).then((data)=>{
    //     console.log(data)
    //   }).catch((err)=>{
    //     console.log(err)
    //   })
    // }).catch((error)=>{
    //   console.log(error)
    // })
    //   }



    

  const whyCooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Trusted By Thousands",
      descriptions: `Aliquam dictum elit vitae mauris facilisis at dictum urna
      dignissim donec vel lectus vel felis.`,
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: "Wide Renge Of Properties",
      descriptions: `Aliquam dictum elit vitae mauris facilisis at dictum urna
      dignissim donec vel lectus vel felis.`,
    },
    {
      id: 3,
      icon: "flaticon-profit",
      title: "Financing Made Easy",
      descriptions: `Aliquam dictum elit vitae mauris facilisis at dictum urna
      dignissim donec vel lectus vel felis.`,
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
           <button onClick={handleFeth}>click me</button>
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

