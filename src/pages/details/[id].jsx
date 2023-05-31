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
    axios.get("https://hamiltontech-silver-space-garbanzo-x6r4vpr747p2p7pj-3000.preview.app.github.dev/data.json").then((response)=>{
      const data = response.data?.find((item)=> item.x_name.replace(/\s+/g, '-') == id)
      console.log(data)
      setProperty(data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [id])

  // useEffect(() => {
  //   axios.get("https://strapi-125841-0.cloudclusters.net/api/proerties?pagination[start]=200&pagination[limit]=280&populate=*").then((response) => {
  //     const res = response?.data?.data
  //     const feat = res?.filter((item) => item?.attributes?.Promoted == true)
  //     console.log(res)
  //     setFeatured(feat)
  //     const prop = res?.find((item) => item.attributes.URL == id)
  //     setProperty(prop)
  //     console.log(prop)
  //     setRelatedLocation(prop?.attributes?.areas?.data?.attributes?.Name)
  //     setRelatedType(prop?.attributes?.type?.data?.attributes?.Name)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }, [id])

  return (
    <>
      <Head>
        <title>{property?.x_name}</title>
        <Seo pageTitle={property?.x_name} pageContent={property?.x_studio_property_information} />
      </Head>

      {/* <!-- Main Header Nav --> */}
      <Header />
      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Listing Single Property --> */}
      <section className="listing-title-area md-mt0 mt100" dir="rtl">
        <div className="container">
          <Gallery>
            <div className="row mb30">
              <div className="col-lg-7 col-xl-8">

                {/* tags */}
                {/* <ul className="tag">
                  {property?.attributes?.property_tags?.data?.map((item) => (
                    <li key={property?.id} className="list-inline-item" style={{ color: 'white', margin: '6px', backgroundColor: '#c2b49a', paddingLeft: '20px', paddingRight: '20px', borderRadius: '6px' }}>
                      {item?.attributes?.Tag}
                    </li>
                  ))}
                </ul> */}

                <div className="single_property_title mt30-767">
                  <h2>{property?.x_name}</h2>

                  {/* location */}
                  <div style={{ display: 'flex', gap: '2px', }}>
                    <span className="flaticon-maps-and-flags" /> <p style={{ fontSize: '16px' }}>{property?.x_studio_many2one_field_YbLip && property?.x_studio_many2one_field_YbLip[1]}</p>
                  </div>

                  {/* share */}
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="single_property_social_share position-static transform-none">
                  <div className="price float-start fn-400">
                    {/* price */}
                    <h2>
                      <span style={{ fontSize: '12px' }}>{property?.x_studio_price_prefix}</span> 
                      {property?.x_studio_sale_price && property?.x_studio_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني 
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
                      <Image src={property?.x_studio_property_images && property?.x_studio_property_images.split(",")[0]}
                        width={752}
                        height={450}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End .col-sm-7 .col-lg-8 */}

              <div className="col-sm-5 col-lg-4">
                <div className="row">
                  {property?.x_studio_property_images && property?.x_studio_property_images.split(",").map((val, i) => (
                    <div className="col-6" key={i}>
                      <div className="spls_style_two img-gallery-box mb24">
                        <Item
                          original={val}
                          thumbnail={val}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div role="button" ref={ref} onClick={open}>
                              <img
                                className="img-fluid w100"
                                src={val}
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
          {/* <Sharing propertyUrl={`https://qoshan-findhouse.vercel.app/details/${property?.x_name.replace(/\s+/g, '-')}`} /> */}
        </div>
      </section>

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991" dir="rtl">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              {/* <DetailsContent property={property} relatedType={relatedType} relatedLocation={relatedLocation} /> */}
              <DetailsContent property={property} />
            </div>
            {/* End details content .col-lg-8 */}



            <div className="col-lg-4 col-xl-4">
              {/* <Sidebar featured={featured} relatedLocation={relatedLocation} relatedType={relatedType} propertyLink={property?.attributes?.URL} propertyName={property?.attributes?.Name} /> */}
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
