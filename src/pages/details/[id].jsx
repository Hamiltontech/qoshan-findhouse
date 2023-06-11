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
import Social from "./Social";


import { IoIosArrowDown } from "react-icons/io";

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
  useEffect(() => {
    axios.get("/data.json").then((response) => {
      const data = response.data?.find((item) => item.x_name.replace(/\s+/g, '-') == id)
      setProperty(data)

      const feat = response.data.filter((item) => item.x_studio_featured_property === "Yes")
      setFeatured(feat)

      setRelatedLocation(data?.x_studio_many2one_field_YbLip[1])
      setRelatedType(data?.x_studio_property_type[1])

    }).catch((error) => {
      console.log(error)
    })
  }, [id])



  // tags
  const [inittags, setinitTags] = useState([])

  // features
  const [initfeatures, setinitFeatures] = useState([])

  useEffect(() => {
    axios.get("/property_features.json").then((res) => {
      setinitFeatures(res.data)
    })
  }, [id])

  useEffect(() => {
    axios.get("/property_tags.json").then((res) => {
      setinitTags(res.data)
    })
  }, [id])


  let tags = inittags.filter(c => property?.x_studio_tags?.includes(c.id));
  let features = initfeatures.filter(c => property?.x_studio_many2many_field_Tzhpw?.includes(c.id));


  const url = property?.x_name?.replace(/\s+/g, '-')

  const handleImages = (val) => {
    if (val !== ", ") {
      return val
    }
  }



  const slideBottom = () => {
    var slider = document.getElementById("slider");
    slider.scrollTop = slider.scrollTop - 210;
  };



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
                <ul className="tag">
                  {tags?.map((item) => (
                    <li key={item?.id} className="list-inline-item" style={{ color: 'white', margin: '6px', backgroundColor: '#c2b49a', paddingLeft: '20px', paddingRight: '20px', borderRadius: '6px' }}>
                      {item?.x_name}
                    </li>
                  ))}
                </ul>


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
                    {property?.x_studio_sale_price > 0 ?
                      <h2>
                        <span style={{ fontSize: '12px' }}>{property?.x_studio_price_prefix}</span>
                        {property?.x_studio_sale_price && property?.x_studio_sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني
                      </h2>
                      :
                      <></>}

                  </div>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-sm-7 col-lg-12">
                <div className="row">
                  <div className="">
                    <div className="spls_style_two mb30-520">
                      {property?.x_studio_featured_url ?
                        <Image src={property?.x_studio_featured_url}
                          width={752}
                          height={450}
                          layout="responsive"
                          priority
                        />
                        : <></>
                      }

                    </div>
                  </div>
                </div>
              </div>
              {/* End .col-sm-7 .col-lg-8 */}





              {/* <div className="col-sm-5 col-lg-4"> */}
              <div className="row mt20" >
                <div
                  style={{ overflowX: "scroll", whiteSpace: "nowrap", scrollBehavior: "smooth", display: "flex", gap: "10px", overflow: "hidden" }}
                  id="slider"
                >
                  {property?.x_studio_property_images && property?.x_studio_property_images.split('"')?.filter(handleImages)?.map((val, i) => (
                    <div className="col-3" key={i} >
                      <div className="spls_style_two img-gallery-box mb24">
                        <Item
                          original={val}
                          thumbnail={val}
                          width={752}
                          height={450}
                          priority
                          layout="responsive"

                        >
                          {({ ref, open }) => (
                            <div role="button" ref={ref} onClick={open}>
                              <img
                                className="img-fluid w100"
                                src={val}
                                alt="2.jpg"
                                priority
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  ))}
                </div>
                {/* </div> */}





              </div>
              {/* End  col-sm-5 col-lg-4 */}
            </div>
            {/* End .row */}
          </Gallery>
          {/* <Sharing propertyUrl={`https://qoshan-findhouse.vercel.app/details/${url}`} /> */}

          <ul className="contact_form_social_area mt30">
            <Social propertyUrl={`https://qoshan-findhouse.vercel.app/details/${url}`} />
          </ul>
        </div>
      </section>

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991" dir="rtl">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <DetailsContent features={features} property={property} relatedType={relatedType} relatedLocation={relatedLocation} />
            </div>
            {/* End details content .col-lg-8 */}



            <div className="col-lg-4 col-xl-4">
              <Sidebar featured={featured} relatedLocation={relatedLocation} relatedType={relatedType} propertyLink={`https://qoshan-findhouse.vercel.app/details/${url}`} propertyName={property?.x_name} />
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
