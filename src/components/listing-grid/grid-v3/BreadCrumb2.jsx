import BreadCrumb from "../../common/BreadCrumb";

const BreadCrumb2 = ({typeParams}) => {
  return (
    <div className="breadcrumb_content style2" dir="rtl">
      <h2 className="breadcrumb_title"> {typeParams == "all"? <>جميع العقارات</> : typeParams}</h2>
    </div>
  );
};

export default BreadCrumb2;
