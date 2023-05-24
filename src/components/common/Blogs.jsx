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
    axios.get("https://strapi-125841-0.cloudclusters.net/api/proerties?populate=*").then((res)=>{
      setData(res?.data?.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])


  return (
    <>
      {data?.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item?.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/details/${item?.attributes?.URL}`}>
                <a>
                  <img className="img-whp" src={'https://strapi-125841-0.cloudclusters.net' + item?.attributes?.Featured?.data?.attributes?.formats?.large?.url} alt="bh1.jpg" />
                </a>
              </Link>
            </div>
            <div className="details">
              <div className="tc_content">
                {/* <p className="text-thm">{item.postMeta}</p> */}

                <p className="text-thm">{item?.attributes?.type?.data?.attributes?.Name}</p>
                <h4>
                  <Link href={`/details/${item?.attributes?.URL}`}>
                    <a>{item?.attributes?.Name}</a>
                  </Link>
                </h4>

              {/* area */}
                <p>
            <span className="flaticon-placeholder" style={{marginLeft: '5px'}}></span>
            {item?.attributes?.areas?.data?.attributes?.Name}
          </p>

              {/* price */}
          <p><IoPricetagsOutline size={15}/> {item?.attributes?.Price?.slice(0,3)},{item?.attributes?.Price?.slice(3)} دينار أردني</p>
             

             {/* details */}
          <ul style={{display: 'flex', gap: "20px"}}>
                 
                 <li>
                 <p><TfiRulerAlt size={15}/> {item?.attributes?.Area} متر مربع</p>
                 </li>

                 <li>
                 <p>   <BiBath size={20}/>  {item?.attributes?.Bathrooms}</p>
                 </li>

                 <li>
                 <p>   <IoBedOutline size={20}/>  {item?.attributes?.Bedrooms}</p>
                 </li>
               </ul>
             
              </div>


              <div className="fp_footer">
                {/* <ul className="fp_meta float-start mb0">
                  <li className="list-inline-item">
                    <Link href="/agent-v2">
                      <a>
                        <img src={item.posterAvatar} alt="pposter1.png" />
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/agent-v2">
                      <a>{item.posterName}</a>
                    </Link>
                  </li>
                </ul> */}
                {/* <a className="fp_pdate float-end" href="#">
                  {item?.attributes?.updatedAt.slice(0,10)}
                </a> */}
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
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
