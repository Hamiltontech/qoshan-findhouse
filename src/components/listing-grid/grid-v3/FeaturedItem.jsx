import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { TfiRulerAlt } from 'react-icons/tfi'
import { BiBath } from 'react-icons/bi'
import { IoBedOutline } from 'react-icons/io5'
import Highlighter from "react-highlight-words";

const FeaturedItem = ({ headerType, keyword, location, status, type, garages, bathrooms, bedrooms, minarea, maxarea, age, minprice, maxprice, count, setCount, sort, setSort }) => {

  // diala
  const [property, setProeprty] = useState([])


  // missing sort on date
  useEffect(() => {
    axios.get("/data.json").then((response) => {
      if (
        sort === "lowPrice"
      ) {
        let arr = response.data.sort((a, b) => parseFloat(a?.x_studio_sale_price) - parseFloat(b?.x_studio_sale_price));
        setProeprty(arr)
      }
      else {
        setProeprty(response.data)
        console.log(response.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  }, [sort])


  // useEffect(()=>{
  //   axios.get("https://strapi-125841-0.cloudclusters.net/api/proerties?populate=*").then((res)=>{
  //     if(
  //           sort === "lowPrice"
  //     ){
  //       let arr = res?.data?.data?.sort((a, b) => parseFloat(a?.attributes?.Price) - parseFloat(b?.attributes?.Price));
  //       setProeprty(arr)
  //     }else if(
  //       sort === "recent"
  //     ){
  //       let arr = res?.data?.data?.sort((a, b) => new Date(b?.attributes?.updatedAt) - new Date(a?.attributes?.updatedAt));
  //       setProeprty(arr)
  //     }
  //     else{
  //       setProeprty(res?.data?.data)
  //     }

  // }).catch((err)=>{
  //   console.log(err)
  // })
  // }, [sort])

  const { isGridOrList } = useSelector(
    (state) => state.filter
  );


  // sorting

  const featuredHandler = (item) => {
    if (sort === "faetured") {
      if (item?.x_studio_featured_property === true) {
        return item?.x_studio_featured_property
      }
    } else {
      return item
    }

  }

  // area handler
  const areaHandler = (item) => {
    if (minarea !== 0 && maxarea !== 0) {
      if (minarea !== "أقل مساحة" && maxarea !== "أكبر مساحة") {
        return (
          item?.x_studio_property_area >= minarea &&
          item?.x_studio_property_area <= maxarea
        );
      }
    }
    return true;
  };


  // price handler
  const priceHandler = (item) => {
    if (minprice !== "أقل سعر" && maxprice !== "أعلى سعر") {
      return (
        parseInt(item?.x_studio_sale_price) >= minprice &&
        parseInt(item?.x_studio_sale_price) <= maxprice
      );
    }
    return true;
  };


  // location filter
  const locationHandler = (item) => {
      if (item?.x_studio_many2one_field_YbLip[1]?.toLowerCase().includes(location)) {
        return item?.x_studio_many2one_field_YbLip[1]
    }
  }


  // type filter
  const typeHandler = (item) => {
    if (type === "all") {
      return item
    } else if (item?.x_studio_type.toLowerCase() === type?.toLowerCase()
    ) {
      return item?.x_studio_type
    }

  }


  // bathrooms filter
  const bathroomsHandler = (item) => {
    if (item?.x_studio_bathrooms_1?.toString().includes(bathrooms)) {
      return item?.x_studio_bathrooms_1
    }
  }


  // bedrooms filter
  const bedroomsHandler = (item) => {
    if (item?.x_studio_bedrooms?.toString().includes(bedrooms)) {
      return item?.x_studio_bedrooms
    }
  }


  // garages filter
  const garagesHandler = (item) => {
    if (item?.x_studio_garages?.toString().includes(garages)) {
      return item?.x_studio_garages
    }
  }


  // keyword filter
  const keywordHandler = (item) => {
    if (item?.x_name?.toLowerCase().includes(keyword.toLowerCase())
      ||
      item?.x_studio_property_information?.toLowerCase().includes(keyword.toLowerCase())) {
      return (
        item?.x_name || item?.x_studio_property_information
      )
    }
  }


  useEffect(() => {
    setCount((property?.filter(typeHandler)?.filter(areaHandler)?.filter(priceHandler)?.filter(locationHandler)?.filter(bathroomsHandler)?.filter(bedroomsHandler)?.filter(garagesHandler)?.filter(keywordHandler)?.filter(featuredHandler)).length)
  }), []

console.log(count)
 
  return (
    <>
      {property?.filter(typeHandler)?.filter(areaHandler)?.filter(priceHandler)?.filter(locationHandler)?.filter(bathroomsHandler)?.filter(bedroomsHandler)?.filter(garagesHandler)?.filter(keywordHandler)?.filter(featuredHandler)?.map((item) => {


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
                <Link href={`/details/${item.x_name.replace(/\s+/g, '-')}`}>

                  <div className="thumb">
                    <img className="img-whp" src={item.x_studio_property_images && item.x_studio_property_images.split(",")[0]} alt="fp1.jpg" />

                    <div className="thmb_cntnt">
                      {item.x_studio_sale_price > 0 ? 
                       <a className="fp_price">
                       {item.x_studio_sale_price && item.x_studio_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني 
                       </a>
                      :<></>}
                     
                    </div>
                  </div>
                </Link>
                <div className="details">

                  <div className="tc_content">

                    {/* type */}


                    <p className="text-thm">{item?.x_studio_type}</p>

                    {/* name */}

                    <h4>
                      <Link href={`/details/${item.x_name.replace(/\s+/g, '-')}`}>
                        <a>
                          <Highlighter
                            class="YourHighlightClass"
                            searchWords={[keyword]}
                            autoEscape={true}
                            textToHighlight={item?.x_name}
                          /></a>
                      </Link></h4>

                    {/* location */}
                    <div style={{ display: 'flex', gap: '2px', }}>
                      <span className="flaticon-maps-and-flags" />
                      <Highlighter
                        searchWords={[location]}
                        autoEscape={true}
                        textToHighlight={item?.x_studio_many2one_field_YbLip && item?.x_studio_many2one_field_YbLip[1]}
                      />
                    </div>


                    <div style={{ display: 'flex', justifyContent: 'start', gap: '20px' }}>

                      {/* area */}
                      <div style={{ display: 'flex', gap: '2px', }}>
                        <TfiRulerAlt size={20} /> <p>{item?.x_studio_property_area} متر مربع</p>
                      </div>

                      {/* bathrooms */}
                      <div style={{ display: 'flex', gap: '2px', }}>
                        <BiBath size={20} /> <p style={{ fontSize: '16px' }}> {item?.x_studio_bathrooms_1}</p>
                      </div>

                      {/* bedrooms */}
                      <div style={{ display: 'flex', gap: '2px', }}>
                        <IoBedOutline size={20} /> <p style={{ fontSize: '16px' }}> {item?.x_studio_bedrooms}</p>
                      </div>

                    </div>
                  </div>
                  {/* End .tc_content */}

                  <div className="fp_footer">


                    {/* details */}
                    <Link href={{
                      pathname: `/details/${item.x_name.replace(/\s+/g, '-')}`,
                      query: {
                        property: item?.x_name,
                      }
                    }}
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
    </>


  )
}









export default FeaturedItem;
