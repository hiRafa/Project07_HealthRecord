import React, { Fragment } from "react";
import ButtonAll from "../layout-units/ButtonAll";
import SectionContainer from "../layout-units/SectionContainer";
import classes from "./Publications.module.css";

const PublicationsDetails = ({ id, author, image, photo, text, title }) => {
  if (id.includes("st")) {
    return (
      <Fragment>
        <div
          className={`section_container flex_column ${classes.pub_details_container}`}
        >
          <section
            className={`flex_center flex_column ${classes.pub_details_top}`}
          >
            <h1>{title}</h1>
          </section>

          <section className={`flex_column ${classes.pub_details_body}`}>
            <div className={`flex_center ${classes.details_body_by}`}>
              <p>{author}</p>
              <img src={`${photo}`} />
            </div>
            <p>{text}</p>
            <ButtonAll href="/publicationslist" text={"Show all events"} />
          </section>
        </div>
      </Fragment>
    );
  }

  // -------------- ARTICLES PUBLICATIONS
  return (
    <Fragment>
      <div
        className={`section_container flex_column ${classes.pub_details_container}`}
      >
        <section
          className={`flex_center flex_column ${classes.pub_details_top}`}
        >
          <h1>{title}</h1>
          <img src={image} className={`${classes.details_top_img}`} />
        </section>

        <section className={`flex_column ${classes.pub_details_body}`}>
          <div className={`flex_center ${classes.details_body_by}`}>
            <p>{author}</p>
            <img src={`${photo}`} />
          </div>
          <p>{text}</p>
          <ButtonAll href="/publicationslist" text={"Show all events"} />
        </section>
      </div>
    </Fragment>
  );
};

export default PublicationsDetails;
