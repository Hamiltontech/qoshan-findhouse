const PropertyDetails = ({ property }) => {


  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-6">
        <ul className="list-inline-item">
          {property?.x_studio_property_id ?
            <li>
              <p>
                ترميز العقار :   <span>{property?.x_studio_property_id}</span>
              </p>
            </li>
            : <></>
          }

          {property?.x_studio_sale_price ?
            <li>
              <p>
                السعر :  <span><span style={{ fontSize: '9px' }}>{property?.x_studio_price_prefix}</span> {property?.x_studio_sale_price && property?.x_studio_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني </span>
              </p>
            </li>
            : <></>}

          {property?.x_studio_property_area > 0 ?
            <li>
              <p>
                مساحة العقار : <span>{property?.x_studio_area_prefix} {property?.x_studio_area_prefix ? <>,</> : <></>} {property?.x_studio_property_area} متر مربع</span>
              </p>
            </li>
            : <></>
          }

          {property?.x_studio_land_area > 0 ?
            <li>
              <p>
                مساحة الارض : <span>{property?.x_studio_land_area} متر مربع</span>
              </p>
            </li>
            :
            <></>
          }
          {property?.x_studio_year_built_1 > 0 ?
            <li>
              <p>
            عمر البناء : <span>{property?.x_studio_year_built_1}</span>
              </p>
            </li>
            :
            <></>
          }
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">

          {property?.x_studio_type ?
            <li>
              <p>
                نوع العقار : <span>{property?.x_studio_type}</span>
              </p>
            </li>
            : <></>
          }

          {property?.x_studio_beedrooms_count > 0 ?
            <li>
              <p>
                غرف النوم : <span>{property?.x_studio_beedrooms_count}</span>
              </p>
            </li>
            : <></>}

          {property?.x_studio_bathrooms_count > 0 ?
            <li>
              <p>
                الحمامات : <span>{property?.x_studio_bathrooms_count}</span>
              </p>
            </li>
            : <></>
          }

          {property?.x_studio_garages_count> 0 ?
            <li>
              <p>
                الكراجات : <span>{property?.x_studio_garages_count}</span>
              </p>
            </li>
            : <></>}



        </ul>
      </div>

    </>
  );
};

export default PropertyDetails;
