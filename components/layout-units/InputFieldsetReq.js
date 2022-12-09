import React, { useState } from "react";
import classes from "./LayoutUnits.module.css";

const InputFieldsetReq = ({
  reference,
  // referenceYes,
  // referenceNo,
  dummyData,
  classNameLabel,
  classNameInput,
  legend,
  onClick,
  children,
  name,
}) => {

  return (
    <fieldset>
      <legend>
        <h2>{legend}</h2>
      </legend>
      <label htmlFor="no" className={`${classes.label} ${classNameLabel}`}>
        No
      </label>
      <input
        type="radio"
        id="no"
        value="no"
        required
        name={name}
        className={`${classes.input} ${classNameInput}`}
        defaultChecked={dummyData === false && true}
        ref={(el) => (reference.current[0] = el)}
      />
      <label htmlFor="yes" className={`${classes.label} ${classNameLabel}`}>
        Yes
      </label>
      <input
        type="radio"
        id="yes"
        value="yes"
        required
        name={name}
        className={`${classes.input} ${classNameInput}`}
        defaultChecked={dummyData === true && true}
        ref={(el) => (reference.current[1] = el)}
      />
      {children}
    </fieldset>
  );
};

export default InputFieldsetReq;
