import React, { Fragment } from "react";
import classes from "./Home.module.css";

const SectionTop = ({ children }) => {
  return (
    <section className={classes.top}>
      <svg
        class={classes.waves}
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={classes.parallax}>
          <use href="#gentle-wave" x="48" y="0" className={classes.wave1} />
          <use href="#gentle-wave" x="48" y="3" className={classes.wave2} />
          <use href="#gentle-wave" x="48" y="5" className={classes.wave3} />
          <use href="#gentle-wave" x="48" y="7" className={classes.wave4} />
        </g>
      </svg>
      {children}
    </section>
  );
};

export default SectionTop;
