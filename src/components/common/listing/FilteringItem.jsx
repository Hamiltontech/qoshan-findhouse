import { useEffect } from "react";
import Link from "next/link";

const FilteringItem = ({headerType, setHeaderType, setSort, keyword, location, type, garages, bathrooms, bedrooms, minarea, maxarea, age, minprice, maxprice,  setKeyword, setLocation, setStatus, setType, setGarages, setBathroom, setBedroom, setAreaMax, setAreaMin, setBuiltYear, setMaxprice, setMinprice}) => {

  // clear filter
  const clearHandler = () => {
    setKeyword("")
    setLocation("") 
    setType("all")
    setGarages("")
    setBathroom("")
    setBedroom("") 
    setAreaMax('أكبر مساحة') 
    setAreaMin('أقل مساحة')
    setMinprice('أقل سعر')
    setMaxprice("أعلى سعر")
    setSort("")
    
  };




  return (
    <ul className="sasw_list mb0">
      <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="text"
            value={keyword}
            className="form-control"
            placeholder="ادخل كلمة البحث"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <label>
            <span className="flaticon-magnifying-glass"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      {/* <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="search"
            className="form-control"
            id="exampleInputEmail"
            placeholder="الموقع"
            value={getLocation}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="exampleInputEmail">
            <span className="flaticon-maps-and-flags"></span>
          </label>
        </div>
      </li> */}

<li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
            value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="selectpicker w100 show-tick form-select"
            >
              <option value="">الموقع</option>
              <option value="عبدون">عبدون </option>
              <option value="دير غبار">دير غبار</option>
              <option value="دابوق">دابوق</option>
              <option value="خلدا">خلدا</option>
              <option value="الصويفية">الصويفية</option>
              <option value="الدوار الرابع">جبل عمان</option>

              <option value="ام اذينة">ام اذينة</option>
              <option value="الكرسي">الكرسي</option>
              <option value="ام السماق">ام السماق</option>
              <option value="الرابية">الرابية </option>
              <option value="حجارة النوابلسة">حجارة النوابلسة </option>
              <option value="الحويطي">الحويطي </option>
              <option value="ضاحية النخيل">ضاحية النخيل </option>
              <option value="رجم عميش">رجم عميش </option>
              <option value="حي الصحابة">حي الصحابة </option>
              <option value="شارع مكة">شارع مكة </option>
              <option value="شارع عبدالله غوشة">شارع عبدالله غوشة </option>
              <option value="ضاحية الامير راشد">ضاحية الامير راشد </option>
              <option value="طريق المطار">طريق المطار</option>
            </select>
          </div>
        </div>
      </li>

      {/* End li */}

      {/* <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              
            >
              <option value="">Status</option>
              <option value="apartment">Apartment</option>
              <option value="bungalow">Bungalow</option>
              <option value="condo">Condo</option>
              <option value="house">House</option>
              <option value="land">Land</option>
              <option value="single family">Single Family</option>
            </select>
          </div>
        </div>
      </li> */}
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
            value={type}
              onChange={(e) => setType(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              id="defaultType"
            >
              <option value="all">نوع العقار</option>
              <option value="شقق">شقق</option>
              <option value="شقق طابقية">شقق طابقية</option>
              <option value="فلل متلاصقة">فلل متلاصقة</option>
              <option value="فلل">فلل</option>
              <option value="قطع أراضي سكنية">قطع أراضي سكنية</option>
              <option value="قطع أراضي تجارية">قطع أراضي تجارية</option>
              <option value="قطع أراضي صناعية">قطع أراضي صناعية</option>
              <option value="برج سكني">برج سكني</option>
              <option value="استوديوهات">استوديوهات</option>
              <option value="شاليهات">شاليهات</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      {/* <li>
        <div className="small_dropdown2" dir="ltr">
          <div
            id="prncgs2"
            className="btn dd_btn"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <span>السعر</span>
            <label htmlFor="prncgs2">
              <span className="fa fa-angle-down"></span>
            </label>
          </div>
          <div className="dd_content2 style2 dropdown-menu">
            <div className="pricing_acontent ">
              <PricingRangeSlider />
            </div>
          </div>
        </div>
      </li> */}
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
            value={bathrooms}
              onChange={(e) => setBathroom(e.target.value)}
              className="selectpicker w100 show-tick form-select"
             
            >
              <option value="">حمامات</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
            value={bedrooms}
              onChange={(e) => setBedroom(e.target.value)}
              className="selectpicker w100 show-tick form-select"
             
            >
              <option value="">غرف النوم</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
            value={garages}
              onChange={(e) => setGarages(e.target.value)}
              className="selectpicker w100 show-tick form-select"
              
            >
              <option value="">الكراجات</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}



{/* AGE */}
      {/* <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => setBuiltYear(e.target.value)}
              className="selectpicker w100 show-tick form-select"
             
            >
              <option value="">سنة البناء</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
      </li> */}
      {/* End li */}

      <li className="min_area list-inline-item">
        <div className="form-group mb-4">
          <input
          value={minarea}
            type="number"
            className="form-control"
            id="exampleInputName2"
            placeholder="اقل مساحة"
            onChange={(e) => setAreaMin(e.target.value)}
          />
        </div>
      </li>
      {/* End li */}

      <li className="max_area list-inline-item">
        <div className="form-group mb-4">
          <input
          value={maxarea}
            type="number"
            className="form-control"
            id="exampleInputName3"
            placeholder="اكبر مساحة"
            onChange={(e) => setAreaMax(e.target.value)}
          />
        </div>
      </li>
      {/* End li */}



{/* price range */}
      <li className="min_area list-inline-item">
        <div className="form-group mb-4">
          <input
          value={minprice}
            type="number"
            className="form-control"
            id="exampleInputName2"
            placeholder="اقل سعر"
            onChange={(e) => setMinprice(e.target.value)}
          />
        </div>
      </li>
      {/* End li */}

      <li className="max_area list-inline-item">
        <div className="form-group mb-4">
          <input
          value={maxprice}
            type="number"
            className="form-control"
            id="exampleInputName3"
            placeholder="أعلى سعر"
            onChange={(e) => setMaxprice(e.target.value)}
          />
        </div>
      </li>
      {/* End li */}


      {/* <li>
        <div id="accordion" className="panel-group">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  href="#panelBodyRating"
                  className="accordion-toggle link"
                  data-bs-toggle="collapse"
                  data-bs-parent="#accordion"
                >
                  <i className="flaticon-more"></i> مميزات اخرى
                </a>
              </h4>
            </div>
          

            <div id="panelBodyRating" className="panel-collapse collapse">
              <div className="panel-body row">
                <div className="col-lg-12">
                  <ul className="ui_kit_checkbox selectable-list fn-400">
                    {getAdvanced?.map((feature) => (
                      <li key={feature.id}>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={feature.id}
                            value={feature.name}
                            checked={feature.isChecked || false}
                            onChange={(e) =>
                              dispath(addAmenities(e.target.value))
                            }
                            onClick={() => advancedHandler(feature.id)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={feature.id}
                          >
                            {feature.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li> */}
      {/* End li */}

      <li>
        <div className="search_option_button">
          <Link href={{
            pathname: "all-properties",
            query: {
              type : "all"
            }
          }}>
          <button
            // clear
            onClick={clearHandler}
            type="button"
            className="btn btn-block btn-thm w-100"
          >
            تصفية البحث
          </button></Link>
        </div>
      </li>
      {/* End li */}
    </ul>
  );
};

export default FilteringItem;
