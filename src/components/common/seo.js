import Head from "next/head";

const Seo = ({ pageTitle, font, pageContent }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} | مستشارك العقاري`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content=""
      />
      <meta
        name="description"
        content={pageContent && `${pageContent} | مستشارك العقاري`}
      />
      <meta name="قوشان" content="ATFN" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="https://res.cloudinary.com/dhk7qsnfv/image/upload/v1684260281/favicon_uyc0cn.ico" />
    </Head>
  </>
);

export default Seo;
