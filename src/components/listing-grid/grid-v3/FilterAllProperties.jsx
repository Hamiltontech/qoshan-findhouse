// search
import { useState } from "react";
import BreadCrumb2 from "./BreadCrumb2";
import FeaturedItem from "./FeaturedItem";
import FilterTopBar from "../../common/listing/FilterTopBar";
import GridListButton from "../../common/listing/GridListButton";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing2 from "../../common/listing/SidebarListing2";
import Pagination from "../../common/blog/Pagination";
import { useEffect } from "react";

import { useRouter } from "next/router";


const FilterAllProperties = () =>{
    const [keyword, setKeyword] = useState("")
    const [location, setLocation] = useState("")
    const [status, setStatus] = useState("")
    const [type, setType] = useState("all")
    const [bathrooms, setBathroom] = useState("")
    const [bedrooms, setBedroom] = useState("")
    const [garages, setGarages] = useState("")
    const [age, setBuiltYear] = useState("")
    const [minarea, setAreaMin] = useState('أقل مساحة')
    const [maxarea, setAreaMax] = useState("أكبر مساحة")
    const [minprice, setMinprice] = useState('أقل سعر')
    const [maxprice, setMaxprice] = useState("أعلى سعر")

    // diala - top bar
// filtered count
const [count, setCount] = useState(0)

// featured properties
const [sort, setSort] = useState("")



// location filter from home page
    const router = useRouter();
    const typeParams = router.query.type
  
    // search from home
    const areaParams = router.query.area
    const minpriceParams = router.query.minPrice
    const maxpriceParams = router.query.maxPrice
    const keywordParams = router.query.keyword

    const locationcardParams = router.query.location

  // filter from detailed search
  const bedroomsParams = router.query.bedrooms
  const bathroomsParams = router.query.bathrooms
  const garagesParams = router.query.garages
  const minAreaParams = router.query.minArea
  const maxAreaParams = router.query.maxArea


    // type filter fro, header
    const [headerType, setHeaderType] = useState("")


      useEffect(()=>{
     setType(typeParams)
     if(areaParams){
      setLocation(areaParams)
     }
     if(minpriceParams){
      setMinprice(minpriceParams)
     }
     if(maxpriceParams){
      setMaxprice(maxpriceParams)
     }
     if(keywordParams){
      setKeyword(keywordParams)
     }
     if(locationcardParams){
      setLocation(locationcardParams)
     }

     if(bedroomsParams){
      setBedroom(bedroomsParams)
     }
     if(bathroomsParams){
      setBathroom(bathroomsParams)
     }
     if(garagesParams){
      setGarages(garagesParams)
     }
     if(minAreaParams){
      setAreaMin(minAreaParams)
     }
     if(maxAreaParams){
      setAreaMax(maxAreaParams)
     }
    }, [typeParams,areaParams, minpriceParams, maxpriceParams, keywordParams, locationcardParams, maxAreaParams, minAreaParams, garagesParams, bathroomsParams, bedroomsParams])


 
return(
<section className="our-listing bgc-f7 pb30-991 mt85 md-mt0 " dir="rtl">
<div className="container">
  <div className="row" >
    <div className="col-lg-4">
      <BreadCrumb2 typeParams={typeParams}/>
    </div>
    {/* End .col */}

    <div className="col-lg-6 position-relative">
      <div className="listing_list_style mb20-xsd tal-991">
        <GridListButton />
      </div>
      {/* End list grid */}

      {/* <div className="dn db-991 mt30 mb0">
        <ShowFilter />
      </div> */}
      {/* ENd button for mobile sidebar show  */}
    </div>
    {/* End .col filter grid list */}
  </div>
  {/* End Page Breadcrumb and Grid,List and filter Button */}

  <div className="row" dir="rtl">
    <div className="col-lg-4 col-xl-4">
      <div className="sidebar-listing-wrapper">
        <SidebarListing2 
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
      {/* End SidebarListing */}

      <div
        className="offcanvas offcanvas-start offcanvas-listing-sidebar"
        tabIndex="-1"
        id="sidebarListing"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Advanced Search</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        {/* End .offcanvas-heade */}

        <div className="offcanvas-body">
          <SidebarListing2 />
        </div>
      </div>
      {/* End mobile sidebar listing  */}
    </div>
    {/* End sidebar conent */}

    <div className="col-md-12 col-lg-8">
      <div className="grid_list_search_result ">
        <div className="row align-items-center">
          <FilterTopBar count={count} sort={sort} setSort={setSort}/>
        </div>
      </div>
      {/* End .row */}
      {/* End .row */}

      <div className="row">
        <FeaturedItem
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

        count={count}
        setCount={setCount}
        sort={sort} 
        setSort={setSort}
        headerType={headerType}
        />
      </div>
      {/* End .row */}

      <div className="row">
        {/* <div className="col-lg-12 mt20">
          <div className="mbp_pagination">
            <Pagination />
          </div>
        </div> */}
        {/* End paginaion .col */}
      </div>
      {/* End .row */}
    </div>
    {/* End  page conent */}
  </div>
  {/* End .row */}
</div>
</section>
)

}

export default FilterAllProperties