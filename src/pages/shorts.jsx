import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Service from "../components/service";

const index = () => {
  return (
    <>
      <Seo pageTitle="نصائح عقارية | قوشان تكتوك" />
      <Service />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });


