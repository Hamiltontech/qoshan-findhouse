import Link from "next/link";

const Blog = ({articles, keyword, setKeyword, categ, setCateg}) => {


  const handleSearch = (item)=>{
    if(item?.attributes?.Title?.toLowerCase().includes(keyword.toLowerCase())
        ||
        item?.attributes?.Body?.toLowerCase().includes(keyword.toLowerCase())){
          return (
            item?.attributes?.Title || item?.attributes?.Body
          )
        }
  }

  const handleCategory = (item) =>{
    if(categ === "جميع الاخبار"){
      return item?.attributes?.category?.data?.attributes?.Category
    } else if(item?.attributes?.category?.data?.attributes?.Category === categ){
      return item?.attributes?.category?.data?.attributes?.Category
    }
  }
  return (
    <>
{articles?.filter(handleSearch)?.filter(handleCategory)?.map((item)=>(
        <div className="col-lg-6" key={item.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/news-details/${item?.attributes?.URL}`}>
                <a>
                  <img className="img-whp" src={'https://strapi-125841-0.cloudclusters.net' + item?.attributes?.Featured?.data?.attributes?.formats?.large?.url} alt="fp1.jpg"/>
                </a>
              </Link>
              <div className="blog_tag"> <p style={{color: "white"}}>{item?.attributes?.category?.data?.attributes?.Category}</p></div>
            </div>
            {/* End .thumb */}

            <div className="details">
              <div className="tc_content">
                <h4 className="mb15">
                  <Link href={`/news-details/${item?.attributes?.URL}`}>
                    <a>{item.attributes.Title}</a>
                  </Link>
                </h4>
                <ul className="bpg_meta mb10">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="flaticon-calendar"></i> 
                    </a>
                  </li>
                  <li className="list-inline-item m-" style={{margin: 5,}}>
                  <a href="#"> {item.attributes?.createdAt.split('T')[0]} </a>
                  </li>
                </ul>
                <p>{item?.attributes?.Body?.slice(0, 100)}</p>
              </div>
              {/* End .tc_content */}

              <div className="fp_footer">
              
                <a className=" text-thm" href={`/news-details/${item?.attributes?.URL}`}>
                  إقرأ المزيد <span className="flaticon-back"></span>
                </a>
              </div>
              {/* End fb_footer */}
            </div>
            {/* End .thumb */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
