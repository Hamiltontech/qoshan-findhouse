const PropertyDetails = ({property}) => {


  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-6">
        <ul className="list-inline-item">
          <li>
            <p>
        ترميز العقار :   <span>{property?.attributes?.PropertyID}</span>
            </p>
          </li>
          <li>
            <p>
             السعر :  <span><span style={{fontSize: '9px'}}>{property?.attributes?.Prefix}</span> {property?.attributes?.Price?.slice(0,3)},{property?.attributes?.Price?.slice(3)} دينار أردني</span>
            </p>
          </li>
          <li>
            <p>
            مساحة العقار : <span>{property?.attributes?.Area} متر مربع</span>
            </p>
          </li>
        

          <li>
            <p>
            مساحة الارض : <span>{property?.attributes?.LArea} متر مربع</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">

        <li>
            <p>
            نوع العقار : <span>{property?.attributes?.type?.data?.attributes?.Name}</span>
            </p>
          </li>
        <li>
            <p>
            غرف النوم : <span>{property?.attributes?.Bedrooms}</span>
            </p>
          </li>
          
          <li>
            <p>
            الحمامات : <span>{property?.attributes?.Bathrooms}</span>
            </p>
          </li>
          <li>
            <p>
            الكراجات : <span>{property?.attributes?.Garages}</span>
            </p>
          </li>
          
         

        </ul>
      </div>
      {/* End .col */}

      {/* <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property Type : <span>Apartment</span>
            </p>
          </li>
          <li>
            <p>
              Property Status : <span>For Sale</span>
            </p>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default PropertyDetails;
