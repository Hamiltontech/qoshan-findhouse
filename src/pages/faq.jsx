import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Faq from "../components/faq";

const index = () => {
  return (
    <>
      <Seo pageTitle="أعلن عن عقارك" />
      <Faq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
