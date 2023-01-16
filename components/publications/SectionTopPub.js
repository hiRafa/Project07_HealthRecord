import React, { Fragment } from "react";
import classes from "./Publications.module.css";

import ButtonAll from "../layout-units/ButtonAll";
import FilterYearMonth from "../layout-units/FilterYearMonth";
import SectionContainer from "../layout-units/SectionContainer";

const SectionTopPub = ({ humanReadableDate }) => {
  if (humanReadableDate) {
    return (
      <SectionContainer
        className={` flex_center flex_column ${classes.section_top}`}
      >
        <h1>Publications </h1>
        <p>{`Publications found for ${humanReadableDate}`}</p>
        <FilterYearMonth />
        <ButtonAll href="/publicationslist" text={"Show all events"} />
      </SectionContainer>
    );
  } else {
    return (
      <SectionContainer
        className={` flex_center flex_column ${classes.section_top}`}
      >
        <h1>
          Find amazing articles written by our specialists and interesting
          stories from our users
        </h1>
        <FilterYearMonth />
      </SectionContainer>
    );
  }
};

export default SectionTopPub;
