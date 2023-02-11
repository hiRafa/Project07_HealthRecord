import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./Home.module.css";

import modalCtxt from "../../contexts/modal-context";
import ButtonAll from "../layout-units/ButtonAll";

const SectionStories = ({ userStories }) => {
  const cardsContainerRef = useRef();
  // scrolling cards container div
  const [scrollLeftIsZero, setScrollLeftIsZero] = useState();
  const [scrollRightMax, setScrollRightMax] = useState();
  useEffect(() => {
    cardsContainerRef.current.scrollLeft === 0 && setScrollLeftIsZero(true);
    cardsContainerRef.current.scrollLeft > 0 && setScrollLeftIsZero(false);
    cardsContainerRef.current.scrollLeft ===
      cardsContainerRef.current.scrollLeftMax && setScrollRightMax(true);
    cardsContainerRef.current.scrollLeft <
      cardsContainerRef.current.scrollLeftMax && setScrollRightMax(false);
  }, []);
  // useEffect setting the initial state for each depending on the condition met only once.
  // then the state is updated according to the buttons below

  const scrollLeft = () => {
    // let x = cardsContainerRef.current.scrollLeft - amount;
    let x = cardsContainerRef.current.scrollLeftMax / 5;
    let z = cardsContainerRef.current.scrollLeft - x;
    let y = cardsContainerRef.current.scrollLeftMax;
    cardsContainerRef.current.scrollTo({ left: z, behavior: "smooth" });
    if (z === 0 || z < 0) setScrollLeftIsZero(true);
    x < y && setScrollRightMax(false);
  };

  const scrollRight = () => {
    // let x = cardsContainerRef.current.scrollLeft + amount;
    let x = cardsContainerRef.current.scrollLeftMax / 5;
    let z = cardsContainerRef.current.scrollLeft + x;
    let y = cardsContainerRef.current.scrollLeftMax;
    cardsContainerRef.current.scrollTo({ left: z, behavior: "smooth" });
    x !== 0 && setScrollLeftIsZero(false);
    if (z === y || z > y) setScrollRightMax(true);
  };

  // list of items
  const { openModalHandler, modalIsOpen } = modalCtxt();
  console.log(openModalHandler);
  const userStory = userStories.map((story) => (
    <li
      onClick={openModalHandler}
      className={` ${classes.storyCard}`}
      key={story.id}
    >
      <div className={`flex_column ${classes.storyCard_in}`}>
        <img alt="something" src={story.photo} width={80} height={80} />
        <h3>{story.title}</h3>
        <p>{story.text}</p>
        <ButtonAll
          href={`/publicationslist/stories/${story.id}`}
          text={`Read More`}
        />
      </div>
    </li>
  ));

  return (
    <section className={`${classes.section_stories}`}>
      <h2 className={`${classes.stories_h2} glass_bg`}>
        Check out the stories users are sharing with us!
      </h2>
      <ul
        className={`flex_center ${classes.stories_cardsContainer}`}
        ref={cardsContainerRef}
      >
        {userStory}
      </ul>
      <div className={`flex_center ${classes.stories_buttons}`}>
        <span
          onClick={() => scrollLeft()}
          className={`material-symbols-outlined ${classes.button_icon_left}  ${
            scrollLeftIsZero && classes.button_inactive
          }`}
        >
          input
        </span>
        <span
          onClick={() => scrollRight()}
          className={`material-symbols-outlined  ${
            scrollRightMax && classes.button_inactive
          }`}
        >
          input
        </span>
      </div>
    </section>
  );
};

export default SectionStories;
