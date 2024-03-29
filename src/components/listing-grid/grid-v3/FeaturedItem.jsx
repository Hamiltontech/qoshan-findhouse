import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { TfiRulerAlt } from 'react-icons/tfi'
import { BiBath } from 'react-icons/bi'
import { IoBedOutline } from 'react-icons/io5'
import Highlighter from "react-highlight-words";

const FeaturedItem = ({ postNum, setPostNum, headerType, keyword, location, status, type, garages, bathrooms, bedrooms, minarea, maxarea, age, minprice, maxprice, count, setCount, sort, setSort }) => {

  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 6)
  }

  // diala
  const [property, setProeprty] = useState([])


  // missing sort on date
  useEffect(() => {
    axios.get("/data.json").then((response) => {
      if (
        sort === "lowPrice" && response?.data.x_studio_sales_price
      ) {
        let arr = response.data.sort((a, b) => parseFloat(a?.x_studio_sales_price) - parseFloat(b?.x_studio_sales_price));
        setProeprty(arr)
      } else if (
        sort === "recent"
      ) {
        let arr = response.data.sort((a, b) => new Date(b?.x_studio_create_date_wp) - new Date(a?.x_studio_create_date_wp));
        setProeprty(arr)
      }
      else {
        setProeprty(response.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  }, [sort])


  const { isGridOrList } = useSelector(
    (state) => state.filter
  );

  // sorting
  const featuredHandler = (item) => {
    if (sort === "faetured") {
      if (item?.x_studio_featured_property === "Yes") {
        return item?.x_studio_featured_property
      }
    } else {
      return item
    }
  }


  // area handler
  const areaHandler = (item) => {
    if (minarea !== 0 && maxarea !== 0 ) {
      if (minarea !== "المساحة" && maxarea !== "المساحة") { 
          return (
            item?.x_studio_propertyarea >= minarea &&
            item?.x_studio_propertyarea <= maxarea
          );
      }
    }
    return true;
  };


  // price handler
  const priceHandler = (item) => {
    if (minprice !== "السعر" && maxprice !== "السعر") {
      return (
        parseInt(item?.x_studio_sales_price) >= minprice &&
        parseInt(item?.x_studio_sales_price) <= maxprice
      );
    }
    return true;
  };


  // location filter
  const locationHandler = (item) => {
    if (!item.x_studio_many2one_field_YbLip) {
      return false
    } else {
      if (item?.x_studio_many2one_field_YbLip[1]?.includes(location)) {
        return item?.x_studio_many2one_field_YbLip[1]
      }
    }
  }


  // type filter
  const typeHandler = (item) => {
    if (type === "all") {
      return item
    } else if (item?.x_studio_property_type[1] === type?.toLowerCase()
    ) {
      return item?.x_studio_property_type[1]
    }
  }


  // bathrooms filter
  const bathroomsHandler = (item) => {
    if (item?.x_studio_bathrooms_count?.toString().includes(bathrooms)) {
      return item?.x_studio_bathrooms_count || "0"
    }
  }


  // bedrooms filter
  const bedroomsHandler = (item) => {
    if (!item?.x_studio_beedrooms_count || item?.x_studio_beedrooms_count?.toString().includes(bedrooms)) {
      return item?.x_studio_beedrooms_count || "0"
    }
  }


  // garages filter
  const garagesHandler = (item) => {
    if (item?.x_studio_garages_count?.toString().includes(garages)) {
      return item?.x_studio_garages_count || "0"
    }
  }


  // keyword filter
  const keywordHandler = (item) => {
    if (item?.x_name?.toLowerCase().includes(keyword.toLowerCase())) {
      return (
        item?.x_name
      )
    }
  }


  useEffect(() => {
    setCount((property?.filter(typeHandler)?.filter(areaHandler)?.filter(priceHandler)?.filter(locationHandler)?.filter(bedroomsHandler)?.filter(bathroomsHandler)?.filter(garagesHandler)?.filter(keywordHandler)?.filter(featuredHandler)).length)
  }), []


  return (
    <>
      {property?.filter(typeHandler)?.filter(areaHandler)?.filter(priceHandler)?.filter(locationHandler)?.filter(bathroomsHandler)?.filter(bedroomsHandler)?.filter(garagesHandler)?.filter(keywordHandler)?.filter(featuredHandler)?.slice(0, postNum)?.map((item) => {
        return (
          <>
            <div
              className={`${isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
                } `}
              key={item.id}
            >
              <div
                className={`feat_property home7 style4 ${isGridOrList && "d-flex align-items-center"
                  }`}
              >
                <a href={`/property/${item.x_studio_property_id}`}>

                  <div className="thumb">
                    <img className="img-whp" src={item.x_studio_featured_url && item.x_studio_featured_url} alt="fp1.jpg" />
                    <div className="thmb_cntnt">
                      {item.x_studio_sales_price > 0 ?
                        <a className="fp_price">
                          {item.x_studio_sales_price && item.x_studio_sales_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني  
                        </a>
                        : <></>}

                    </div>
                  </div>
                </a>
                <div className="details">

                  <div className="tc_content">

                    {/* type */}


                    <p className="text-thm">{item?.x_studio_property_type[1]}</p>

                    {/* name */}

                    <h4>
                      <Link href={`/property/${item.x_studio_property_id}`}>
                        <a>
                          <Highlighter
                            class="YourHighlightClass"
                            searchWords={[keyword]}
                            autoEscape={true}
                            textToHighlight={item?.x_name}
                          /></a>
                      </Link></h4>

                    {/* location */}
                    {item?.x_studio_many2one_field_YbLip ?
                    <div style={{ display: 'flex', gap: '2px', }}>
                      <span className="flaticon-maps-and-flags" />
                      <Highlighter
                        searchWords={[location]}
                        autoEscape={true}
                        textToHighlight={item?.x_studio_many2one_field_YbLip && item?.x_studio_many2one_field_YbLip[1]}
                      />
                    </div>
                    :
                    <></>
                    }


                    <div style={{ display: 'flex', justifyContent: 'start', gap: '20px' }}>

                      {/* area */}
                      {item?.x_studio_propertyarea > 0 ?
                      <div style={{ display: 'flex', gap: '2px', }}>
                        <TfiRulerAlt size={20} /> <p>{item?.x_studio_propertyarea} متر مربع</p>
                      </div>
                      : <></>
                      }

                      {/* bathrooms */}
                      {item?.x_studio_bathrooms_count ?
                        <div style={{ display: 'flex', gap: '2px', }}>
                          <BiBath size={20} /> <p style={{ fontSize: '16px' }}> {item?.x_studio_bathrooms_count}</p>
                        </div>
                        :
                        <></>
                      }

                      {/* bedrooms */}
                      {item?.x_studio_beedrooms_count ?
                        <div style={{ display: 'flex', gap: '2px', }}>
                          <IoBedOutline size={20} /> <p style={{ fontSize: '16px' }}> {item?.x_studio_beedrooms_count}</p>
                        </div>
                        :
                        <></>}

                    </div>
                  </div>
                  {/* End .tc_content */}

                  <div className="fp_footer">


                    {/* details */}
                    <Link href={`/property/${item.x_studio_property_id}`}
                    >
                      <button className="btn btn-thm" type="submit">تفاصيل</button>
                    </Link>


                  </div>
                  {/* End .fp_footer */}
                </div>
              </div>
            </div>
          </>
        )

      })}

{count > 6 ?

      <div style={{ display: "flex", placeContent: "center" }}>
        <button className="btn btn-thm" type="submit" onClick={handleClick}>عرض المزيد</button></div>
:
<></>
}

    </>


  )
}









export default FeaturedItem;