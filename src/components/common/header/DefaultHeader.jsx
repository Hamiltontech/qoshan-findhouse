import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMenuContent from "./HeaderMenuContent";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">

      <nav>
          <HeaderMenuContent />
        </nav>

        {/* <!-- Menu Toggle btn--> */}
        <Link href="/">
          <a className="navbar_brand float-start dn-smd">
            <img
              className="logo1 img-fluid"
              src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684257816/header-logo2_bawqi1.svg"
              alt="header-logo2.svg"
            />
            <img
              className="logo2 img-fluid"
              src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684257815/winner-land_jm56zk.webp"
              alt="header-logo2.svg"
            />
            
          </a>
        </Link>
        {/* site logo brand */}

        
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
