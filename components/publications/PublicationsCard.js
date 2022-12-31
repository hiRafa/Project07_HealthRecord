import React from "react";

import classes from "./Publications.module.css";
import { formatDate, formatText300 } from "../../helpers/general-helper";
import Link from "next/link";

const PublicationsCard = ({ id, title, date, text, image, photo, author }) => {
  // -------------- STORY PUBLICATIONS
  const linkStory = `/publicationslist/stories/${id}`;

  if (id.includes("st")) {
    return (
      <li key={id} className={`${classes.publications_card}`}>
        <Link href={linkStory}>
          <div className={`flex_center ${classes.card_by}`}>
            <div>
              <h2>{title}</h2>
              <p>{author}</p>
            </div>
            <img src={photo} className={classes.card_by_photo} />
          </div>
          <p>{formatText300(text)}</p>
          <p className={` ${classes.card_date}`}>{formatDate(date)}</p>
        </Link>
      </li>
    );
  }

  // -------------- ARTICLES PUBLICATIONS
  const linkArticle = `/publicationslist/articles/${id}`;

  return (
    <li key={id} className={`${classes.publications_card}`}>
      <Link href={linkArticle}>
        <img src={image} className={`flex_center ${classes.card_img}`} />
        <div className={`flex_center ${classes.card_by}`}>
          <div>
            <h2>{title}</h2>
            <p>{author}</p>
          </div>
          <img src={photo} className={classes.card_by_photo} />
        </div>
        <p>{formatText300(text)}</p>
        <p className={` ${classes.card_date}`}>{formatDate(date)}</p>
      </Link>
    </li>
  );
};

export default PublicationsCard;
