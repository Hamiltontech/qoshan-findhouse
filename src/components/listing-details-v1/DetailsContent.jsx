import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import RelatedPost from "./RelatedPost";



const DetailsContent = ({features, property, relatedType, relatedLocation}) => {
  return (
    <>
      <div className="listing_single_description" dir="rtl">
        <div className="lsd_list">
          <PropertyItem property={property}/>
        </div>
        {/* End .lsd_list */}

        <h4 className="mb30">وصف العقار</h4>
        <PropertyDescriptions  property={property}/>
      </div>
      {/* End .listing_single_description */}

      <div className="additional_details" dir="rtl">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">تفاصيل العقار</h4>
          </div>
          <PropertyDetails property={property}/>
        </div>
      </div>

      <div className="application_statics " dir="rtl">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="">مميزات</h4>
          </div>
          {/* End .col */}
          <PropertyFeatures features={features} property={property} />
        </div>
      </div>
      {/* End .feature_area */}


      <div className="row mt30">
                <div className="col-lg-12 mb20">
                  <h4>عقارات مشابهة</h4>
                </div>
                <RelatedPost relatedType={relatedType} relatedLocation={relatedLocation}/>
              </div>

      <div className="product_single_content">
        <div className="mbp_pagination_comments mt30">
        </div>
      </div>
    </>
  );
};

export default DetailsContent;
