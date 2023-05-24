import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Home8 from "../components/home-8/Home8";

const index = () => {
  return (
    <>
      <Seo pageTitle="قوشان" />
      <Home8 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
