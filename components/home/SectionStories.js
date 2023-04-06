import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./Home.module.css";
import { SplideTrack, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import ButtonAll from "../layout-units/ButtonAll";

const SectionStories = ({ userStories }) => {
  // list of items
  const userStory = userStories.map((story) => (
    <SplideSlide
      className={`flex_column ${classes.storyCard}`}
      key={story.id}
    >
      <img alt="something" src={story.photo} width={80} height={80} />
      <h3>{story.title}</h3>
      <p>{story.text}</p>
      <ButtonAll
        href={`/publicationslist/stories/${story.id}`}
        text={`Read More`}
      />
    </SplideSlide>
  ));

  return (
    <section className={`${classes.section_stories}`}>
      <h2 className={`${classes.stories_h2} glass_bg`}>
        Check out the stories users are sharing with us!
      </h2>
      <Splide
        hasTrack={false}
        aria-label="..."
        options={{
          // rewind: true,
          gap: "2rem",
          perPage: 4,
          type: "loop",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          pagination: false,
          breakpoints: {
            1300: {
              perPage: 3,
            },
            1024: {
              perPage: 2,
            },
            540: {
              perPage: 1,
            },
          }
        }}
        className={classes.stories_cardsContainer}
      >
        <div className="custom-wrapper">
          <SplideTrack>{userStory}</SplideTrack>
          {/* <ul class="splide__pagination"></ul> */}
          <div className={`flex_center splide__arrows`}>
            <button className="splide__arrow splide__arrow--prev">Prev</button>
            <button className="splide__arrow splide__arrow--next">Next</button>
          </div>
        </div>
      </Splide>
    </section>
  );
};

export default SectionStories;
