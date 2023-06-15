import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../home-8/Header";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBanner from "./BreadCrumbBanner";
import FaqContent from "./Form";
import Iframe from "react-iframe";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner />

      {/* <!-- Our FAQ --> */}
      <section className="our-faq bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <span className="mt0">
                يمكنكم الإعلان عن عقاركم مع قوشان عن طريق تعبئة جميع البيانات المطلوبة أدناه بحيث يمكنكم رفع أكثر من صورة أو فيديو , وبعد إرسال العقار سيقوم مستشارك العقاري بالتواصل معكم عن طريق معلومات التواصل المزودة من قبلكم.  

في حال احتجتم إلى مساعدة أخرى يمكنكم زيارة صفحة تواصل معنا و التحدث مع أحد مستشاري قوشان.
                </span>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="faq_content">
                <div className="faq_according">
                  {/* <FaqContent /> */}
                  {/* <iframe src="http://qform.vps47625.mylogin.co/?page_id=12" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="50%" width="50%" allowfullscreen></iframe> */}
                  <Iframe url="http://qform.vps47625.mylogin.co/?page_id=12"
        width=""
        height="900px"
        scrolling="no"
        id=""
        className=""
        display="block"
        position="relative"/>
                </div>
              </div>
            </div>
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

export default index;
