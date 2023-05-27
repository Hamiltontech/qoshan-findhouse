import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import AboutUs from "../components/about-us";

const index = () => {
  return (
    <>
      <Seo pageTitle="تعرف على قوشان" />
      <AboutUs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
