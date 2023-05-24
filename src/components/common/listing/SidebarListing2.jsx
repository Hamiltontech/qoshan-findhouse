import FilteringItem from "./FilteringItem";

const SidebarListing2 = ({headerType, setHeaderType, keyword, location, status, type, garages, bathrooms, bedrooms, minarea, maxarea, age, minprice, maxprice, setKeyword, setLocation, setStatus, setType, setGarages, setBathroom, setBedroom, setAreaMax, setAreaMin, setBuiltYear, setMinprice, setMaxprice, setSort}) => {
  return (
    <div className="sidebar_listing_grid1">
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <FilteringItem 
          setKeyword={setKeyword}
          setLocation={setLocation} 
          setStatus={setStatus} 
          setType={setType} 
          setGarages={setGarages} 
          setBathroom={setBathroom} 
          setBedroom={setBedroom} 
          setAreaMax={setAreaMax} 
          setAreaMin={setAreaMin}
          setBuiltYear={setBuiltYear}
          setMinprice={setMinprice}
          setMaxprice={setMaxprice}

          keyword={keyword}
          location={location} 
          status={status} 
          type={type} 
          garages={garages} 
          bathrooms={bathrooms} 
          bedrooms={bedrooms} 
          minarea={minarea} 
          maxarea={maxarea}
          age={age}
          maxprice={maxprice}
          minprice={minprice}
          setSort={setSort}

          headerType={headerType} 
          setHeaderType={setHeaderType}
          />
        </div>
      </div>
      {/* End .sidebar_listing_list */}
    </div>
  );
};

export default SidebarListing2;
