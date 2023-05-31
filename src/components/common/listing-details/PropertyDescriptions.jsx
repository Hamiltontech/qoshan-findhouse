import ReactHtmlParser from 'react-html-parser';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

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
