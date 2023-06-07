import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMenuContent from "../common/header/HeaderMenuContent";
import WhatsAppButton from "./whatsapp";
import axios from "axios";
import Image from "next/image";
import Social from "../common/footer/Social";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [data, setData] = useState({});

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    axios
      .get("/advert.json")
      .then((response) => {
        const res = response.data[0];
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div className="top-header d-flex align-items-center justify-content-between py-2 px-3" style={{ backgroundColor: "#232323" }}>
      <WhatsAppButton />
      <header className={`header-nav menu_style_home_one style2 home8  navbar-scrolltofixed stricky main-menu rtl ${navbar ? "stricky-fixed " : ""}`} style={{ display: "block" }}>
       

        <div className="container-fluid col-lg-12 p-0" style={{marginTop: '10px', marginBottom: '10px'}}>
          {/* site logo brand */}
          <div className="d-flex align-items-center justify-content-between col-lg-12">
            <div className="d-flex align-items-center">
              <Link href="/">
                <a className="me-3">
                  <img className="logo1 img-fluid" src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684257816/header-logo2_bawqi1.svg" alt="header-logo2.svg" style={{ height: 70 }} />
                </a>
              </Link>
              <Link href="/">
                <a className="position-relative" style={{ marginRight: 15, marginLeft: 15 }}>
                  <img className="logo img-fluid winner" src="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684257815/winner-land_jm56zk.webp" alt="header-logo2.svg" style={{ height: 70 }} />
                </a>
              </Link>
            
              <a href={data?.x_studio_advert_url_top} className="position-relative" style={{ marginRight: 15, marginLeft: 15 }}>
                <Image src={data?.x_studio_image_url_top}
                  width={200}
                  height={80}
                />
                </a>

            </div>
            <div className="footer_social_widget col-lg-4 " style={{ fontSize: 18, direction: 'rtl', textAlign: 'left', paddingLeft: "15px" }}>
       <a href="tel:+962796868500">
       <img  src="https://i.imgur.com/z6ADbNq.png" width={150}/></a>
          <Social />
        </div>
          </div>
         
        </div>
        <div className="container-fluid col-lg-12 p-0 text-center" style={{borderTop: '1px solid #c2b49a'}}>
        <nav className="d-flex align-items-center justify-content-center text-center" style={{ flex: 1 }}>
          <strong>
          <HeaderMenuContent />

          </strong>
</nav>
          </div>
      </header>
      
    </div>
    
  );
};

export default Header;
