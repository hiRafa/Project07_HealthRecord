import React, { Fragment, useEffect, useRef } from "react";
import classes from "./LayoutUnits.module.css";

const InputRequired = ({ input, getDataFromChild }) => {
  const {
    label,
    htmlFor,
    type,
    id,

    data,
    classNameLabel,
    classNameInput,

    list,
    options,
  } = input;

  const inputRef = useRef();

  // console.log(data);

  // LABEL
  const labelCustom = (
    <label htmlFor={htmlFor} className={`${classes.label} ${classNameLabel}`}>
      {label}
    </label>
  );

  // INPUT
  let inputCustom = (
    <input
      type={type}
      id={id}
      defaultValue={data ? data : ""}
      // required
      ref={inputRef}
      className={`${classes.input} ${classNameInput}`}
      onBlur={() => {
        getDataFromChild(id, inputRef.current.value);
        console.log(`outside of input`);
      }}
    />
  );

  if (list) {
    inputCustom = (
      <Fragment>
        <input
          list={list}
          id={`${list}-list`}
          name={`${list}-list`}
          defaultValue={data ? data : ""}
          // required
          ref={inputRef}
          className={`${classes.input} ${classNameInput}`}
          onBlur={() => {
            getDataFromChild(id, inputRef.current.value);
            console.log(`outside of input`);
          }}
        />
        <datalist id={list}>
          {options.map((option) => (
            <option
              value={option}
              className={` ${classNameInput}`}
              key={option}
            />
          ))}
        </datalist>
      </Fragment>
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
