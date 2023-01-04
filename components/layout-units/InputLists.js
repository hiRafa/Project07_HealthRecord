import React, { Fragment, useEffect, useRef } from "react";
import classes from "./LayoutUnits.module.css";

const InputRequired = ({ input, getDataFromChild }) => {
  const {
    label,
    htmlFor,
    type,
    id,

    dummyData,
    classNameLabel,
    classNameInput,
    onClick,

    select,
    list,
    options,
  } = input;

  const inputRef = useRef();

  // console.log(dummyData);

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
          ref={inputRef}
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
        ref={inputRef}
        className={`${classes.input} ${classNameInput}`}
        onBlur={() => {
          getDataFromChild(id, inputRef.current.value);
          console.log(`outside of input`);
        }}
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
