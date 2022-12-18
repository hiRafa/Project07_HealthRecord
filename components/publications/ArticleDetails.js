import React, { Fragment } from "react";
import classes from "./Articles.module.css";

const ArticleDetails = ({ author, image, photo, text, title }) => {
  return (
    <Fragment>
      <section className={classes.summary}>
        <h1>{title}</h1>
      </section>

      <section className={classes.logistics}>
        <div className={classes.image}>
          <img src={`${image}`} />
        </div>
      </section>

      <section className={classes.articleDetails_content}>
        <p>{text}</p>
      </section>
    </Fragment>
  );
};

export default ArticleDetails;
