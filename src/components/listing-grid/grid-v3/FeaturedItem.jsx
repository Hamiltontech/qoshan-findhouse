import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {TfiRulerAlt} from 'react-icons/tfi'
import {BiBath} from 'react-icons/bi'
import {IoBedOutline} from 'react-icons/io5'
import Highlighter from "react-highlight-words";

const FeaturedItem = ({headerType, keyword, location, status, type, garages, bathrooms, bedrooms, minarea, maxarea, age, minprice, maxprice, count, setCount, sort, setSort}) => {

  // diala
const [property, setProeprty] = useState([])

useEffect(()=>{
  axios.get("https://strapi-125841-0.cloudclusters.net/api/proerties?populate=*").then((res)=>{
    if(
          sort === "lowPrice"
    ){
      let arr = res?.data?.data?.sort((a, b) => parseFloat(a?.attributes?.Price) - parseFloat(b?.attributes?.Price));
      setProeprty(arr)
    }else if(
      sort === "recent"
    ){
      let arr = res?.data?.data?.sort((a, b) => new Date(b?.attributes?.updatedAt) - new Date(a?.attributes?.updatedAt));
      setProeprty(arr)
    }
    else{
      setProeprty(res?.data?.data)
    }

}).catch((err)=>{
  console.log(err)
})
}, [sort])

  const {isGridOrList } = useSelector(
    (state) => state.filter
  );


  // sorting

  const featuredHandler = (item) =>{
    if(sort === "faetured"){
      if(item?.attributes?.Promoted === true){
        return item?.attributes?.Promoted
      }
    }else{
      return item
    }
   
  }
  
    // area handler
    const areaHandler = (item) => {
      if (minarea !== 0 && maxarea !== 0) {
        if (minarea !== "أقل مساحة" && maxarea !== "أكبر مساحة") {
          return (
            item?.attributes?.Area >= minarea &&
            item?.attributes?.Area <= maxarea
          );
        }
      }
      return true;
    };


      // price handler
      const priceHandler = (item) => {
          if (minprice !== "أقل سعر" && maxprice !== "أعلى سعر") {
            return (
              parseInt(item?.attributes?.Price) >= minprice &&
              parseInt(item?.attributes?.Price) <= maxprice
            );
        }
        return true;
      };


      // location filter
      const locationHandler = (item) =>{
       if(item?.attributes?.areas?.data?.attributes?.Name?.toLowerCase().includes(location.toLowerCase())){
          return item?.attributes?.areas?.data?.attributes?.Name
        }
      }


      // type filter
      const typeHandler = (item) =>{
        if (type === "all"){
          return item?.attributes?.type?.data?.attributes?.Name
        }else if(item?.attributes?.type?.data?.attributes?.Name?.toLowerCase() === type?.toLowerCase()
          ){
            return item?.attributes?.type?.data?.attributes?.Name
          }
       
      }


      // bathrooms filter
      const bathroomsHandler = (item) =>{
        if(item?.attributes?.Bathrooms?.toString().includes(bathrooms)){
          return item?.attributes?.Bathrooms
        }
      }


      // bedrooms filter
      const bedroomsHandler = (item) =>{
        if(item?.attributes?.Bedrooms?.toString().includes(bedrooms)){
          return item?.attributes?.Bedrooms
        }
      }


      // garages filter
      const garagesHandler = (item) =>{
        if(item?.attributes?.Garages?.toString().includes(garages)){
          return item?.attributes?.Garages
        }
      }


      // keyword filter
      const keywordHandler = (item) =>{
        if(item?.attributes?.Name?.toLowerCase().includes(keyword.toLowerCase())
        ||
        item?.attributes?.Description?.toLowerCase().includes(keyword.toLowerCase())){
          return (
            item?.attributes?.Name || item?.attributes?.Description
          )
        }
      }


    useEffect(()=>{
setCount((property?.filter(areaHandler)?.filter(priceHandler)?.filter(locationHandler)?.filter(typeHandler)?.filter(bathroomsHandler)?.filter(bedroomsHandler)?.filter(garagesHandler)?.filter(keywordHandler)?.filter(featuredHandler)).length)
    }), []


return(
<>
{property?.filter(areaHandler)?.filter(priceHandler)?.filter(locationHandler)?.filter(typeHandler)?.filter(bathroomsHandler)?.filter(bedroomsHandler)?.filter(garagesHandler)?.filter(keywordHandler)?.filter(featuredHandler)?.map((item)=>{
  

  return(
    <>
<div
  className={`${
    isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
  } `}
  key={item.id}
>
  <div
    className={`feat_property home7 style4 ${
      isGridOrList && "d-flex align-items-center"
    }`}
  >
    
    <div className="thumb">
      <img className="img-whp" src={'https://strapi-125841-0.cloudclusters.net' + item?.attributes?.Featured?.data?.attributes?.formats?.large?.url} alt="fp1.jpg" />
     
      <div className="thmb_cntnt">
          <a className="fp_price">
          {item?.attributes?.Price?.slice(0,3)},{item?.attributes?.Price?.slice(3)} دينار أردني 
          </a>
      </div>
    </div>
    <div className="details">

      <div className="tc_content">

        {/* type */}


      <p className="text-thm">{item?.attributes?.type?.data?.attributes?.Name}</p>

      {/* name */}

<h4>
      <Link href={`/details/${item?.attributes?.URL}`}>
        <a>
      <Highlighter 
        class="YourHighlightClass"
        searchWords={[keyword]}
        autoEscape={true}
        textToHighlight= {item?.attributes?.Name}
        /></a>
        </Link></h4>

    {/* location */}
      <div style={{display: 'flex', gap: '2px', }}>
                <span className="flaticon-maps-and-flags" /> 
                <Highlighter
                  searchWords={[location]}
                  autoEscape={true}
                  textToHighlight= {item?.attributes?.areas?.data?.attributes?.Name}
                  />
        </div>


<div style={{display: 'flex', justifyContent: 'start', gap: '20px'}}>

    {/* area */}
    <div style={{display: 'flex', gap: '2px', }}>
            <TfiRulerAlt size={20} /> <p> {item?.attributes?.Area} متر مربع</p>
      </div>

    {/* bathrooms */}
      <div style={{display: 'flex', gap: '2px', }}>
            <BiBath size={20}/> <p style={{ fontSize: '16px'}}> {item?.attributes?.Bathrooms}</p>
      </div>  

    {/* bedrooms */}
    <div style={{display: 'flex', gap: '2px', }}>
        <IoBedOutline size={20} /> <p style={{fontSize: '16px'}}> {item?.attributes?.Bedrooms}</p>
    </div>

</div>
      </div>
      {/* End .tc_content */}

      <div className="fp_footer">
       

    {/* details */}
    <Link   href={{
        pathname: `/details/${item?.attributes?.URL}`,
        query: {
            property: item?.attributes?.Name,
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

 }) }
</>


)}


  


  



export default FeaturedItem;
