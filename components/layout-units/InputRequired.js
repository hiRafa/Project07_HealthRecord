import React, { Fragment } from "react";
import classes from "./LayoutUnits.module.css";

const InputRequired = (props) => {
  const {
    label,
    htmlFor,
    type,
    id,
    reference,
    dummyData,
    classNameLabel,
    classNameInput,
    onClick,

    select,
    list,
    options,
  } = props;
  const { name, value, checked } = props;

  console.log(dummyData);

  const labelCustom = (
    <label htmlFor={htmlFor} className={`${classes.label} ${classNameLabel}`}>
      {label}
    </label>
  );
  let inputCustom;

  if (list) {
    inputCustom = (
      <Fragment>
        <input
          list={list}
          id={`${list}-list`}
          name={`${list}-list`}
          defaultValue={dummyData ? dummyData : ""}
          required
          ref={reference}
          className={`${classes.input} ${classNameInput}`}
        />
        <datalist id={list}>
          {options.map((option) => (
            <option value={option} className={` ${classNameInput}`} />
          ))}
        </datalist>
      </Fragment>
    );
  } else {
    inputCustom = (
      <input
        type={type}
        id={id}
        defaultValue={dummyData ? dummyData : ""}
        required
        ref={reference}
        className={`${classes.input} ${classNameInput}`}
      />
    );
  }

  return (
    <Fragment>
      {labelCustom}
      {inputCustom}
    </Fragment>
  );
};

export default InputRequired;
