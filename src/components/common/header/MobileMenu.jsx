import Link from "next/link";
import MobileMenuContent from "./MobileMenuContent";

const MobileMenu = () => {
  return (
    <div className="stylehome1 h0 mega-menu-wrapper">
      <div className="mobile-menu">
        <div className="header stylehome1" style={{backgroundColor: 404041,}}>
          <div className="main_logo_home2 text-center">
            <div className="d-flex align-items-center justify-content-between">
              
              <img
                className="nav_logo_img img-fluid mt20"
                src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684257816/header-logo2_bawqi1.svg"
                alt="header-logo2.svg"
                width={100}

              />
            <img
                className="nav_logo_img img-fluid mt20 ml10"
                style={{marginRight: 50,}}
                src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684257815/winner-land_jm56zk.webp"
                alt="header-logo2.svg"
                width={130}
              />
            </div>
          </div>

          <ul className="menu_bar_home2">
            <li
              className="list-inline-item mt10"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
            >
              <a>
                <span></span>
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
