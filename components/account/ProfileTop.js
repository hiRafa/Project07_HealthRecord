import Link from "next/link";
import Head from "next/head";
import React, { Fragment } from "react";
import SectionContainer from "../layout-units/SectionContainer";
import classes from "./Account.module.css";

const ProfileTop = () => {
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
      <Head>
        <title>Your profile at HealthRecords webapp</title>
        <meta
          name="description"
          content="Generated by Your profile at HealthRecords webapp"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionContainer>
        <h1>Welcome to your profile</h1>
        {/* <p>{currentFormatDate}</p> */}
      </SectionContainer>
      <SectionContainer>
        <nav className={`section_container ${classes.nav_account}`}>
          <ul>
            <Link href="/account">
              <li className={`showOnPc  ${classes.navLink}`}>Main</li>
            </Link>
            <Link href="/account/lineage">
              <li className={`showOnPc  ${classes.navLink}`}>Lineage</li>
            </Link>
            <Link href="/account/DNA">
              <li className={`showOnPc  ${classes.navLink}`}>DNA</li>
            </Link>
            <Link href="/account/appointments">
              <li className={`showOnPc  ${classes.navLink}`}>Appointments</li>
            </Link>
            <Link href="/account/diet">
              <li className={`showOnPc  ${classes.navLink}`}>Diet</li>
            </Link>
            <Link href="/account/settings">
              <li className={`showOnPc  ${classes.navLink}`}>Settings</li>
            </Link>
          </ul>
        </nav>
      </SectionContainer>
    </Fragment>
  );
};

export default ProfileTop;
