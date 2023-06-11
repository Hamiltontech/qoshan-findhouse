import Link from "next/link";
import comfortPlace from "../../data/comfortPlace";
import { useState } from "react";

const CategoriesCards = () => {
const [keyword, setKeyword] = useState("")

  return (
    <>
     <div className="col-sm-6 col-lg-3" >
          <Link  href={{
              pathname: "all-properties",
              query: {
                  type: "مشاريع قيد الإنشاء",
              }
          }}>
            <a
              className="icon_hvr_img_box image-1 d-block"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1627734633024-867b54f26e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80)`,
              }}
            >
              <div className="overlay">
                <div className="icon">
                  <span style={{color: 'white'}} className="flaticon-house"></span>
                </div>
                <div className="details">
                  <h4 style={{color: 'white'}}>مشاريع قيد الانشاء</h4>
                  
                </div>
              </div>
            </a>
          </Link>
        </div>


        {/* 2 */}
        <div className="col-sm-6 col-lg-3" >
          <Link  href={{
              pathname: "all-properties",
              query: {
                  type: "مشاريع قطع أراضي",
              }
          }}>
            <a
              className="icon_hvr_img_box image-1 d-block"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1627734383554-89f43900d379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60)`,
              }}
            >
              <div className="overlay">
                <div className="icon">
                  <span style={{color: 'white'}} className="flaticon-house-1"></span>
                </div>
                <div className="details">
                  <h4 style={{color: 'white'}}>مشاريع قطع اراضي</h4>
                  
                </div>
              </div>
            </a>
          </Link>
        </div>


        <div className="col-sm-6 col-lg-3" >
          <Link  href={{
              pathname: "all-properties",
              query: {
                  type: "فلل",
              }
          }}>
            <a
              className="icon_hvr_img_box image-1 d-block"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1627734383978-627095b4ac05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80)`,
              }}
            >
              <div className="overlay">
                <div className="icon">
                  <span style={{color: 'white'}} className="flaticon-house-2"></span>
                </div>
                <div className="details">
                  <h4 style={{color: 'white'}}>فلل مستقلة</h4>
                  
                </div>
              </div>
            </a>
          </Link>
        </div>

        <div className="col-sm-6 col-lg-3">
          <Link  href={{
              pathname: "all-properties",
              query: {
                  type: "شقق طابقية",
              }
          }}>
            <a
              className="icon_hvr_img_box image-1 d-block"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1604157886233-08985afc49e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)`,
              }}
            >
              <div className="overlay">
                <div className="icon">
                  <span style={{color: 'white'}} className="flaticon-building"></span>
                </div>
                <div className="details">
                  <h4 style={{color: 'white'}}>شقق طابقية</h4>
                  
                </div>
              </div>
            </a>
          </Link>
        </div>
   
    </>
  );
};

export default CategoriesCards;
