import Head from "next/head";
import React, { Fragment, useState } from "react";

import PublicationsCard from "../../components/publications/PublicationsCard";
import PublicationsList from "../../components/publications/PublicationsList";

import classes from "../../components/publications/Publications.module.css";

import {
  getFeaturedArticles,
  getUserStories,
} from "../../helpers/firebaseData-helper";
import SectionTop from "../../components/layout/SectionTop";
import HeadCustom from "../../components/layout/HeadCustom";
import { formatText100 } from "../../helpers/general-helper";

export async function getStaticProps(context) {
  //  featuredProductID identifier on file name
  const articles = await getFeaturedArticles();
  const stories = await getUserStories();
  return {
    props: { articles: articles, stories: stories },
    revalidate: 30000, // featuredProduct info changes reupdated every 500 minutes
  };
  // this  connects to the main function props
}

const PublicationsListPage = ({ articles, stories }) => {
  const [showPublications, setShowPublications] = useState(0);

  const allArticlesCards = articles.map((article) => (
    <PublicationsCard
      id={article.id}
      title={article.title}
      date={article.date}
      text={article.text}
      image={article.image}
      photo={article.photo}
      author={article.author}
    />
  ));

  const allStoriesCards = stories.map((story) => (
    <PublicationsCard
      id={story.id}
      title={story.title}
      date={story.date}
      text={story.text}
      photo={story.photo}
    />
  ));

  return (
    <Fragment>
      <HeadCustom
        title={`Health Publications at MyHealthJournal Webapp`}
        description={
          "Track and manage your health records with ease. Track also your family members health state."
        }
      />

      <SectionTop publicationPage={true} />

      <section>
        <nav className={` ${classes.publications_nav} `}>
          <ul className={`flex_center  ${classes.pub_navUL} `}>
            <li
              className={`hoverClass ${classes.pub_navUL_li} ${
                showPublications === 0 && classes.activeLi
              } `}
              onClick={() => {
                setShowPublications(0);
              }}
            >
              All
            </li>
            <li
              className={`hoverClass ${classes.pub_navUL_li} ${
                showPublications === 1 && classes.activeLi
              }`}
              onClick={() => {
                setShowPublications(1);
              }}
            >
              Articles
            </li>
            <li
              className={`hoverClass ${classes.pub_navUL_li} ${
                showPublications === 2 && classes.activeLi
              }`}
              onClick={() => {
                setShowPublications(2);
              }}
            >
              Stories
            </li>
          </ul>
        </nav>
      </section>

      <PublicationsList>
        {showPublications === 0 && allArticlesCards}
        {showPublications === 0 && allStoriesCards}

        {showPublications === 1 && allArticlesCards}

        {showPublications === 2 && allStoriesCards}
      </PublicationsList>
    </Fragment>
  );
};

export default PublicationsListPage;
