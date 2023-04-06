import React from "react";
import Waves from "../layout-units/Waves";
import classes from "./Layout.module.css";
import ConsultTop from "./ConsultTop";
import HomeTop from "./HomeTop";
import PubTop from "./PubTop";

const SectionTop = ({ consultPage, publicationPage, homePage, selectedFilter, selectedDate,children, message }) => {
  return (
    <section className={classes.section_top}>
      <Waves />
      {homePage && <HomeTop />}
      {consultPage && <ConsultTop selectedFilter={selectedFilter} message={message}/>}
      {publicationPage && <PubTop selectedDate={selectedDate} message={message}/>}
      {children}
    </section>
  );
};

export default SectionTop;
