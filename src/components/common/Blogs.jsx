import Link from "next/link";
import blogs from "../../data/blogs";
import {useState, useEffect} from 'react'
import axios from "axios";
import {IoPricetagsOutline} from 'react-icons/io5'
import {TfiRulerAlt} from 'react-icons/tfi'
import {BiBath} from 'react-icons/bi'
import {IoBedOutline} from 'react-icons/io5'

const Blogs = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get("/data.json").then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])

  data?.sort(function(a,b){
    return new Date(b?.x_studio_create_date_wp) - new Date(a?.x_studio_create_date_wp);
  });


  return (
    <>
      {data?.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item?.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/property/${item.x_studio_property_id}`}>
                <a>
                  <img className="img-whp" src={item.x_studio_featured_url} alt="bh1.jpg" />
                </a>
              </Link>
            </div>
            <div className="details">
              <div className="tc_content">
                {/* <p className="text-thm">{item.postMeta}</p> */}

                <p className="text-thm">{item?.x_studio_property_type}</p>
                <h4>
                  <Link href={`/property/${item.x_studio_property_id}`}>
                    <a>{item?.x_name}</a>
                  </Link>
                </h4>

              {/* area */}
              {item?.x_studio_many2one_field_YbLip ? 
               <p>
               <span className="flaticon-placeholder" style={{marginLeft: '5px'}}></span>
               {item?.x_studio_many2one_field_YbLip[1]}
             </p>
             : <></>}
               

              {/* price */}
          <p><IoPricetagsOutline size={15}/> {item?.x_studio_sales_price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني </p>
             

             {/* details */}
          <ul style={{display: 'flex', gap: "20px"}}>
                 
                 {item?.x_studio_propertyarea > 0 ?
                 <li>
                 <p><TfiRulerAlt size={15}/> {item?.x_studio_propertyarea} متر مربع</p>
                 </li>
                 : <></>
                 }

                  {item?.x_studio_bathrooms_count > 0 ? 
                 <li>
                 <p>   <BiBath size={20}/>  {item?.x_studio_bathrooms_count}</p>
                 </li>
                 : <></>}

                      {item?.x_studio_beedrooms_count > 0 ? 
                 <li>
                 <p>   <IoBedOutline size={20}/>  {item?.x_studio_beedrooms_count}</p>
                 </li>
                      : <></>
                    }
               </ul>
             
              </div>


              <div className="fp_footer">
                <Link   href={`/property/${item.x_studio_property_id}`}
    >
        <button className="btn btn-thm" type="submit">تفاصيل</button>
    </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
