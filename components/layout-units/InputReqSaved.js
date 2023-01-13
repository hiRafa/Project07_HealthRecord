import React, { Fragment } from "react";
import classes from "./LayoutUnits.module.css";

const InputReqSaved = ({ input, inputConvert }) => {
  const { id, label, htmlFor, className, data } = input;
  let userData;
  if (id === "weight") {
    let weightlbs = +data * 2.2046;
    userData = (
      <div className={`flex_start`}>
        <p className={`flex_start ${classes.userData} ${className}`}>
          {data} Kg &nbsp;/&nbsp;
          {Math.floor(weightlbs)} Lbs
        </p>
      </div>
    );
  } else if (id === "height") {
    let heightFt = +data * 0.032808;
    userData = (
      <div className={`flex_start`}>
        <p className={`flex_start ${classes.userData} ${className}`}>
          {data} cm &nbsp;/&nbsp;
          {heightFt ? Math.floor(heightFt) : null} ft
        </p>
      </div>
    );
  } else {
    userData = <p className={`${classes.userData} ${className}`}>{data} </p>;
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

export default InputReqSaved;
