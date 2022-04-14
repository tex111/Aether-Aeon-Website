import Head from "next/head";

const HeadComponent = (props) => {
  return (
    <Head>
      <title>Aether Aeon - {props.pageName}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
