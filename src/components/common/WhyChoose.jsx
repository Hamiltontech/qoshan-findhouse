import { useState, useEffect } from 'react';
import axios from 'axios';

const WhyChoose = ({ style = "" }) => {
  const handleFetch = () => {
    axios.get("https://qoshan.com/wp-json/wp/v2/properties").then((response) => {
      console.log(response);

      response.data?.map((post) => {
        axios
          .get(post?.x_featured_media_original, { responseType: 'blob' })
          .then((fileResponse) => {
            const mediaFile = new File([fileResponse.data], post?.x_featured_media_original, {
              type: "image/jpeg",
            });

            const fileData = new FormData();
            fileData.append("files", mediaFile);

            axios
              .post("https://strapi-125841-0.cloudclusters.net/api/upload/", fileData)
              .then((res) => {
                const fileId = res.data[0].id;
                console.log(res);

                axios
                  .post("https://strapi-125841-0.cloudclusters.net/api/properties/", {
                    data: {
                      Name: post?.title?.rendered,
                      Description: post?.content?.rendered,
                      seo: post?.excerpt?.rendered,
                      Price: post?.property_meta.fave_property_price,
                      Area: post?.property_meta.fave_property_size,
                      LArea: post?.property_meta.fave_property_land,
                      Bedrooms: post?.property_meta.fave_property_bedrooms,
                      Bathrooms: post?.property_meta.fave_property_bathrooms,
                      Garages: post?.property_meta.fave_property_garage,
                      PropertyID: post?.property_meta.fave_property_id,
                      Featured: fileId,
                    },
                  })
                  .then((data) => {
                    console.log(data);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              });
          });
      });
    });
  };

  return (
    <div>
      <button onClick={handleFetch}>Move Files</button>
    </div>
  );
};

export default WhyChoose;
