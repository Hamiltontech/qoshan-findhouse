import { Provider } from "react-redux";
import { store } from "../app/store";
import ScrollToTop from "../components/common/ScrollTop";
import Seo from "../components/common/seo";
import "../index.scss";
import Script from "next/script"

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Script
     id="my-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script
      id="google-analytics"
      strategy="lazyOnload">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
                });
            `}
      </Script>

      <Seo
        font={
          "https://fonts.googleapis.com/css2?family=Changa:wght@200;300;400;500;600;700;800&display=swap"
        }
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      <ScrollToTop />
    </>
  );
}

export default MyApp;
