import Head from "next/head";
import React, { Fragment } from "react";

import {
  getFeaturedArticles,
  getArticleByID,
} from "../../../helpers/firebaseData-helper";

import ArticleDetails from "../../../components/publications/ArticleDetails";

export async function getStaticPaths() {
  const allArticles = await getFeaturedArticles();
  const idsForPaths = allArticles.map((article) => ({
    params: { articleID: article.id },
    // this  connects to getStaticProps context.params
    // articleID needs to match with the file name
  }));
  return {
    paths: idsForPaths,
    fallback: "blocking",
    // in case there are more possible urls for [productID] beyond what we just set
    // with idsForPaths
  };
}

export async function getStaticProps(context) {
  //  featuredProductID identifier on file name
  const eachArticleID = context.params.articleID;
  const selectedArticle = await getArticleByID(eachArticleID);
  return {
    props: { selectedArticle: selectedArticle },
    revalidate: 30000, // featuredProduct info changes reupdated every 500 minutes
  };
  // this  connects to the main function props
}

const ArticlePage = (props) => {
  const article = props.selectedArticle;
  //   console.log(article);
  if (!article) {
    return (
      <div className="center">
        <p>Loading...</p>;
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Article: {article.title}</title>
        <meta name="description" content={article.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleDetails
        title={article.title}
        text={article.text}
        image={article.image}
        photo={article.photo}
        author={article.author}
      />
    </Fragment>
  );
};

export default ArticlePage;
