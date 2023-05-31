import BreadCrumbBlog from "./BreadCrumbBlog";
import Blog from "./Blog";
import BlogSidebar from "../common/blog/BlogSidebar";
import Pagination from "../common/blog/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import CategoriesFilter from "./CategoriesFilter";
import { useRouter } from "next/router";
import { paginate } from "../common/blog/paginate";


const SearchNews = ()=>{
    const [keyword, setKeyword] = useState("")
    const router = useRouter()
    const categoryParams = router.query.category
    const [categ, setCateg] = useState("")

// pagination
const [currentPage, setCurrentPage] = useState(1);
 const pageSize = 6;

 const onPageChange = (page) => {
   setCurrentPage(page);
 };




    const [news, setNews] = useState([])

      useEffect(()=>{
        axios.get("/news.json").then((res)=>{
          setNews(res.data)
          setCateg(categoryParams)
        }).catch((error)=>{
          console.log(error)
        })
      }, [categoryParams])

      news?.sort(function(a,b){
        return new Date(b?.x_studio_original_create_date) - new Date(a?.x_studio_original_create_date);
      });


      // const paginatedPosts = paginate(news, currentPage, pageSize)
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
                <Blog news={news}  keyword={keyword} setKeyword={setKeyword} categ={categ} setCateg={setCateg} />
                {/* End blog item */}
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="mbp_pagination mt20">
                    {/* <Pagination 
                    items={news.length}
                    currentPage={currentPage} 
                    pageSize={pageSize} 
                    onPageChange={onPageChange}
                    /> */}
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