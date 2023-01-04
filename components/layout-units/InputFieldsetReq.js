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
    <fieldset className={`${classes.fieldset}`}>
      <legend className={`${classes.fiedlset_legend}`}>
        <h4>{legend}</h4>
      </legend>

      <div className={`flex_center ${classes.fieldset_option}`}>
        <label
          htmlFor="no"
          className={`${classes.option_label} ${classNameLabel}`}
        >
          No
        </label>
        <input
          type="radio"
          id="no"
          value="no"
          required
          name={name}
          className={`${classes.option_input} ${classNameInput}`}
          defaultChecked={dummyData === false && true}
          ref={(el) => (reference.current[0] = el)}
        />

        <label
          htmlFor="yes"
          className={`${classes.option_label} ${classNameLabel}`}
        >
          Yes
        </label>
        <input
          type="radio"
          id="yes"
          value="yes"
          required
          name={name}
          className={`${classes.option_input} ${classNameInput}`}
          defaultChecked={dummyData === true && true}
          ref={(el) => (reference.current[1] = el)}
        />
      </div>
      {children}
    </fieldset>
  );
};

export default InputFieldsetReq;
