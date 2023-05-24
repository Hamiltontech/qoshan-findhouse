import BreadCrumbBlog from "./BreadCrumbBlog";
import Blog from "./Blog";
import BlogSidebar from "../common/blog/BlogSidebar";
import Pagination from "../common/blog/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import CategoriesFilter from "./CategoriesFilter";
import { useRouter } from "next/router";

const SearchNews = ()=>{
    const [articles, setArticles] = useState([])
    const [keyword, setKeyword] = useState("")
    const router = useRouter()
    const categoryParams = router.query.category
    const [categ, setCateg] = useState("")


    useEffect(()=>{
      axios.get("https://strapi-125841-0.cloudclusters.net/api/articles?populate=*").then((res)=>{
        setArticles(res?.data?.data)
        setCateg(categoryParams)
    }).catch((err)=>{
      console.log(err)
    })
    }, [categoryParams])

    return(
        <>
              {/* <!-- Main Blog Post Content --> */}
      <section className="blog_post_container bgc-f7" dir="rtl">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <BreadCrumbBlog />
            </div>
          </div>
          {/* End .row */}



          <div className="lsd_list">
          <CategoriesFilter/>
        </div> 

          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <Blog articles={articles} keyword={keyword} setKeyword={setKeyword} categ={categ} setCateg={setCateg} />
                {/* End blog item */}
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="mbp_pagination mt20">
                    <Pagination />
                  </div>
                  {/* End .mbp_pagination */}
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-xl-4">
              <BlogSidebar keyword={keyword} setKeyword={setKeyword}/>
            </div>
            {/* End Sidebar column */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
        </>
    )
}

export default SearchNews;