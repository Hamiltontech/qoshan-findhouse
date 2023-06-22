import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderMenuContent from "./HeaderMenuContent";
import Head from 'next/head'

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
    <>
    <Head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-MH0Z854NRN"></script> 
    <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)} gtag('js', new Date()); gtag('config', 'G-MH0Z854NRN')</script>

    <script>!function(f,b,e,v,n,t,s)if(f.fbq)return;n=f.fbq=function(){n.callMethod?

n.callMethod.apply(n,arguments):n.queue.push(arguments)};

if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';

n.queue=[];t=b.createElement(e);t.async=!0;

t.src=v;s=b.getElementsByTagName(e)[0];

s.parentNode.insertBefore(t,s)(window, document,'script',

'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '828828338858951');

fbq('track', 'PageView');

</script>

<noscript><img height="1" width="1" style="display:none"

src="https://www.facebook.com/tr?id=828828338858951&ev=PageView&noscript=1"

/></noscript>
      </Head>
    <header
      className={`header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">
        {/* <!-- Menu Toggle btn--> */}
        <Link href="/">
          <a className="navbar_brand float-start dn-smd">
            <img
              className="logo1 img-fluid"
              src="/assets/images/logo-mob.svg"
              alt="header-logo2.svg"
            />
            <img
              className="logo2 img-fluid"
              src="/assets/images/logo-mob.svg"
              alt="header-logo2.svg"
            />
 
          </a>
        </Link>
        {/* site logo brand */}

        <nav>
          <HeaderMenuContent />
        </nav>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
    </>
  );
};

export default Header;
