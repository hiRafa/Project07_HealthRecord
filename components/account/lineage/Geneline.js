import React from "react";
import classes from "./Lineage.module.css";
import { SplideTrack, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

const Geneline = (props) => {
  const userData = props.userData;
  const genelineData = props.userGeneline;
  console.log(genelineData)
  let familyData = [];
  if (genelineData) {
    Object.keys(genelineData).forEach((key) => {
      let relationshipFormat = genelineData[key].relationship
        .replace("(", "")
        .replace(")", "");
      familyData.push(
        <div
          className={`${classes.familyMember} ${classes[relationshipFormat]}`}
        >
          <img className={`${classes.photo}`} />
          <h4>{genelineData[key].member}</h4>
          <h5>{genelineData[key].relationship}</h5>
        </div>
      );
    });
  }
  return (
    <div className={`${classes.tree} `}>
      {familyData}
      <div className={`${classes.familyMember} ${classes.me}`}>
        <img className={`${classes.photo}`} />
        <h4>{userData.fullname}</h4>
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
                className={`${classes.photo}`}
              />
            </SplideSlide>
            <SplideSlide className={classes.splideSlideCSS}>
              <img
                src="/water.jpg"
                alt="Image 2"
                className={`${classes.photo}`}
              />
            </SplideSlide>
            <SplideSlide className={classes.splideSlideCSS}>
              <img
                src="/branch-308647.png"
                alt="Image 1"
                className={`${classes.photo}`}
              />
            </SplideSlide>
            <SplideSlide className={classes.splideSlideCSS}>
              <img
                src="/bg_dnatree.png"
                alt="Image 2"
                className={`${classes.photo}`}
              />
            </SplideSlide>
            <SplideSlide className={classes.splideSlideCSS}>
              <img
                src="/bg_dna.jpg"
                alt="Image 1"
                className={`${classes.photo}`}
              />
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
