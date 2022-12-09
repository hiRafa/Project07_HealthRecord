import React, { Fragment } from "react";
import classes from "./LayoutUnits.module.css";

const InputRequired = ({
  label,
  htmlFor,
  type,
  id,
  reference,
  dummyData,
  classNameLabel,
  classNameInput,
  onClick,

  list,
  options,

  name,
  value,
  checked,
}) => {
  console.log(dummyData);
  const labelCustom = (
    <label htmlFor={htmlFor} className={`${classes.label} ${classNameLabel}`}>
      {label}
    </label>
  );

  let input;
  if (list) {
    input = (
      <Fragment>
        {labelCustom}
        <input
          list={list}
          defaultValue={dummyData ? dummyData : ""}
          required
          ref={reference}
          className={`${classes.input} ${classNameInput}`}
        />
        <datalist id={list}>
          {options.map((option) => (
            <option value={option} />
          ))}
        </datalist>
      </Fragment>
    );
  } else {
    input = (
      <Fragment>
        {labelCustom}
        <input
          type={type}
          id={id}
          defaultValue={dummyData ? dummyData : ""}
          required
          ref={reference}
          className={`${classes.input} ${classNameInput}`}
        />
      </Fragment>
    );
  }

  return <Fragment>{input}</Fragment>;
};

export default InputRequired;
