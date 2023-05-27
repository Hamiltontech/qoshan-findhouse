import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/home-8/Header";
import MobileMenu from "../../components/common/header/MobileMenu";
import DetailsContent from "../../components/listing-details-v1/DetailsContent";
import Sidebar from "../../components/listing-details-v1/Sidebar";
import axios from "axios";
import Image from 'next/image'
import Sharing from '../../components/listing-details-v1/Sharing'
import Seo from "../../components/common/seo";

import Head from 'next/head';

const ListingDynamicDetailsV1 = () => {

  const router = useRouter();
  const [property, setProperty] = useState({});
  const id = router.query.id;


// related articles states - props
  const [relatedLocation, setRelatedLocation, propertyLink] = useState("")
  const [relatedType, setRelatedType] = useState("")

  // featured 
  const [featured, setFeatured] = useState([])


   // diala

   useEffect(()=>{
     axios.get("https://strapi-125841-0.cloudclusters.net/api/proerties?populate=*").then((response)=>{
       const res = response?.data?.data
       const feat = res?.filter((item)=>item?.attributes?.Promoted == true)
       setFeatured(feat)
       const prop = res?.find((item)=>item.attributes.URL == id)
       setProperty(prop)
       setRelatedLocation(prop?.attributes?.areas?.data?.attributes?.Name)
       setRelatedType(prop?.attributes?.type?.data?.attributes?.Name)
     }).catch((error)=>{
       console.log(error)
     })
   }, [id])

  return (
    <>
   <Head>
        <title>{property?.attributes?.Name}</title>

<Seo pageTitle={property?.attributes?.name} pageContent={property?.attributes?.Description} />
        {/* meta */}
        {/* facebook */}
 {/* <meta property={`og:${property?.attributes?.Name}`} content={property?.attributes?.Name}/>
<meta property={`og:${property?.attributes?.type?.data[0]?.attributes?.Name}`} content={property?.attributes?.type?.data[0]?.attributes?.Name}/>
<meta property={`og:${'https://qoshan.vercel.app' + property?.attributes?.URL}`} content={'https://qoshan.vercel.app' + property?.attributes?.URL}/>
<meta property={`og:${property?.attributes?.seo}`}
content={property?.attributes?.seo}/>
<meta property={`og:${'https://strapi-125841-0.cloudclusters.net' + property?.attributes?.Socialimage?.data?.attributes?.ul}`} content={`'https://strapi-125841-0.cloudclusters.net' + ${property?.attributes?.Socialimage?.data?.attributes?.ul}`}/> */}


{/* twitter */}

{/* <meta property={`twitter:${property?.attributes?.Name}`} content={property?.attributes?.Name}/>
<meta property={`twitter:${property?.attributes?.seo}`}
content={property?.attributes?.seo}/>
<meta property={`twitter:${'https://strapi-125841-0.cloudclusters.net' + property?.attributes?.Socialimage?.data?.attributes?.ul}`} content={`'https://strapi-125841-0.cloudclusters.net' + ${property?.attributes?.Socialimage?.data?.attributes?.ul}`}/> */}

      </Head>

      {/* <!-- Main Header Nav --> */}
      {/* <Header /> */}
      {/* <!--  Mobile Menu --> */}
      
      <Header/>
      <MobileMenu />
      {/* <!-- Listing Single Property --> */}
      <section className="listing-title-area mt85 md-mt0" dir="rtl">
        <div className="container">
          <Gallery>
            <div className="row mb30">
              <div className="col-lg-7 col-xl-8">

 {/* tags */}
 <ul className="tag">
  {property?.attributes?.property_tags?.data?.map((item)=>(
    <>
    <li className="list-inline-item" style={{color:'white',margin: '6px', backgroundColor: '#c2b49a', paddingLeft: '20px',paddingRight: '20px', borderRadius: '6px'}}>
                      {item?.attributes?.Tag}
     </li>
    </>
  ))}
  </ul>

                <div className="single_property_title mt30-767">
               
                  <h2>{property?.attributes?.Name}</h2>

                  {/* location */}
                  <div style={{display: 'flex', gap: '2px', }}>
                  <span className="flaticon-maps-and-flags" /> <p style={{ fontSize: '16px'}}>{property?.attributes?.areas?.data?.attributes?.Name}</p>
                  </div>


                  {/* share */}
                  
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="single_property_social_share position-static transform-none">
                  <div className="price float-start fn-400">
                    {/* price */}
                    <h2>
                  <span style={{fontSize: '12px'}}>{property?.attributes?.Prefix}</span>  {property?.attributes?.Price?.slice(0,3)},{property?.attributes?.Price?.slice(3)} دينار أردني 
                    </h2>
                  </div>
                 
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-sm-7 col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="spls_style_two mb30-520">
                      <Image src={'https://strapi-125841-0.cloudclusters.net' + property?.attributes?.Featured?.data?.attributes?.formats?.large?.url}
                      width={752}
                      height={450}
                      />
                      {/* <Item
                        original={'https://strapi-125841-0.cloudclusters.net' + property?.attributes?.Featured?.data?.attributes?.formats?.large?.url}
                        thumbnail={'https://strapi-125841-0.cloudclusters.net' + property?.attributes?.Featured?.data?.attributes?.formats?.large?.url}
                        width={752}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <div role="button" ref={ref} onClick={open}>
                            <img
                              className="img-fluid w100 cover lds-1"
                              src={'https://strapi-125841-0.cloudclusters.net' + property?.attributes?.Featured?.data?.attributes?.formats?.large?.url}
                              alt="1.jpg"
                            />
                          </div>
                        )}
                      </Item> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End .col-sm-7 .col-lg-8 */}

              <div className="col-sm-5 col-lg-4">
                <div className="row">
                  {property?.attributes?.Gallery?.data?.map((val, i) => (
                    <div className="col-6" key={i}>
                      <div className="spls_style_two img-gallery-box mb24">
                        <Item
                          original={'https://strapi-125841-0.cloudclusters.net' + val?.attributes?.url}
                          thumbnail={'https://strapi-125841-0.cloudclusters.net' + val?.attributes?.url}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div role="button" ref={ref} onClick={open}>
                              <img
                                className="img-fluid w100"
                                src={'https://strapi-125841-0.cloudclusters.net' + val?.attributes?.url}
                                alt="2.jpg"
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End  col-sm-5 col-lg-4 */}
            </div>
            {/* End .row */}
          </Gallery>
          <Sharing propertyUrl={`https://qoshan-findhouse.vercel.app/details/${property?.attributes?.URL}`}/>
        </div>
      </section>

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991" dir="rtl">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <DetailsContent property={property} relatedType={relatedType} relatedLocation={relatedLocation}/>
            </div>
            {/* End details content .col-lg-8 */}

            

            <div className="col-lg-4 col-xl-4">
            <Sidebar featured={featured} relatedLocation={relatedLocation} relatedType={relatedType} propertyLink={property?.attributes?.URL} propertyName={property?.attributes?.Name} />
            </div>
            {/* End sidebar content .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default ListingDynamicDetailsV1;
