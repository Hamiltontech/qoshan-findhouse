const PropertyItem = ({property}) => {

  return (
    <ul className="mb0" dir="rtl">
      {property?.x_studio_type ? 
      <li className="list-inline-item">
        <a href="#">{property?.attributes?.x_studio_type}</a>
      </li>
      : <></>}
      
      {property?.x_studio_bedrooms ?
      <li className="list-inline-item">
        <a href="#">غرف نوم:  {property?.x_studio_bedrooms}</a>
      </li>
      :
      <></>
      }

      {property?.x_studio_bathrooms_1 ? 
      <li className="list-inline-item">
        <a href="#">حمامات: {property?.x_studio_bathrooms_1}</a>
      </li>
    : <></> 
    }

      {property?.x_studio_property_area ?
      <li className="list-inline-item" style={{marginRight: '10px'}}>
        <a href="#">المساحة: {property?.x_studio_property_area} متر مربع</a>
      </li>
      : <></>}
    </ul>
  );
};

export default PropertyItem;
