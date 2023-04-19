import { Fragment } from "react";

import Head from "next/head";
import SectionFeaturedArticles from "../components/home/SectionFeaturedArticles";
import SectionStories from "../components/home/SectionStories";
import SectionTop from "../components/layout/SectionTop";

import {
  getFeaturedArticles,
  getUserStories,
} from "../helpers/firebaseData-helper";
import HeadCustom from "../components/layout/HeadCustom";

export async function getStaticProps() {
  const featuredArticles = await getFeaturedArticles();
  const userStories = await getUserStories();
  return {
    props: {
      featuredArticles: featuredArticles,
      userStories: userStories,
    },
  };
}
export default function HomePage(props) {
  const { featuredArticles, userStories } = props;
  // console.log(props);
  // console.log(featuredArticles);
  // console.log(userStories.length);
  // const { data: session, status } = useSession();

  return (
    <Fragment>
      <HeadCustom />

      <SectionTop homePage={true} />
      <SectionFeaturedArticles featuredArticles={featuredArticles} />
      <SectionStories userStories={userStories} />
    </Fragment>
  );
}
