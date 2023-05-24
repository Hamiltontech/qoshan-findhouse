import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import HomeMain from "./home-8"
const index = () => {
  return (
    <>
      <Seo pageTitle="قوشان مستشارك العقاري" />
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
