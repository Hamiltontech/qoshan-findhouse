
import {useState, useEffect} from 'react'
import Link from "next/link";
import axios from "axios";
import { CompanyModule } from '@faker-js/faker';
import { filter } from '../../data/findProperties';

const GlobalFilter = ({ className = "", pageRoute }) => {
  const [cities, setCities] = useState([])
  const [data, setData] = useState([])
  const [citiesOptions, setCitiesOptions] = useState([])
  const [complete, setComplete] = useState(false)

  useEffect(()=>{
    axios.get("/cities.json").then((response)=>{
      setCities(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])


  useEffect(()=>{
    axios.get("/citiesOptions.json").then((response)=>{
      setCitiesOptions(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])

  useEffect(()=>{
    axios.get("/data.json").then((response)=>{
      setData(response.data)
    }).catch((error)=>{
      console.log(error)
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



function replaceArabicNums(str) {
  const arabicNums = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
  const englishNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let newStr = str;
  arabicNums.forEach((num, index) => {
    newStr = newStr.replace(num, englishNums[index]);
  });
  return newStr;
}

const arabicNums = /[٠-٩]/;
const tested = arabicNums.test(keyword)

if(tested){
    const englishStr = replaceArabicNums(keyword)
    setKeyword(englishStr)
}


  // keyword filter
  const keywordHandler = (item) => {
    if (item?.x_name?.toString().toLowerCase().includes(keyword.toLowerCase())) {
      return (
        item?.x_name
      )
    }
  }

  

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">


        {/* keyword */}
        <li className="list-inline-item keywordInput">
          {/* <div className="form-group" >
            <input
              type="text"
              className="form-control desktopInputs"
              style={{width: '100%'}}
              placeholder="أدخل كلمة للبحث"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div> */}


          <div className="candidate_revew_select">
           
            <input 
            type="text"
            className="form-control desktopInputs"
            style={{width: '100%'}}
            placeholder="أدخل كلمة للبحث"
            onChange={(e) =>{setKeyword(e.target.value);setComplete(true)} }
            value={keyword}
            />
              {complete && keyword !== "" &&
              data?.filter?.(keywordHandler)?.map((item)=>(
              <>
                <option className='cursorpointer ' onClick={()=>{setKeyword(item?.x_name); setComplete(false)}} key={item?.id} value={item?.x_name}>{item?.x_name}</option>
              </>
              ))}
          
            </div>
        </li>
     

        {/* type */}
        <li className="list-inline-item selectionInputs">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select 
              value={type}
              onChange={(e) => setType(e.target.value)} 
              className="selectpicker  form-select show-tick desktopInputs">
                <option value="">نوع العقار</option>
                <option value="شقق">شقق</option>
                <option value="شقق طابقية">شقق طابقية</option>
                <option value="فلل متلاصقة">فلل متلاصقة</option>
                <option value="فلل">فلل</option>
                <option value="قطع أراضي سكني">قطع أراضي سكنية</option>
                {/* <option value="قطع أراضي تجاري">قطع أراضي تجارية</option> */}
                {/* <option value="قطع أراضي صناعي">قطع أراضي صناعية</option> */}
                <option value="برج سكني">برج سكني</option>
                <option value="استوديوهات">استوديوهات</option>
                <option value="شاليهات">شاليهات</option>
                <option value="مشاريع قطع أراضي">مشاريع قطع أراضي</option>
                <option value="مشاريع قيد الإنشاء">مشاريع قيد الإنشاء</option>
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
              className="selectpicker  show-tick form-select desktopInputs"
            >
              <option value="">الموقع</option>
              {
              citiesOptions?.map((item)=>(
              <>
                <option key={item?.id} value={item?.x_name}>{item?.x_name}</option>
                </>
              ))}
            </select>
            </div>
          </div>
        </li>
        
   

{pageRoute? <>
  {/* bedrooms */}
  <li className=" list-inline-item" style={{marginBottom: "10px"}}>
        <div className="form-group selectpicker">
          <input
          value={bedrooms}
            type="number"
            className="form-control desktopInputs"
            placeholder="غرف النوم"
            onChange={(e) => setBedrooms(e.target.value)}
          />
        </div>
      </li>


     {/* bathrooms */}
     <li className=" list-inline-item">
        <div className="form-group selectpicker">
          <input
          value={bathrooms}
            type="number"
            className="form-control desktopInputs"
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
            className="form-control desktopInputs"
            placeholder=" الكراجات"
            onChange={(e) => setGarages(e.target.value)}
          />
        </div>
      </li>


       {/* area range */}
     {/* <li className=" list-inline-item">
        <div className="form-group ">
          <input
          value={minArea}
            type="number"
            className="form-control desktopInputs"
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
            className="form-control desktopInputs"
            id="exampleInputName3"
            placeholder=" أكبر مساحة"
            onChange={(e) => setMaxArea(e.target.value)}
          />
        </div>
      </li> */}
      <li className="list-inline-item ml-6" style={{marginLeft: "8px"}}>
          <div className="form-group">
            <div className="candidate_revew_select">
              <select 
              onChange={(e) => {setMaxArea(e.target.value); setMinArea(e.target.value - 100)}} 
              className="selectpicker form-select show-tick desktopInputs">
                <option value="">المساحة</option>
                <option value="100">50 - 100</option>
                <option value="200">100 - 200</option>
                <option value="300">200 - 300</option>
                <option value="400">300 - 400</option>
                <option value="500">400 - 500</option>
                <option value="600">500 وأكثر</option>
               
              </select>
            </div>
          </div>
        </li>
</>
:
<></>
}

     {/* price range */}
     {/* <li className=" list-inline-item">
        <div className="form-group ">
          <input
          value={minPrice}
            type="number"
            className="form-control desktopInputs"
            placeholder="اقل سعر"
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
      </li>

      <li className="list-inline-item lastInput">
        <div className="form-group">
          <input
          value={maxPrice}
            type="number"
            className="form-control desktopInputs"
            id="exampleInputName3"
            placeholder="أعلى سعر"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </li> */}

<li className="list-inline-item ml-6" style={{marginLeft: "8px"}}>
          <div className="form-group">
            <div className="candidate_revew_select">
              <select 
              value={type}
              onChange={(e) => {setMaxPrice(e.target.value); setMinPrice(e.target.value - 100000)}} 
              className="selectpicker form-select show-tick desktopInputs">
                <option value="">السعر</option>
                <option value="100000">50,000 - 100,000</option>
                <option value="200000">100,000 - 200,000</option>
                <option value="300000">200,000 - 300,000</option>
                <option value="400000">300,000 - 400,000</option>
                <option value="500000">400,000 - 500,000</option>
                <option value="600000">500,000 - 600,000</option>
                <option value="700000">600,000 - 700,000</option>
                <option value="800000">700,000 - 800,000</option>
                <option value="900000">800,000 - 900,000</option>
                <option value="1000000">900,000 - 1,000,000</option>
                <option value="5000000">1,000,000 وأكثر</option>
              </select>
            </div>
          </div>
        </li>
       



      {/* <li className="custome_fields_520 list-inline-item"></li> */}



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
