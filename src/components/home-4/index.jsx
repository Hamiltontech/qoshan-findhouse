import Blogs from "../common/Blogs";
import GlobalHeroFilter from "../common/GlobalHeroFilter";
import MobileMenu from "../common/header/MobileMenu";
import Header from "../home-8/Header";
import HeroSlider from "./HeroSlider";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import PopupSignInUp from "../common/PopupSignInUp";
import CategoriesCards from "./CategoriesCards";

const index = () => {
  return (
    <>
   
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- 4th Home Slider --> */}
      <div className="home-four " dir="rtl">
        <div className="container-fluid p0">
          <div className="main-banner-wrapper">
            <div className="arrow-style-2 banner-style-one">
              <HeroSlider />
            </div>
          </div>
          {/* <!-- /.main-banner-wrapper --> */}
        </div>
        {/* End .container-fluid */}

        <div className="container home_iconbox_container">
          <div className="row posr">
            <div className="col-lg-12">
              <div className="home_content home4">
                <div className="home-text text-center">
                  <h2 className="fz55">البحث المفصل</h2>
                  <p className="fz18 color-white">
                  في بحثنا المتقدم ، نوفر لك استخدام الميزات المتقدمة للبحث عن العقار المناسب لك.
                  </p>
                </div>
                <GlobalHeroFilter className="home4" />
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <h4 className="text-center color-white fw600 mb25 mb0-520">
                حسب نوع العقار
              </h4>
              <ul className="home4_iconbox mb0">
                <LookingItem />
              </ul>
            </div>
          </div> */}
        </div>
      </div>

      {/* <!-- Property Cities --> */}
      <section id="best-property" className="best-property bgc-f7">
        <div className="container ovh">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>عقارات حسب النوع</h2>
                <p>قم بالبحث عن عقارك بشكل مفصل من قائمة عقار قوشان حيث يتم تحديثها أولاً بأول</p>
              </div>
            </div>
          </div>
          <div className="row" style={{placeContent: "center"}}>
          <CategoriesCards />
          </div>
        </div>
      </section>

      {/* <!-- Our Blog --> */}
      <section className="our-blog bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>جميع العقارات</h2>
                <p>يمكنكم التواصل معنا في حال احتجتم إلى مساعدة و يمكنكم أن تعلنوا عن عقاركم من خلال صفحة أعلن عن عقارك</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
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

export default index;
