import React from "react";

import classes from "./Articles.module.css";
import { formatDate, formatText300 } from "../../helpers/general-helper";

const PublicationsCard = ({ id, title, date, text, image, photo, author }) => {
  // -------------- STORY PUBLICATIONS
  if (id.includes("st")) {
    return (
      <li key={id} className={`flex_column ${classes.publications_card}`}>
        <div className={`flex_center ${classes.card_byStories}`}>
          <h2>{title}</h2>
          <img src={photo} className={classes.card_by_photo} />
        </div>
        <p>{formatDate(date)}</p>
        <p>{formatText300(text)}</p>
      </li>
    );
  }

  // -------------- ARTICLES PUBLICATIONS
  return (
    <li key={id} className={`flex_column ${classes.publications_card}`}>
      <h2>{title}</h2>
      <p>{formatDate(date)}</p>
      <p>{formatText300(text)}</p>
      <img src={image} />
      <div className={`flex_center ${classes.card_by}`}>
        <p>{author}</p>
        <img src={photo} className={classes.card_by_photo} />
      </div>
    </li>
  );
};

export default PublicationsCard;
