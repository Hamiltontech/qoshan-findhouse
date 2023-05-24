import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import GridV3 from "../../components/listing-grid/grid-v3";

const index = () => {
  return (
    <>
      <Seo pageTitle="جميع العقارات" />
      <GridV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
