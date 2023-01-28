import React, { useState } from "react";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import classes from "./Layout.module.css";

import Backdrop from "./Backdrop";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const { data: session, status } = useSession();
  // session && console.log("Session ongoing, need to logout");
  // console.log(status);

  const handleopenNav = () => setOpenNav(true);
  const handlecloseNav = () => setOpenNav(false);

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  const links = [
    { pageTitle: "Home", link: "/", icon: "home_health" },
    {
      pageTitle: "Health Centers!",
      link: "/healthcenters",
      icon: "emoji_transportation",
    },
    { pageTitle: "Publications", link: "/publicationslist", icon: "cognition" },
  ];

  let logOutLink, accountLink;
  if (session) {
    logOutLink = (
      <li className={` animWindow ${classes.navLink}`} onClick={handleSignout}>
        <span class="material-symbols-outlined navIcons">directions_run</span>
        <Link href="/">Log out</Link>
      </li>
    );
    accountLink = (
      <li className={` animWindow ${classes.navLink}`}>
        <Link href="/account">
          <span class="material-symbols-outlined navIcons">
            medical_information
          </span>
          Account
        </Link>
      </li>
    );
  } else {
    accountLink = (
      <li className={` animWindow ${classes.navLink}`}>
        <Link href="/">
          <span class="material-symbols-outlined navIcons">
            medical_information
          </span>
          Account
        </Link>
      </li>
    );
  }

  return (
    <header className={classes.header}>
      <img className={`${classes.bg_img}`} />
      <div className={classes.logo}>
        <Link href="/">Logo</Link>
      </div>
      <nav className={`flex_center ${classes.navigation}`}>
        {openNav && <Backdrop onClick={handlecloseNav} />}
        <ul
          className={`${classes.navUl} ${openNav && classes.navUlMobile}`}
          onClick={() => setOpenNav(false)}
        >
          {links.map((link) => (
            <li className={`animWindow ${classes.navLink}`}>
              <Link href={link.link}>
                <span class="material-symbols-outlined navIcons">
                  {link.icon}
                </span>
                {link.pageTitle}
              </Link>
            </li>
          ))}
          {accountLink}
          {logOutLink}
        </ul>

        <div
          className={`showOnMobile animWindow ${classes.navLink} ${classes.navMenu_button}`}
          onClick={handleopenNav}
        >
          <span class="material-symbols-outlined navIcons">menu_open</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
