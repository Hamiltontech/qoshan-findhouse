import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBanner = () => {
  return (
    <section className="inner_page_breadcrumb">
      <div className="container" style={{display: "flex", justifyContent: "center", paddingTop: "40px"}}>
        <div className="row text-center">
          <div className="">
            <div className="breadcrumb_content text-center"  >
              <h4 className="breadcrumb_title text-center" >تعرف على قوشان</h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
