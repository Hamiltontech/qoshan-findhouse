import ReactHtmlParser from 'react-html-parser';

const PropertyDescriptions = ({property}) => {

  return (
    <>
    {property?.x_studio_property_information && 
     <p>{ ReactHtmlParser(property?.x_studio_property_information) }</p> 
    }
    </>
  );
};

export default PropertyDescriptions;
