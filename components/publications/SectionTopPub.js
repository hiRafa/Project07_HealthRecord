import React, { Fragment } from "react";
import classes from "./Publications.module.css";

import ButtonAll from "../layout-units/ButtonAll";
import FilterYearMonth from "../layout-units/FilterYearMonth";
import SectionContainer from "../layout-units/SectionContainer";
import SectionTop from "../layout/SectionTop";

const SectionTopPub = ({ filterDateFormated }) => {
  if (filterDateFormated) {
    return (
      <SectionTop className={` flex_center flex_column ${classes.section_top}`}>
        <h1>Publications </h1>
        <p>{`Publications found for ${filterDateFormated}`}</p>
        <FilterYearMonth />
        <ButtonAll href="/publicationslist" text={"Show all events"} />
      </SectionTop>
    );
  } else {
    return (
      <SectionTop className={` flex_center flex_column ${classes.section_top}`}>
        <h1>
          Find amazing articles written by our specialists and interesting
          stories from our users
        </h1>
        <FilterYearMonth />
      </SectionTop>
    );
  }
};

export default SectionTopPub;
