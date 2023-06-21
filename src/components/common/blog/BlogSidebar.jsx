import SearchBox from "./SearchBox";
import RelatedNews from './RelatedNews'
import { TfiSearch } from 'react-icons/tfi'
import Advert from '../listing/advert'
import Advert2 from '../listing/advert-two'

const BlogSidebar = ({relatedCtegory, keyword, setKeyword }) => {
  return (
    <div className="blog-sidebar_widgets">
      <div className="sidebar_search_widget">

        <h4 className="title"> <TfiSearch />  ابحث عن أخبار  </h4>
        <div className="blog_search_widget">
          <SearchBox keyword={keyword} setKeyword={setKeyword} />
        </div>
      </div>
      {/* End .sidebar_search_widget */}


      <div className="sidebar_feature_listing" dir="rtl">
        {/* <FeaturedListings/> */}

        <Advert />
      </div>
      <div className="sidebar_feature_listing" dir="rtl">
       

        <Advert2 />
      </div>
      {/* End .blog_tag_widget */}
    </div>

  );
};

export default BlogSidebar;
