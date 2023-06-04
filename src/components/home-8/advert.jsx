import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const FindProperties = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get("/advert.json").then((response) => {
      const ad = response.data[0]
      setData(ad)
    })
  }, [])

  return (
    <>
      <Link href={data?.x_studio_advert_url_search} className="position-relative" style={{ marginRight: 15, marginLeft: 15 }}>
        <Image src={data?.x_studio_image_url_search}
          width={729}
          height={90}
        /> 
      </Link>
    </>
  );
};

export default FindProperties;
