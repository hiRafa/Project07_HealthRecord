import Image from "next/image";
import React from "react";
import classes from "./Home.module.css";

const SectionStories = () => {
  return (
    <section className={`section_container ${classes.section_stories}`}>
      {/* <Image
        src="/bg_grasswave.png"
        layout="fill"
        className={classes.stories_bg}
      /> */}

      <h2>Check out the stories user as sharing with us!</h2>
      <div className={`flex_center ${classes.stories_cards}`}>
        <div className={`flex_column ${classes.storyCard}`}>
          <h3>The day I got rid of bad habits.</h3>
          <p>
            My bad habits lead to late nights endin' alone Conversations with a
            stranger I barely know Swearin' this'll be the last, but it probably
            won't I got nothin' left to lose, or use, or do My bad habits lead
            to wide eyes starin' at space
          </p>
          <Image src="/water.jpg" width={80} height={80} />
        </div>
        <div className={`flex_column ${classes.storyCard}`}>
          <h3>The day I got rid of bad habits.</h3>
          <p>
            My bad habits lead to late nights endin' alone Conversations with a
            stranger I barely know Swearin' this'll be the last, but it probably
            won't I got nothin' left to lose, or use, or do My bad habits lead
            to wide eyes starin' at space
          </p>
          <Image src="/water.jpg" width={80} height={80} />
        </div>
        <div className={`flex_column ${classes.storyCard}`}>
          <h3>The day I got rid of bad habits.</h3>
          <p>
            My bad habits lead to late nights endin' alone Conversations with a
            stranger I barely know Swearin' this'll be the last, but it probably
            won't I got nothin' left to lose, or use, or do My bad habits lead
            to wide eyes starin' at space
          </p>
          <Image src="/water.jpg" width={80} height={80} />
        </div>
      </div>
    </section>
  );
};

export default SectionStories;
