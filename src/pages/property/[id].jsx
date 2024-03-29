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
import Seo from "../../components/common/seo";
import Head from 'next/head';
import Social from "./Social";
import PropGallery from './PropGallery'
import PropertyGallery from "./Gallery";



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
      if(isNaN(id)){
        const data = response.data?.find((item) => item?.x_name?.replace(/\s+/g, '-') == id)
        console.log(data.x_studio_property_id)
        router.push('/property/' + `${data.x_studio_property_id}`)
        setProperty(data)
        const feat = response.data.filter((item) => item.x_studio_featured_property === "Yes")
        setFeatured(feat)
  
        setRelatedLocation(data?.x_studio_many2one_field_YbLip[1])
        setRelatedType(data?.x_studio_property_type[1])
      }else{

        const data = response.data?.find((item) => item?.x_studio_property_id == id)
        setProperty(data)
  
        const feat = response.data.filter((item) => item.x_studio_featured_property === "Yes")
        setFeatured(feat)
  
        setRelatedLocation(data?.x_studio_many2one_field_YbLip[1])
        setRelatedType(data?.x_studio_property_type[1])
      }

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





  const url = property?.x_studio_property_id

  // const handleImages = (val) => {
  //   if (val !== ", ") {
  //     return val
  //   }
  // }


  const gal = property?.x_studio_property_images && property?.x_studio_property_images?.split(',') || []



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
                  {property?.x_studio_many2one_field_YbLip ?
                    <div style={{ display: 'flex', gap: '2px', }}>
                      <span className="flaticon-maps-and-flags" /> <p style={{ fontSize: '16px' }}>{property?.x_studio_many2one_field_YbLip && property?.x_studio_many2one_field_YbLip[1]}</p>
                    </div>
                    : <></>
                  }

                  {/* share */}
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="single_property_social_share position-static transform-none">
                  <div className="price float-start fn-400">
                    {/* price */}
                    {property?.x_studio_sales_price > 0 ?
                      <h2>
                        <span style={{ fontSize: '12px' }}>{property?.x_studio_price_prefix}</span>
                        {property?.x_studio_sales_price && property?.x_studio_sales_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} دينار أردني
                      </h2>
                      :
                      <> <span style={{ fontSize: '12px' }}>{property?.x_studio_price_prefix}</span></>}

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
                      <img 
                      src={property?.x_studio_featured_url}
                          
                      />
                        // <Image src={property?.x_studio_featured_url}
                        //   width={100}
                        //   height={100}
                        //   layout="responsive"
                        //   priority
                        //   placeholder="blur"
                        //   blurDataURL={property?.x_studio_featured_url} 
                        // />
                        : <></>
                      }

                    </div>
                  </div>
                </div>
              </div>
              {/* End .col-sm-7 .col-lg-8 */}





<PropertyGallery gal={gal}/>  



              {/* End  col-sm-5 col-lg-4 */}
            </div>
            {/* End .row */}
          </Gallery>

          <ul className="contact_form_social_area mt30">
            <Social propertyUrl={`https://qoshan.com/property/${url}`} />
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
              <Sidebar featured={featured} relatedLocation={relatedLocation} relatedType={relatedType} propertyLink={`https://qoshan.com/property/${url}`} propertyName={property?.x_name} />
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
