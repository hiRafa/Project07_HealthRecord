import Image from "next/image";
import React, { Fragment, useState } from "react";
import classes from "./Home.module.css";

const SectionFeaturedArticles = ({ featuredArticles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const formatedText = (text) => {
    return `${text.substring(0, 500)}...`;
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  console.log(currentIndex);

  const containerIcons = featuredArticles.map((article, iconIndex) => (
    <span
      key={iconIndex}
      className={`material-symbols-outlined ${classes.slider_icon} ${
        currentIndex === iconIndex && classes.iconActive
      }`}
      onClick={() => goToSlide(iconIndex)}
    >
      medical_services
    </span>
  ));

  // console.log(articles[0].key);
  // console.log(articles.length);

  return (
    <section className={`section  ${classes.featured}`}>
      <div className={`section_container flex_column ${classes.featured_in}`}>
        <h2>Featured Health Articles</h2>
        {featuredArticles.map((article, articleIndex) => (
          <Fragment>
            <div className={`${classes.featured_in_imgdiv}`}>
              <img
                src={article.image}
                className={`${classes.featured_in_img}  ${
                  currentIndex === articleIndex && classes.featured_in_imgActive
                }`}
              />
            </div>
            <article
              className={`flex_center flex_column   
      ${classes.featured_slide} 
      ${currentIndex === articleIndex && classes.slideActive}`}
              key={articleIndex}
            >
              <h3 className={` ${classes.slide_title}`}>{article.title}</h3>
              <div
                className={`flex_center flex_column_mobile ${classes.slide_body}`}
              >
                <div className={`${classes.body_imgdiv}`}>
                  <img src={article.image} className={`${classes.body_img}`} />
                </div>
                <p className={`${classes.body_p}`}>
                  {formatedText(article.text)}
                </p>
              </div>
              <div className={`flex_center ${classes.slide_by}`}>
                <p>{article.author}</p>
                <img
                  src={article.photo}
                  className={`flex_center ${classes.by_img}`}
                />
              </div>
            </article>
          </Fragment>
        ))}

        <div className={`flex_center ${classes.slider_iconContainer}`}>
          {containerIcons}
        </div>
      </div>
    </section>
  );
};

export default SectionFeaturedArticles;
