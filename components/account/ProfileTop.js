import Link from "next/link";
import Head from "next/head";
import React, { Fragment } from "react";
import SectionContainer from "../layout-units/SectionContainer";
import classes from "./Account.module.css";
import { useRouter } from "next/router";
import HeadCustom from "../layout/HeadCustom";

const ProfileTop = () => {
  const router = useRouter();

  const accountNav = [
    { pageTitle: "Main", link: "/account" },
    { pageTitle: "Appointments", link: "/account/appointments" },
    { pageTitle: "Lineage", link: "/account/lineage" },
    { pageTitle: "DNA", link: "/account/DNA" },
    { pageTitle: "Meals", link: "/account/meals" },
    // { pageTitle: "Settings", link: "/account/settings" },
  ];

  return (
    <Fragment>
      <HeadCustom title={"Your profile at HealthRecords webapp"} />

      <SectionContainer>
        <h1>Welcome to your profile</h1>
      </SectionContainer>
      
      <SectionContainer>
        <nav className={`section_container  ${classes.nav_account}`}>
          <ul className={`${classes.nav_accountUl} `}>
            {accountNav.map((path) => (
              <Link href={path.link} key={path.pageTitle}>
                <li
                  className={`flex_center ${classes.navLink} 
                ${router.route === path.link && classes.navLink_active}`}
                >
                  <span className="material-symbols-outlined">genetics</span>
                  {path.pageTitle}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </SectionContainer>
    </Fragment>
  );
};

export default ProfileTop;
