import Head from 'next/head';

const HeadCustom = ({title, description}) => {
  return (
      <Head>
        <title>{title ? title : "Your MyHealthJournal Webapp"}</title>
        <meta name="description" content={description ? description : "Track and manage your health records with ease. Track also your family members health state."} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title ? title : "Your MyHealthJournal Webapp"} />
        <meta property="og:description" content={description ? description : "Track and manage your health records with ease. Track also your family members health state."} />
        <meta property="og:url" content="https://www.yourwebsite.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.yourwebsite.com/" />
      </Head>
  );
};

export default HeadCustom;