import ReactHtmlParser from 'react-html-parser';
import YouTube from "react-youtube";

const PropertyDescriptions = ({property}) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
    {property?.x_studio_youtube_video? 
    
    <YouTube videoId={property?.x_studio_youtube_video.slice(17)} 
    opts={opts} />
  :
  <></>
  }
    {property?.x_studio_property_information && 
     <p>{ ReactHtmlParser(property?.x_studio_property_information) }</p> 
    }
    </>
  );
};

export default PropertyDescriptions;
