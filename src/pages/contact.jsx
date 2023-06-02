import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Contact from "../components/contact";

const index = () => {
  return (
    <>
      <Seo pageTitle="تواصل مع فريق قوشان" />
      <Contact />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
