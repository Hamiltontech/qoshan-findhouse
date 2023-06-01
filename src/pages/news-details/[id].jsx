import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import BreadCrumb2 from "../../components/blog-details/BreadCrumb2";
import BlogSidebar from "../../components/common/blog/BlogSidebar";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Social from "../../components/common/footer/Social";
import Header from "../../components/home-8/Header";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import Seo from "../../components/common/seo";
import Image from 'next/image'

import ReactHtmlParser from 'react-html-parser';
import RelatedPost from '../../components/blog-details/RelatedPost'


const BlogDetailsDynamic = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});
  const { id } = router.query;

  const [relatedCtegory, setRelatedCategory]= useState("")




  useEffect(()=>{
    axios.get("/news.json").then((res)=>{
      const response = res.data
      const prop = response?.find((item)=> item.x_name.replace(/\s+/g, '-') === id)
      setArticle(prop)
      setRelatedCategory(prop?.x_studio_many2one_field_doQAc[1])
    })
  }, [id])


  return (
    <>
      <Seo pageTitle={article?.attributes?.Title} />
      <Header />
      <MobileMenu />
      <PopupSignInUp />

      <section className="blog_post_container bgc-f7" dir="rtl">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <BreadCrumb2 />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              {article && (
                <div className="main_blog_post_content">
                  <div className="mbp_thumb_post">
                    <div className="blog_sp_tag" style={{color: "white"}}>
                      {article?.x_studio_many2one_field_doQAc && article?.x_studio_many2one_field_doQAc[1]}
        
                    </div>
                    <h3 className="blog_sp_title">{article?.x_name}</h3>
                    <ul className="blog_sp_post_meta" style={{gap: '10px', display: "flex"}}>
                      
                      <li className="list-inline-item">
                      <i className="flaticon-calendar"></i> 
                      </li>
                      <li className="list-inline-item">
                      <a href="#">{article?.x_studio_original_create_date}</a>
                      </li>
                                          
                      
                    </ul>
                    <div className="thumb">
                    <Image 
                    src={article?.x_studio_api_url && article?.x_studio_api_url}
                      width={752}
                      height={450}
                      />
                    </div>

                    <div className="details">
                      <p className="mb25">{ReactHtmlParser(article?.x_studio_body)}</p>
                    </div>
                    <ul className="blog_post_share">
                      <li>
                        <p>شارك المقال</p>
                      </li>
                      <ul className="contact_form_social_area">
        <Social />
      </ul>
                    </ul>
                  </div>

                  {/* <div className="mbp_pagination_tab">
                    <Pagination />
                  </div> */}

                  

                </div>
              )}

              <div className="row" dir="rtl">
                <div className="col-lg-12 mt20">
                  <h4>أخبار مشابهة</h4>
                </div>
                <RelatedPost relatedCtegory={relatedCtegory}/>
              </div>
            </div>

            <div className="col-lg-4">
              <BlogSidebar relatedCtegory={relatedCtegory} setRelatedCategory={setRelatedCategory}/>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(BlogDetailsDynamic), {
  ssr: false,
});
