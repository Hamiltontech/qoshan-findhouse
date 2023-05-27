import Link from "next/link";
import MobileMenuContent from "./MobileMenuContent";

const MobileMenu = () => {
  return (
    <div className="stylehome1 h0 mega-menu-wrapper" >
      <div className="mobile-menu">
        <div className="header stylehome1" >
          <div className="main_logo_home2 text-center">
            <div className="d-flex align-items-center justify-content-between">
              
              <img
                className="nav_logo_img img-fluid mt20"
                src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1685212478/header-logo2_bawqi1_1_-svg_j6fhp4.webp"
                alt="header-logo2.svg"
                width={250}

              />
           
            </div>
          </div>

          <ul className="menu_bar_home2"  style={{color: 'white'}}>
            <li
              className="list-inline-item mt10"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
            >
              <a>
                <span>القائمة</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
        data-bs-scroll="true"
      >
        <MobileMenuContent />
      </div>
    </div>
  );
};

export default MobileMenu;
