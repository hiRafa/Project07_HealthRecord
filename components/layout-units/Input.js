import React, { Fragment } from "react";
import classes from "./LayoutUnits.module.css";

const Input = ({
  label,
  htmlFor,
  type,
  id,
  reference,
  dummyData,
  className,
}) => {
  return (
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
      />
    </Fragment>
  );
};

export default Input;
