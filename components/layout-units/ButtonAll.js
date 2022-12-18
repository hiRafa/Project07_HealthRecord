import Link from "next/link";
import React from "react";
import classes from "./LayoutUnits.module.css";

const ButtonAll = ({ text, className, onClick, href }) => {
  if (href) {
    return (
      <Link href={href}>
        <button className={`${className} ${classes.buttonAll}`}>{text}</button>
      </Link>
    );
  }

  return (
    <button className={`${className} ${classes.buttonAll}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonAll;
