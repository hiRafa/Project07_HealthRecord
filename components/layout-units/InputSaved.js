import React, { Fragment } from "react";
import classes from "./LayoutUnits.module.css";

const InputSaved = ({ label, htmlFor, dummyData, className }) => {
  let userData;
  if (label === "Weight") {
    userData = (
      <p className={`${classes.userData} ${className}`}>{dummyData} Kg</p>
    );
  } else if (label === "Height") {
    userData = (
      <p className={`${classes.userData} ${className}`}>{dummyData} cm</p>
    );
  } else {
    userData = (
      <p className={`${classes.userData} ${className}`}>{dummyData} </p>
    );
  }

  return (
    <Fragment>
      <label htmlFor={htmlFor} className={`${classes.label} ${className}`}>
        {label}
      </label>
      {userData}
    </Fragment>
  );
};

export default InputSaved;
