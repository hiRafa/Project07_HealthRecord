import React from "react";
import Waves from "../layout-units/Waves";
import classes from "./Layout.module.css";

const SectionTop = ({ children }) => {
  return (
    <section className={classes.section_top}>
      <Waves />
      {children}
    </section>
  );
};

export default SectionTop;
