import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const FindProperties = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        axios
          .get("https://strapi-125841-0.cloudclusters.net/api/aelan-janby-thany?populate=*")
          .then((response) => {
            const res = response.data.data;
            setData(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
  return (
    <>
    
                <a href={data?.attributes?.URL} className="position-relative" style={{ marginRight: 15, marginLeft: 15 }}>
                  {/* <img className="logo img-fluid winner" src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684257815/winner-land_jm56zk.webp" alt="header-logo2.svg" style={{ height: 80 }} /> */}
                  <Image src={'https://strapi-125841-0.cloudclusters.net' + data?.attributes?.advert?.data?.attributes?.url}
                      width={616}
                      height={1023}
                      />                                </a>
            
    </>
  );
};

export default FindProperties;
