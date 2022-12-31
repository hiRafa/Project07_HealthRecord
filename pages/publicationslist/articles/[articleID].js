import Head from "next/head";
import React, { Fragment } from "react";

import {
  getFeaturedArticles,
  getArticleByID,
} from "../../../helpers/firebaseData-helper";

import PublicationsDetails from "../../../components/publications/PublicationsDetails";

export async function getStaticPaths() {
  const allArticles = await getFeaturedArticles();
  const idsForPaths = allArticles.map((article) => ({
    params: { articleID: article.id },
  }));
  // this  connects to getStaticProps context.params
  // articleID needs to match with the file name

  return {
    paths: idsForPaths,
    fallback: "blocking",
    // set fallback: "blocking" in case there are more possible urls for [articleID]
    // beyond what we just set with idsForPaths
  };
}

export async function getStaticProps(context) {
  //  featuredProductID identifier on file name
  const eachArticleID = context.params.articleID;
  const selectedArticle = await getArticleByID(eachArticleID);
  return {
    props: { selectedArticle: selectedArticle },
    revalidate: 30000, // featuredProduct info reupdated every 500 minutes
  };
  // this connects to the main function through props
}

const ArticlePage = (props) => {
  const { selectedArticle } = props;
  // console.log(selectedArticle);
  // console.log(eachArticleID);

  if (!selectedArticle) {
    return (
      <div className="center">
        <p>Loading...</p>;
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Article: {selectedArticle.title}</title>
        <meta name="description" content={selectedArticle.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PublicationsDetails
        id={selectedArticle.id}
        title={selectedArticle.title}
        text={selectedArticle.text}
        image={selectedArticle.image}
        photo={selectedArticle.photo}
        author={selectedArticle.author}
      />
    </Fragment>
  );
};

export default ArticlePage;
