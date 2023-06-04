import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const FindProperties = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("/advert.json")
      .then((response) => {
        const res = response.data[0];
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
<a href={data?.x_studio_advert_url_sidebar} className="position-relative" style={{ marginRight: 15, marginLeft: 15 }}>
        <Image src={data?.x_studio_image_url_sidebar}
          width={616}
          height={1023}
        /></a>
    </>
  );
};

export default FindProperties;
