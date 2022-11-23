import React from "react";
import classes from "./LayoutUnits.module.css";

const ButtonAll = ({ text, className, onClick }) => {
  return (
    <button className={`${className} ${classes.buttonAll}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonAll;
