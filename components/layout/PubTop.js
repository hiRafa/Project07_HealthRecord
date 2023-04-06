import React, { Fragment } from "react";

import ButtonAll from "../layout-units/ButtonAll";
import FilterYearMonth from "../publications/FilterYearMonth";
import SectionContainer from "../layout-units/SectionContainer";
import classes from "./Layout.module.css";

const PubTop = ({ selectedDate, message }) => {
  if (selectedDate) {
    return (
      <SectionContainer className={`flex_center flex_column ${classes.topContainer}`}>
        <h1>
          Find amazing articles written by our specialists and interesting
          stories from our users
        </h1>
        <div className={`${classes.topInner} flex_column `}>
          <FilterYearMonth />
          <p>{message}</p>
          <ButtonAll href="/publicationslist" text={"Show all events"} />
        </div>
      </SectionContainer>
    );
  } else {
    return (
      <SectionContainer className={`flex_center flex_column ${classes.topContainer}`}>
        <h1>
          Find amazing articles written by our specialists and interesting
          stories from our users
        </h1>
        <FilterYearMonth />
      </SectionContainer>
    );
  }
};

export default PubTop;
