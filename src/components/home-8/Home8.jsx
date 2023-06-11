import MobileMenu from "../common/header/MobileMenu";
import Header from "./Header";
// import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import ComfortPlace from "./ComfortPlace";
import Partners from "../common/Partners";
import Testimonials from "./Testimonials";
import HeroSlider from "./HeroSlider";
import PopupSignInUp from "../common/PopupSignInUp";
import FeaturedProps from "./FeaturedProps";
import HeroFilter from "./HeroFilter";
import CategoriesFilter from "../blog-list-2/CategoriesFilter";
import Advert from "./advert";
import Link from "next/link";
import FeaturedProperties from "../home/FeaturedProperties";
import Watchqoshan from './Watchqoshan'



// diala
import axios from "axios";
import { useEffect, useState } from "react";

const Home8 = () => {
  const [data, setData] = useState([])
  const [featured, setFeatured] = useState([])
  const [heroProperties, setHeroProperties] = useState([])


  

  useEffect(() => {
    axios.get("/data.json").then((res) => {
      setData(res.data)
      setFeatured(res.data.filter((ele) => ele?.x_studio_featured_property === "Yes"))
      setHeroProperties(res.data.filter((ele) => ele?.x_studio_view_on_slider === "Yes"))
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  
  data?.sort(function(a,b){
    return new Date(b?.x_studio_create_date_wp) - new Date(a?.x_studio_create_date_wp);
  });


  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- 4th Home Slider --> */}
      <section className="p0">
        <div className="container-fluid p0">
          <div className="home8-slider">
            <div className="bs_carousel ">
              <HeroSlider heroProperties={heroProperties}/>
            </div>
          </div>
        </div>
      </section>
      <section className="property-search search-overlay">
        <div className="container">
          <div className="row posr">
            <div className="col-lg-12">
              <HeroFilter />

            </div>
          </div>
        </div>

        {/* End .container */}

        <div className="mouse_scroll">
          <a href="#feature-property">

          </a>
        </div>
      </section>

      <section id="feature-property" className="feature-property " style={{ marginLeft: 30, marginRight: 30 }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mt10">
               <Advert />
            </div>

            <div className="main-title mb40 mt30">

              <h2>عقارات مميزة</h2>
              <p>
                <a className="float-start" href="all-properties?type=all">
                  إعرض المزيد <span className="flaticon-back"></span>
                </a>
                عقارات مميزة لكم من فريق قوشان.

              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="feature_property_home3_slider gutter-x15">
              <FeaturedProps featured={featured} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30 bb1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>عقارات حسب المنطقة</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <FindProperties />
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Find Comfort Place --> */}
      <section id="comfort-place" className="comfort-place pb30 bb1" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>جميع العقارات</h2>

              </div>
            </div>
          </div>
          <div className="row" dir="rtl">
            <ComfortPlace data={data} featured={featured} />
          </div>
        </div>
      </section>

      {/* <!-- Feature news --> */}
      <section id="feature-property" className="feature-property bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40 mt30">
                <h2>أخبارك من قوشان </h2>
                {/* <p>Handpicked properties by our team.</p> */}
              </div>
            </div>
            <div className="lsd_list">
              <CategoriesFilter />
            </div>
            <div className="col-lg-12">
              <div className="feature_property_slider gutter-x15">
                <FeaturedProperties />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Home Design --> */}
      <section className="our-hot-offer parallax" dir="rtl">
        <div className="container">
          <div className="row mt40">

            <div className="col-lg-12">

              <div className="our_hotoffer">
                <p>#مستشارك_العقاري</p>
                <h2>شاهد قوشان</h2>
                <Link href="/watch-qoshan"><button style={{ background: '#22222222', paddingLeft: '15px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', color: '#ffff', border: 'none' }}>شاهد قوشان</button></Link>
                <Link href="/shorts"><button style={{ background: '#ffff', paddingLeft: '15px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', color: '#000000', border: 'none' }}>نصائح عقارية</button></Link>
                {/* <Watchqoshan/> */}

              </div>

            </div>
          </div>
        </div>

      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one home3">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area home3 pt30 pb30">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default Home8;
