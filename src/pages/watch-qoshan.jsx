import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Gallery from "../components/gallery";

const index = () => {
  return (
    <>
      <Seo pageTitle="شاهد قوشان" />
      <Gallery />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
