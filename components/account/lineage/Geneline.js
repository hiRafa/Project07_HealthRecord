import React from "react";
import classes from "./Lineage.module.css";
import { SplideTrack, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

const Geneline = () => {
  return (
    <div className={`${classes.tree} `}>
      <div className={`${classes.grandpsMom} flex_center`}>
        <div className={`${classes.familyMember} `}>
          <img className={`${classes.photo}`} />
          <h4>Name Name</h4>
        </div>
        <div className={`${classes.familyMember} `}>
          <img className={`${classes.photo}`} />
          <h4>Name Name</h4>
        </div>
      </div>

      <div className={`${classes.grandpsDad} flex_center`}>
        <div className={`${classes.familyMember} `}>
          <img className={`${classes.photo}`} />
          <h4>Name Name</h4>
        </div>
        <div className={`${classes.familyMember} `}>
          <img className={`${classes.photo}`} />
          <h4>Name Name</h4>
        </div>
      </div>

      <div className={`${classes.mom} ${classes.familyMember}`}>
        <img className={`${classes.photo}`} />
        <h4>Name Name</h4>
      </div>

      <div className={`${classes.dad} ${classes.familyMember}`}>
        <img className={`${classes.photo}`} />
        <h4>Name Name</h4>
      </div>

      <div className={`${classes.me} `}>
        <div className={`${classes.familyMember} `}>
          <img className={`${classes.photo}`} />
          <h4>Me Me</h4>
        </div>
      </div>

      <div className={`${classes.children} `}>
        <div className={`${classes.familyMember} `}>
          <img className={`${classes.photo}`} />
          <h4>Name Name</h4>
        </div>
      </div>

      <div className={`${classes.grandchildren} `}>
        <div className={`${classes.familyMember} `}>
          <img className={`${classes.photo}`} />
          <h4>Name Name</h4>
        </div>
      </div>

      <Splide
        hasTrack={false}
        aria-label="..."
        options={{
          rewind: true,
          gap: "1rem",
          perPage: 3,
        }}
        className={classes.splideCSS}
      >
        <div className={`${classes.splideIn} `}>
          <SplideTrack>
            <SplideSlide className={classes.splideSlideCSS}>
              <img
                src="/bg_dnatree.png"
                alt="Image 1"
                class={`${classes.photo}`}
              />
            </SplideSlide>
            <SplideSlide className={classes.splideSlideCSS}>
              <img src="/water.jpg" alt="Image 2" class={`${classes.photo}`} />
            </SplideSlide>
            <SplideSlide className={classes.splideSlideCSS}>
              <img
                src="/branch-308647.png"
                alt="Image 1"
                class={`${classes.photo}`}
              />
            </SplideSlide>
            <SplideSlide className={classes.splideSlideCSS}>
              <img
                src="/bg_dnatree.png"
                alt="Image 2"
                class={`${classes.photo}`}
              />
            </SplideSlide>
            <SplideSlide className={classes.splideSlideCSS}>
              <img src="/bg_dna.jpg" alt="Image 1" class={`${classes.photo}`} />
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows flex_center">
            <button className="splide__arrow splide__arrow--prev">Prev</button>
            <button className="splide__arrow splide__arrow--next">Next</button>
          </div>
        </div>
      </Splide>
    </div>
  );
};

export default Geneline;
