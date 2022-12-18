import Head from "next/head";
import React, { Fragment } from "react";

import { getUserStories, getStoryID } from "../../helpers/firebaseData-helper";

import StoryDetails from "../../../components/publications/StoryDetails";

export async function getStaticPaths() {
  const allStories = await getUserStories();
  const idsForPaths = allStories.map((story) => ({
    params: { storyID: story.id },
    // this  connects to getStaticProps context.params
    // articleID needs to match with the file name
  }));
  return {
    paths: idsForPaths,
    // fallback: "blocking",
    // in case there are more possible urls for [productID] beyond what we just set
    // with idsForPaths
  };
}

export async function getStaticProps(context) {
  //  featuredProductID identifier on file name
  const eachStoryID = context.params.storyID;
  const selectedStory = await getStoryID(eachStoryID);
  return {
    props: { selectedStory: selectedStory },
    revalidate: 30000, // featuredProduct info changes reupdated every 500 minutes
  };
  // this  connects to the main function props
}

const StoryPage = (props) => {
  const story = props.selectedStory;
  console.log(story);
  if (!story) {
    return (
      <div className="center">
        <p>Loading...</p>;
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Story: {story.title}</title>
        <meta name="description" content={story.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryDetails title={story.title} text={story.text} photo={story.photo} />
    </Fragment>
  );
};

export default StoryPage;
