import React, { useRef, useState } from "react";
import classes from "./LayoutUnits.module.css";

const InputFieldsetReq = ({ input, getDataFromChild, isEditing }) => {
  const { data, name, legend, classNameLabel, classNameInput } = input;
  const inputRefYes = useRef();
  const inputRefNo = useRef();

  return (
    <fieldset className={`${classes.fieldset}`}>
      <legend className={`${classes.fiedlset_legend}`}>
        <h4>{legend}</h4>
      </legend>
      {isEditing ? (
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
            defaultChecked={data === false && true}
            ref={inputRefYes}
            onClick={() => {
              getDataFromChild(name, false);
            }}
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
            defaultChecked={data === true && true}
            ref={inputRefNo}
            onClick={() => {
              getDataFromChild(name, true);
            }}
          />
        </div>
      ) : (
        <p className={`flex_center ${classes.fieldset_option}`}>
          {data === true ? "Yes" : "No"}
        </p>
      )}
    </fieldset>
  );
};

export default InputFieldsetReq;
