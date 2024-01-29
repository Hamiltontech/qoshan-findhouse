const PropertyItem = ({property}) => {

  return (
    <ul className="mb0" dir="rtl">
      {property?.x_studio_property_type ? 
      <li className="list-inline-item">
        <a href="#">{property?.x_studio_property_type[1]}</a>
      </li>
      : <></>}
      
      {property?.x_studio_beedrooms_count ?
      <li className="list-inline-item">
        <a href="#">غرف نوم:  {property?.x_studio_beedrooms_count}</a>
      </li>
      :
      <></>
      }

      {property?.x_studio_bathrooms_count ? 
      <li className="list-inline-item">
        <a href="#">حمامات: {property?.x_studio_bathrooms_count}</a>
      </li>
    : <></> 
    }

      {property?.x_studio_propertyarea ?
      <li className="list-inline-item" style={{marginRight: '10px'}}>
        <a href="#">المساحة: {property?.x_studio_propertyarea} متر مربع</a>
      </li>
      : <></>}
    </ul>
  );
};

export default PropertyItem;
