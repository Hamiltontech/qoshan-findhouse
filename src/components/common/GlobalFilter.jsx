
import {useState, useEffect} from 'react'
import Link from "next/link";
import axios from "axios";

const GlobalFilter = ({ className = "", pageRoute }) => {
  const [area, setArea] = useState([])
  useEffect(()=>{
    axios.get("https://strapi-125841-0.cloudclusters.net/api/areas?pagination[start]=0&pagination[limit]=1000").then((response)=>{
      const res = response?.data?.data
      res.sort((a, b) => Number(a?.attributes?.Position) - Number(b?.attributes?.Position));
      setArea(res)
    })
}, [])


  // values of search
const [type, setType] = useState("all")
const [location, setLocation] = useState("")
const [keyword, setKeyword] = useState("")
const [minPrice, setMinPrice] = useState("أقل سعر")
const [maxPrice, setMaxPrice] = useState("أعلى سعر")

const [bedrooms, setBedrooms] = useState("")
const [bathrooms, setBathrooms] = useState("")
const [garages, setGarages] = useState("")
const [minArea, setMinArea] = useState("أقل مساحة")
const [maxArea, setMaxArea] = useState("أكبر مساحة")



const handleError = ()=>{
  document.getElementById("error").innerHTML = "الرجاء ادخال معلومات البحث"
}


  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">


        {/* keyword */}
        <li className="list-inline-item" style={{width: "50%", marginBottom: "10px"}}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              style={{width: '100%'}}
              placeholder="أدخل كلمة للبحث"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </li>
     

        {/* type */}
        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select 
              value={type}
              onChange={(e) => setType(e.target.value)} 
              className="selectpicker w100 form-select show-tick">
                <option value="">نوع العقار</option>
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
       

        
        {/* location */}
        <li className="list-inline-item">
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
              <option value="جبل عمان">جبل عمان</option>

              <option value="أم اذينة">أم اذينة</option>
              <option value="الكرسي">الكرسي</option>
              <option value="أم السماق">أم السماق</option>
              <option value="الرابية">الرابية </option>
              <option value="الظهير">الظهير </option>
              <option value="الجندويل">الجندويل </option>
              <option value="بوليفارد العبدلي"> بوليفارد العبدلي </option>
              <option value="حجارة النوابلسة">حجارة النوابلسة </option>
              <option value="طريق المطار">الحويطي </option>
              <option value="ضاحية النخيل">ضاحية النخيل </option>
              <option value="رجم عميش">رجم عميش </option>
              <option value="طريق المطار">حي الصحابة </option>
              <option value="شارع مكة المكرمة">شارع مكة المكرمة</option>
              <option value="أم السماق">شارع عبدالله غوشة </option>
              <option value="ضاحية الأمير راشد">ضاحية الامير راشد </option>
              <option value="طريق المطار">طريق المطار</option>
            </select>
            </div>
          </div>
        </li>
   

{pageRoute? <>
  {/* bedrooms */}
  <li className=" list-inline-item" style={{marginBottom: "10px"}}>
        <div className="form-group ">
          <input
          value={bedrooms}
            type="number"
            className="form-control"
            placeholder="غرف النوم"
            onChange={(e) => setBedrooms(e.target.value)}
          />
        </div>
      </li>


     {/* bathrooms */}
     <li className=" list-inline-item">
        <div className="form-group ">
          <input
          value={bathrooms}
            type="number"
            className="form-control"
            placeholder="الحمامات "
            onChange={(e) => setBathrooms(e.target.value)}
          />
        </div>
      </li>

           {/* garages */}
     <li className=" list-inline-item">
        <div className="form-group ">
          <input
          value={garages}
            type="number"
            className="form-control"
            placeholder=" الكراجات"
            onChange={(e) => setGarages(e.target.value)}
          />
        </div>
      </li>


       {/* area range */}
     <li className=" list-inline-item">
        <div className="form-group ">
          <input
          value={minArea}
            type="number"
            className="form-control"
            placeholder=" أقل مساحة"
            onChange={(e) => setMinArea(e.target.value)}
          />
        </div>
      </li>

      <li className="list-inline-item">
        <div className="form-group">
          <input
          value={maxArea}
            type="number"
            className="form-control"
            id="exampleInputName3"
            placeholder=" أكبر مساحة"
            onChange={(e) => setMaxArea(e.target.value)}
          />
        </div>
      </li>
</>
:
<></>
}
   






     {/* price range */}
     <li className=" list-inline-item">
        <div className="form-group ">
          <input
          value={minPrice}
            type="number"
            className="form-control"
            placeholder="اقل سعر"
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
      </li>

      <li className="list-inline-item">
        <div className="form-group">
          <input
          value={maxPrice}
            type="number"
            className="form-control"
            id="exampleInputName3"
            placeholder="أعلى سعر"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </li>


      <li className="custome_fields_520 list-inline-item"></li>



   <li className="list-inline-item">
          <div className="search_option_button">
            <Link
            href={{
              pathname: "all-properties",
              query: {
                  keyword: keyword,
                  area: location,
                  type: type,
                  minPrice: minPrice,
                  maxPrice: maxPrice,

                  bedrooms: bedrooms,
                  bathrooms: bathrooms,
                  garages: garages,
                  minArea: minArea,
                  maxArea: maxArea
              }
          }}>
            <button
              type="submit"
              className="btn btn-thm"
            >
              بحث
            </button>
            </Link>
          </div>
        </li>

  
        
       

      </ul>
    </div>
  );
};

export default GlobalFilter;
