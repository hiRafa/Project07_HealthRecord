import React, { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout-units/SectionContainer";
import classes from "./Consult.module.css";
import CalendarAll from "../layout-units/CalendarAll";

const FacilitiesList = (props) => {
  const { facility } = props;
  const facilSpecialistRef = useRef();
  // console.log(facility);
  // console.log(facility.consult);
  let consultsArr;
  // if (typeof facility.consult !== undefined) {
  //   consultsArr = facility.consult
  //     .split(",")
  //     .map((consultOption) => <option>{consultOption}</option>);
  // }
  consultsArr = facility.speciality?.split(", ");
  for (let i = 0; i < consultsArr.length; i++) {
    consultsArr[i] =
      consultsArr[i].charAt(0).toUpperCase() + consultsArr[i].slice(1);
  }

  // Round the star rating value to the nearest half-star
  const roundedRating = Math.round(facility.review * 2) / 2;
  console.log(roundedRating);

  // Create a string to store the HTML for the star icons
  const stars = [];

  // Loop through each star and push the appropriate JSX element based on the rounded rating value
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(
        <i key={i} className="material-symbols-outlined">
          star
        </i>
      ); // Full star
    } else if (i - 0.5 <= roundedRating) {
      stars.push(
        <i key={i} className="material-symbols-outlined">
          star_half
        </i>
      ); // Half star
    } else {
      stars.push(
        <i key={i} className="material-symbols-outlined star-outline">
          grade
        </i>
      ); // Empty star
    }
  }

  return (
    <SectionContainer className={` ${classes.consult_cardContainer} glass_bg`}>
      <form
        className={` ${classes.consult_cardGrid} flex_column_mobile`}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={`${classes.pro_info} `}>
          {facility.photo ? (
            <div className={`flex_start `}>
              <div className={`${classes.imgdiv}`}>
                <img src={facility.photo} />
              </div>
              <div className={classes.infodiv}>
                <h2 className={classes.info_title}>{facility.name}</h2>
                <h3>
                  {facility.speciality.charAt(0).toUpperCase() +
                    facility.speciality.slice(1)}
                </h3>
                <div className={`${classes.starsContainer}`}>{stars}</div>
              </div>
            </div>
          ) : (
            <Fragment>
              <h2 className={classes.info_title}>{facility.name}</h2>
              <p>{`${facility.country}, ${facility.city}`}</p>
              {facility.maps && (
                <a
                  href={facility.maps}
                  className={`${classes.facility_maps}`}
                  target="_blank"
                >
                  Address: Maps
                </a>
              )}
              <div className={`${classes.starsContainer}`}>{stars}</div>
            </Fragment>
          )}

          {facility.photo && (
            <Fragment>
              <p>Online sessions: {facility.online === true ? `yes` : `no`}</p>
              {facility.website && (
                <a
                  href={facility.website}
                  target="_blank"
                  className={`${classes.facility_maps}`}
                >
                  My page
                </a>
              )}
              {facility.email && (
                <a
                  target="_blank"
                  href={`mailto:${facility.email}`}
                  className={`${classes.facility_maps}`}
                >
                  {facility.email}
                </a>
              )}
            </Fragment>
          )}
          <select
            className={` ${classes.facility_select} `}
            ref={facilSpecialistRef}
          >
            {consultsArr.map((consultOption) => (
              <option>{consultOption}</option>
            ))}
          </select>
        </div>
        <CalendarAll
          facilityMinHr={facility.openHour}
          facilityMaxHr={facility.closeHour}
          facilityClosedDays={facility.closedDays}
          facilityClosedDaysEmergency={facility.closedDaysEmergency}
          facilSpecialistRef={facilSpecialistRef}
          facility={facility}
          profOpenHours={facility.openHours}
        />
      </form>
    </SectionContainer>
  );
};

export default FacilitiesList;
