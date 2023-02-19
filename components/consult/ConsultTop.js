import React from "react";
import SectionContainer from "../layout-units/SectionContainer";
import classes from "./Consult.module.css";

import FilterConsult from "./FilterConsult";
const ConsultTop = () => {
  return (
    <SectionContainer className={`${classes.consultTop}`}>
      <h1>Find your professional!</h1>
      <p>Below you will find our registered professionals and facilities</p>
      <FilterConsult className={classes.filterConsult} />
    </SectionContainer>
  );
};

export default ConsultTop;
