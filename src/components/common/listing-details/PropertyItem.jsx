const PropertyItem = ({property}) => {

  return (
    <ul className="mb0" dir="rtl">
      <li className="list-inline-item">
        <a href="#">{property?.attributes?.type?.data?.attributes?.Name}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">غرف نوم:  {property?.attributes?.Bedrooms}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">حمامات: {property?.attributes?.Bathrooms}</a>
      </li>
      <li className="list-inline-item" style={{marginRight: '10px'}}>
        <a href="#">المساحة: {property?.attributes?.Area} متر مربع</a>
      </li>
    </ul>
  );
};

export default PropertyItem;
