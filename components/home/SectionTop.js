import { useSession } from "next-auth/react";
import React, { Fragment } from "react";
import SectionContainer from "../layout-units/SectionContainer";
import AccountAccess from "./AccountAccess";
import classes from "./Home.module.css";

const SectionTop = ({ children }) => {
  const { data: session, status } = useSession();

  return (
    <section className={classes.top}>
      <svg
        className={classes.waves}
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
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
      <SectionContainer className={`flex_center flex_column ${classes.topIn}`}>
        <h1>Welcome to your Medical Records platform at Health Memory</h1>
        <section
          className={`${classes.topIn_body} flex_center flex_column_mobile `}
        >
          <section className={classes.body_intro}>
            <h2>Webapp introduction</h2>
            <p>
              Health Records is your webapplication for registaring and securing
              all of your health records and history and of your family! <br />
              <br />
              On your profile account you can share or print and bring the form
              filled to your local Hospital, Clinics, Pharmacies and others
              places without having to fill the same form over and over! <br />
              <br />
              We also provide a profile to create a genealogy chart, register
              DNA test results, scheduling with health centers*, and even with
              specialists available for online consultation* <br />
            </p>
          </section>
          {!session && <AccountAccess />}
        </section>
      </SectionContainer>
    </section>
  );
};

export default SectionTop;
