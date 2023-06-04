import Link from "next/link";
import ReactHtmlParser from 'react-html-parser';

const Blog = ({setPostNum, postNum, news, keyword, setKeyword, categ, setCateg}) => {

  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 6) 
  }



  const handleSearch = (item)=>{
    if(item?.x_name.toLowerCase().includes(keyword.toLowerCase())
        ||
        item?.x_studio_body?.toLowerCase().includes(keyword.toLowerCase())){
          return (
            item?.x_name || item?.x_studio_body
          )
        }
  }

  const handleCategory = (item) =>{
    if(categ && categ === "جميع الاخبار"){
      return item?.x_studio_many2one_field_doQAc[1]
    } else if(item?.x_studio_many2one_field_doQAc[1] === categ){
      return item?.x_studio_many2one_field_doQAc[1]
    }
  }
  return (
    <>
{news?.filter(handleSearch)?.filter(handleCategory)?.slice(0, postNum)?.map((item)=>(
        <div className="col-lg-6" key={item.id}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/news-details/${item.x_name.replace(/\s+/g, '-')}`}>
                <a>
                  <img className="img-whp" src={item?.x_studio_api_url && item?.x_studio_api_url} alt="fp1.jpg"/>
                </a>
              </Link>
              <div className="blog_tag"> <p style={{color: "white"}}>{item?.x_studio_many2one_field_doQAc[1]}</p></div>
            </div>
            {/* End .thumb */}

            <div className="details">
              <div className="tc_content">
                <h4 className="mb15">
                  <Link href={`/news-details/${item.x_name.replace(/\s+/g, '-')}`}>
                    <a>{item.x_name}</a>
                  </Link>
                </h4>
                <ul className="bpg_meta mb10">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="flaticon-calendar"></i> 
                    </a>
                  </li>
                  <li className="list-inline-item m-" style={{margin: 5,}}>
                  <a href="#"> {item.x_studio_original_create_date} </a>
                  </li>
                </ul>
                <p>{ReactHtmlParser(item?.x_studio_body?.slice(0, 100))} </p>
              </div>
              {/* End .tc_content */}

              <div className="fp_footer">
              
                <a className=" text-thm" href={`/news-details/${item.x_name.replace(/\s+/g, '-')}`}>
                  إقرأ المزيد <span className="flaticon-back"></span>
                </a>
              </div>
              {/* End fb_footer */}
            </div>
            {/* End .thumb */}
          </div>
        </div>
      ))}

<div style={{ display: "flex", placeContent: "center"}}>
<button  className="btn btn-thm" type="submit" onClick={handleClick}>عرض المزيد</button></div>
    </>
    
  );
};

export default Blog;
