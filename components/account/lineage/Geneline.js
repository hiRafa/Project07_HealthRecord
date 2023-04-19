import React from "react";
import classes from "./Lineage.module.css";
import { SplideTrack, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

const Geneline = (props) => {
  const userData = props.userData;
  const genelineData = props.userGeneline;
  let familyData = [];
  let childData = [];
  let grandchildData = [];
  if (genelineData) {
    Object.keys(genelineData).forEach((key) => {
      let relationshipFormat = genelineData[key].relationship
        .replace("(", "")
        .replace(")", "");
      console.log(relationshipFormat);
      if (relationshipFormat === "child") {
        childData.push(
          <SplideSlide className={classes.splideChild}>
            <img className={`${classes.photo}`} />
            <h4>{genelineData[key].member}</h4>
            <h5>{genelineData[key].relationship}</h5>
          </SplideSlide>
        );
      } else if (relationshipFormat === "grandchild") {
        grandchildData.push(
          <SplideSlide className={classes.splideChild}>
            <img className={`${classes.photo}`} />
            <h4>{genelineData[key].member}</h4>
            <h5>{genelineData[key].relationship}</h5>
          </SplideSlide>
        );
      } else {
        familyData.push(
          <div
            className={`${classes.familyMember} ${classes[relationshipFormat]}`}
          >
            <img className={`${classes.photo}`} />
            <h4>{genelineData[key].member}</h4>
            <h5>{genelineData[key].relationship}</h5>
          </div>
        );
      }
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
          perPage: 4,
          arrows: false,
          pagination: false,
          breakpoints: {
            768: { perPage: 3 },
          },
        }}
        className={`${classes.familyMember} ${classes.child}`}
      >
        <div className={`${classes.splideIn} `}>
          <SplideTrack>
            {childData}
          </SplideTrack>
        </div>
      </Splide>

      <Splide
        hasTrack={false}
        aria-label="..."
        options={{
          rewind: true,
          perPage: 4,
          arrows: false,
          pagination: false,
          breakpoints: {
            768: { perPage: 3 },
          },
        }}
        className={`${classes.familyMember} ${classes.grandchild}`}
      >
        <div className={`${classes.splideIn} `}>
          <SplideTrack>
            {grandchildData}
            {grandchildData}
            {grandchildData}
            {grandchildData}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  );
};

export default Geneline;
