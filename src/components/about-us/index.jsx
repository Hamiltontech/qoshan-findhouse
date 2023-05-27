import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../home-8/Header";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import PopupSignInUp from "../common/PopupSignInUp";
import WhyChoose from "../common/WhyChoose";
import Testimonial from "../home-7/Testimonial";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Team from "./Team";
import OurMission from "./OurMission";
import Image from "next/image";
import Link from "next/link";

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

      {/* <!-- About Text Content --> */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="mt0 about-platform">منصة العقار الأردنية على الانترنت</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <OurMission />
          </div>
          {/* End .row */}

          
        </div>
      </section>

      {/* <!-- Our Team --> */}
      <section style={{background: '#404041'}}>
        <div className="container">
          <div className="row" >
            <div className="col-lg-6" style={{direction: 'rtl', color: 'white'}}>
              <h2 style={{color: '#C2B49A'}}>نادر علان</h2>
              <span style={{color: '#C2B49A'}}>مؤسس قوشان</span><br></br>
            هو المستشار العقاري والمدير التنفيذي لشركة قوشان والذي عرف بنجاحه كمنتج ومقدم البرنامج العقاري التلفزيوني الأول في الأردن قوشان المتميز والمختص في كل ما يتعلق بالسوق العقاري . وأدخل المستشار العلان ثقافة “الاستشارة العقارية” للمجتمع الأردني، والذهاب إلى مستشار مختص، وذلك من خلال اكتساب فهم عميق لحاجات العملاء وتطوير استراتيجيات التسويق وبناء شبكة من أفضل مطوري ووكلاء ومقدري العقارات. بدأت مسيرة المستشار العقاري نادر العلان في عام 2004 وذلك من خلال دمج مهاراته التسويقية وشغفه في القطاع العقاري حيث عرفه المستثمرين والعملاء كمستشار عقاري فعال وصادق في البيع والشراء في الأردن والمنطقة في مجال العقار، لا يوجد منافس له سواء في البيع أو الشراء، حيث يعتبر مستشار عقارياً في مجال العقود و الإدارة وضمان كل عملية تجري أن تكون عملية ناجحة.
            </div>
            <div className="col-lg-4">
<img src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1685187005/22686417_1667229549988499_1798486990_n_2_gl54ja.webp" width={400}/>
</div>
            </div>
            </div>
            </section>

      {/* <!-- Our Testimonials --> */}
    
      <section style={{background: '#404041'}}>
        <div className="container">
          <div className="row" >
            <div className="col-lg-12 text-center" style={{direction: 'rtl', color: 'white', paddingLeft: 40, paddingRight: 40}}>
              <h2 style={{color: '#C2B49A'}}>برنامج قوشان التلفزيوني</h2>
              برنامج تلفزيوني عقاري يسلط الضوء على أهم الاستثمارات العقارية في المملكة ويساعد على تشجيع الاستثمار في القطاع و نشر التوعية بأساسيات الهندسة و البناء, والعمل على تقديم حلول للمشاكل التي تواجه العملاء أثناء بيع و  شراء العقار بطرق صحيحة ومهنية ونكشف للمشاهدين بعض أسرار المهن العقارية ودورها المهم لتطور القطاع العقاري في الأردن كما نعمل جذب العملاء لإختيار العقار المناسب بطريقة غير تقليدية
              <br>
              </br>
              <Link href="/watchqoshan">
                <button style={{paddingLeft: 20, paddingRight: 20, paddingTop: 8, paddingBottom: 8, marginTop: 5, background:'#C2B49A', border: 'none', color: 'white' }}>شاهد قوشان</button>
              </Link>

</div>
      
            </div>
            </div>
            </section>

      {/* <!-- Our Partners --> */}
      <section style={{background: '#404041'}}>
        <div className="container">
          <div className="row" >
            <div className="col-lg-12 text-center" style={{direction: 'rtl', color: 'white', paddingLeft: 40, paddingRight: 40}}>
<img src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684257815/winner-land_jm56zk.webp" width={300} style={{marginBottom: 20}}/><br></br>
فازت شركة قوشان العقارية بجائزة Luxury Life Style الصادرة من نيويورك في الولايات المتحدة الأميركية كأفضل شركة إدارة وتسويق اعقارات في الأردن لعام 2022. وجائزة Luxury Life Style هي جائزة عالمية، تمنح لمقدمي أفضل الخدمات والسلع الفاخرة حول العالم، للعام الرابع عشر على التوالي. وتملك قوشان خبرة تزيد عن سبعة عشر عاما في إدارة وتسويق أفضل المشاريع العقارية في المملكة وبطرق مبتكرة وحلول تسويقية خارجة عن الأسلوب التقليدي. وحصلت شركة قوشان على الجائزة بعد منافستها مع عشرات المرشحين حول العالم، جرى خلالها تقييم أكثر من 10 آلاف خدمة وسلعة من 400 فئة و60 دولة ويتم تحليل وتقييم النتائج لتمنح قوائم بأفضل مقدمي الخدمات فقط.              <br>
              </br>
              
</div>
      
            </div>
            </div>
            </section>

      {/* <!-- Start Call to Action --> */}
      <section style={{background: '#404041'}}>
        <div className="container">
          <div className="row" >
            <div className="col-lg-3" style={{direction: 'rtl', color: 'white'}}>
           <img src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1685190444/ammanpoly_fbevcv.webp"/>
            </div>
            <div className="col-lg-6" style={{direction: 'rtl', color: 'white', paddingLeft: 40, paddingRight: 40}}>
        <h2 style={{color: '#C2B49A'}}>لعبة المتاجرة بالعقارات
</h2>
            عتبر لعبة المتاجرة بالعقارات من أشهر ألعاب الألفية الثانية حيث يقوم مبدأها على المنافسة بين اللاعبين على شراء الأراضي والبناء عليها والاستثمار عقارياً.

أنتجت شركة قوشان مالكة موقع (Qoshan.com) نسخة محدودة تحاكي لعبة العقارات المشهورة بتفاصيل ونكهة أردنية . حيث تم طرح عدد 1500 لعبة فقط عالية الجودة ( غير تجارية ) بداية شهر شباط 2018
                          </div>
                          <div className="col-lg-3" style={{direction: 'rtl', color: 'white', paddingLeft: 40, paddingRight: 40}}>
                          <img src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1685190208/logo-1-300x269-1_sszs8g.webp"/>

                          </div>
                                  
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
