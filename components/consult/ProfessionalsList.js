import React, { Fragment, useState } from "react";
import SectionContainer from "../layout-units/SectionContainer";
import classes from "./Consult.module.css";
import CalendarAll from "../layout-units/CalendarAll";

const ProfessionalsList = ({ professional }) => {
  const { photo, name, speciality, review, online, website, email } =
    professional;
  // console.log(professional);

  return (
    <SectionContainer className={`${classes.consult_cardContainer} glass_bg `}>
      <div className={` ${classes.consult_cardGrid} flex_column_mobile`}>
        <div className={classes.pro_info}>
          {/* <div className={` flex_center ${classes.info_title}`}> */}
          <div className={` ${classes.imgdiv}`}>
            <img src={photo} />
          </div>
          <h2>{name}</h2>
          {/* </div> */}
          <h3>{speciality}</h3>
          <p>{review}</p>
          <p>Online sessions: {online === true ? `yes` : `no`}</p>
          {website && (
            <a
              href={website}
              target="_blank"
              className={`${classes.facility_maps}`}
            >
              My page
            </a>
          )}
          {email && (
            <a target="_blank" className={`${classes.facility_maps}`}>
              {email}
            </a>
          )}
        </div>
        <CalendarAll
          profOpenHours={professional.openHours}
          professional={professional}
        />
      </div>
    </SectionContainer>
  );
};

export default ProfessionalsList;
