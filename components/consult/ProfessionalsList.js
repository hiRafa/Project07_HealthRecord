import React, { Fragment, useState } from "react";
import SectionContainer from "../layout-units/SectionContainer";
import classes from "./Consult.module.css";
import CalendarAll from "../layout-units/CalendarAll";

const ProfessionalsList = ({ professional }) => {
  // console.log(professional);

  return (
    <SectionContainer className={`${classes.consult_cardContainer} glass_bg`}>
      <div className={` ${classes.consult_cardGrid}`}>
        <div className={classes.pro_info}>
          {/* <div className={` flex_center ${classes.info_title}`}> */}
          <div className={` ${classes.imgdiv}`}>
            <img src={professional.photo} />
          </div>
          <h2>{professional.name}</h2>
          {/* </div> */}
          <p>{professional.review}</p>
          <p>Online sessions: {professional.online === true ? `yes` : `no`}</p>
        </div>
        <CalendarAll profOpenHours={professional.openHours} />
      </div>
    </SectionContainer>
  );
};

export default ProfessionalsList;
