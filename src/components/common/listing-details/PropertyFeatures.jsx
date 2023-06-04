const PropertyFeatures = ({features, property}) => {
   

  return (
    <>
      {features?.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item?.id} dir="rtl">
          <ul className="order_list list-inline-item" dir="ltr">
            <li>
            
            <span className="flaticon-tick"></span>
            {item?.x_name}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default PropertyFeatures;
