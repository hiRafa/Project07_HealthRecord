import React, { Fragment } from "react";
import classes from "./LayoutUnits.module.css";

const InputRequired = ({
  label,
  htmlFor,
  type,
  id,
  reference,
  dummyData,
  className,
  list,
  options,
}) => {
  return (
    <Fragment>
      {!list ? (
        // General Input
        <Fragment>
          <label htmlFor={htmlFor} className={`${classes.label} ${className}`}>
            {label}
          </label>
          <input
            type={type}
            id={id}
            ref={reference}
            defaultValue={dummyData ? dummyData : ""}
            required
            className={`${classes.input} ${className}`}
            list={list}
          />
        </Fragment>
      ) : (
        // List Options Input
        <Fragment>
          <label htmlFor={htmlFor} className={`${classes.label} ${className}`}>
            {label}
          </label>
          <input
            list={list}
            defaultValue={dummyData ? dummyData : ""}
            required
            className={`${classes.input} ${className}`}
          />
          <datalist id={list}>
            {options.map((option) => (
              <option value={option} />
            ))}
          </datalist>
        </Fragment>
      )}
    </Fragment>
  );
};

export default InputRequired;
