import React, { Fragment } from "react";
import classes from "./Articles.module.css";

const StoryDetails = ({ photo, text, title }) => {
  return (
    <Fragment>
      <section className={classes.summary}>
        <h1>{title}</h1>
      </section>

      <section className={classes.logistics}>
        <div className={classes.photo}>
          <img src={`${photo}`} />
        </div>
      </section>

      <section className={classes.storyDetails_content}>
        <p>{text}</p>
      </section>
    </Fragment>
  );
};

export default StoryDetails;
