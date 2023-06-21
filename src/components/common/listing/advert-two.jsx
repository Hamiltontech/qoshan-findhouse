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
<a href={data?.x_studio_advert_url_sidebar} className="position-relative" style={{ marginRight: 50 }}>
        <Image src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684397458/winner-color-vert_4x-1_i02g4n.webp"
            width={220}
            height={500}
        /></a>
    </>
  );
};

export default FindProperties;
