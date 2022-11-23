import Link from "next/link";
import React, { Fragment } from "react";
import classes from "./Layout.module.css";

const PagesLayoutInAccount = ({ children }) => {
  let currentDate = new Date();
  // let userTimeZone = currentDate.getTimezoneOffset() / 60; // return timezone in minutes, divide by 60 for hours
  // const timeElapsed = currentDate.now();
  // const now = new Date(timeElapsed);
  let currentFormatDate = currentDate.toLocaleString();
  // console.log(currentDate.toLocaleString());
  // console.log(currentDate.toTimeString());
  // console.log(currentDate.toString());
  // console.log(currentDate);
  // console.log(currentDate.getDay());
  // console.log(currentDate.getDate());
  // console.log(currentDate.getMonth());
  // console.log(currentDate.getFullYear());
  // console.log(currentDate.getTime());
  // console.log(userTimeZone);
  return (
    <Fragment>
      <h1>Welcome to your profile</h1>
      <p>{currentFormatDate}</p>
      <nav className={classes.nav_account}>
        <ul>
          <Link href="/account">
            <li className={`${"showOnPc"}  ${classes.navLink}`}>Main</li>
          </Link>
          <Link href="/account/lineage">
            <li className={`${"showOnPc"}  ${classes.navLink}`}>
              Lineage Tree
            </li>
          </Link>
          <Link href="/account/DNA">
            <li className={`${"showOnPc"}  ${classes.navLink}`}>DNA</li>
          </Link>
        </ul>
      </nav>
      <Fragment>{children}</Fragment>
    </Fragment>
  );
};

export default PagesLayoutInAccount;
