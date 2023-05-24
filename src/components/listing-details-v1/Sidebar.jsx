import ContactWithAgent from "../common/agent-view/ContactWithAgent";
import Featured from "../common/listing/Featured";
import ListingCreator from "../common/listing/ListingCreator";
import FeaturedListings from "../common/listing/FeaturedListings";
import FeatureProperties from "../common/listing/FeatureProperties";
import Advert from "../common/listing/advert";
import Advert2 from "../common/listing/advert-two";
const Sidebar = ({relatedType, relatedLocation, featured}) => {


  return (
    <>
      <div className="sidebar_listing_list" dir="rtl">
        <div className="sidebar_advanced_search_widget">
          <div className="sl_creator">
            <h4 className="mb25">مهتم في العقار ؟</h4>
            {/* <ListingCreator /> */}
          </div>
          {/* End .sl_creator */}
          <ContactWithAgent />
        </div>
      </div>
      {/* End .sidebar_listing_list */}

      <div className="terms_condition_widget">
        {/* <h4 className="title">Featured Properties</h4> */}
        <div className="sidebar_feature_property_slider">
          <FeatureProperties />
        </div>
      </div>


      {/* End .Featured Properties */}

      <div className="terms_condition_widget">
        <h4 className="title">عقارات مميزة</h4>
        <div className="widget_list">
          <ul className="list_details">
            <Featured featured={featured}/>

            
          </ul>
        </div>
      </div>
      {/* End .Categories Property */}

      <div className="sidebar_feature_listing">
        <h4 className="title">عقارات مشابهة</h4>
        <FeaturedListings relatedLocation={relatedLocation} relatedType={relatedType}/>
      </div>
      <div className="terms_condition_widget">
        {/* <h4 className="title">Featured Properties</h4> */}
        <div className="sidebar_feature_property_slider">
          <Advert />
        </div>
      </div>
      <div className="terms_condition_widget">
        {/* <h4 className="title">Featured Properties</h4> */}
        <div className="sidebar_feature_property_slider">
          <Advert2 />
        </div>
      </div>
      {/* End .Recently Viewed */}
    </>
  );
};

export default Sidebar;
