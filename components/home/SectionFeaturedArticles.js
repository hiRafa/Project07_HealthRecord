import Image from "next/image";
import React from "react";
import classes from "./Home.module.css";

const SectionFeaturedArticles = () => {
  return (
    <section className={`section  ${classes.featured}`}>
      <h2>Featured Health Articles</h2>
      <article
        className={`flex_center flex_column section_container  ${classes.featured_slide}`}
      >
        <h3 className={` ${classes.slide_title}`}>Is water enough?</h3>
        <div className={`flex_column_mobile ${classes.slide_body}`}>
          <Image
            src="/water.jpg"
            className={`${classes.body_img}`}
            width={200}
            height={100}
          />
          <p className={`${classes.body_p}`}>
            Water (chemical formula H2O) is an inorganic, transparent,
            tasteless, odorless, and nearly colorless chemical substance, which
            is the main constituent of Earth's hydrosphere and the fluids of all
            known living organisms (in which it acts as a solvent[1]). It is
            vital for all known forms of life, despite providing neither food,
            energy, nor organic micronutrients. Its chemical formula, H2O,
            indicates that each of its molecules contains one oxygen and two
            hydrogen atoms, connected by covalent bonds. The hydrogen atoms are
            attached to the oxygen atom at an angle of 104.45°.[2] "Water" is
            also the name of the liquid state of ...
          </p>
        </div>
        <div className={`flex_center ${classes.slide_by}`}>
          <p>Heliol Faria, Nutrologist</p>
          <Image
            src="/water.jpg"
            width={80}
            height={80}
            className={`flex_center ${classes.by_img}`}
          />
        </div>
      </article>
    </section>
  );
};

export default SectionFeaturedArticles;
