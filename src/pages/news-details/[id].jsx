import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import BreadCrumb2 from "../../components/blog-details/BreadCrumb2";
import Comments from "../../components/blog-details/Comments";
import Pagination from "../../components/blog-details/Pagination";
import Ratings from "../../components/blog-details/Ratings";
import RelatedPost from "../../components/blog-details/RelatedPost";
import ReviewBox from "../../components/blog-details/ReviewBox";
import BlogSidebar from "../../components/common/blog/BlogSidebar";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Social from "../../components/common/footer/Social";
import Header from "../../components/home-8/Header";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import Seo from "../../components/common/seo";
import Image from 'next/image'


const BlogDetailsDynamic = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});
  const { id } = router.query;

  const [relatedCtegory, setRelatedCategory]= useState("")

  useEffect(() => {
    axios
      .get("https://strapi-125841-0.cloudclusters.net/api/articles?populate=*")
      .then((response) => {
        const res = response.data.data;
        const prop = res?.find((item) => item.attributes.URL === id);
        setArticle(prop);
        setRelatedCategory(prop?.attributes?.category?.data?.attributes?.Category)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);



  return (
    <>
      <Seo pageTitle={article?.attributes?.Title} />
      <Header />
      <MobileMenu />
      <PopupSignInUp />

      <section className="blog_post_container bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <BreadCrumb2 />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              {article && article.attributes && (
                <div className="main_blog_post_content">
                  <div className="mbp_thumb_post">
                    <div className="blog_sp_tag" style={{color: "white"}}>
                      {article?.attributes?.category?.data?.attributes?.Category}
        
                    </div>
                    <h3 className="blog_sp_title">{article?.attributes?.Title}</h3>
                    <ul className="blog_sp_post_meta" style={{gap: '10px', display: "flex"}}>
                      
                      <li className="list-inline-item">
                        <span className="flaticon-calendar"></span>
                      </li>
                      <li className="list-inline-item">
                      <a href="#">{article.attributes?.createdAt.split('T')[0]}</a>
                      </li>
                                          
                      
                    </ul>
                    <div className="thumb">
                    <Image src={'https://strapi-125841-0.cloudclusters.net' + article?.attributes?.Featured?.data?.attributes?.formats?.large?.url}
                      width={752}
                      height={450}
                      />
                    </div>

                    <div className="details">
                      <p className="mb25">{article?.attributes?.Body}</p>
                    </div>
                    <ul className="blog_post_share">
                      <li>
                        <p>شارك المقال</p>
                      </li>
                      <Social />
                    </ul>
                  </div>

                  {/* <div className="mbp_pagination_tab">
                    <Pagination />
                  </div> */}

                  

                </div>
              )}

              {/* <div className="row">
                <div className="col-lg-12 mb20">
                  <h4>مقالات مشابهة</h4>
                </div>
                <RelatedPost />
              </div> */}
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
