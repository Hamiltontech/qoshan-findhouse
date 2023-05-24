import { useState } from "react";
import ReactMarkdown from "react-markdown";


const PropertyDescriptions = ({property}) => {
  // const [click, setClick] = useState(true);
  // const handleClick = () => setClick(!click);



  return (
    <>
     <ReactMarkdown>{property?.attributes?.Description}</ReactMarkdown>
    </>
  );
};

export default PropertyDescriptions;
