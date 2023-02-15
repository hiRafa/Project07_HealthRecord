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
    { pageTitle: "Home", link: "/", icon: "real_estate_agent" },
    {
      pageTitle: "Consult!",
      link: "/consult",
      icon: "event_available",
    },
    {
      pageTitle: "Publications",
      link: "/publicationslist",
      icon: "history_edu",
    },
  ];

  let navLinks = links.map((link) => (
    <li className={`animWindow ${classes.navLi}`}>
      <Link href={link.link}>
        <span class="material-symbols-outlined navIcons">{link.icon}</span>
        <span class={classes.navLi_text}>{link.pageTitle}</span>
      </Link>
    </li>
  ));

  let accountLink = (
    <li className={` animWindow ${classes.navLi}`}>
      <Link href={session ? "/account" : "/"}>
        <span class="material-symbols-outlined navIcons">cognition</span>
        <span class={classes.navLi_text}>Account</span>
      </Link>
    </li>
  );

  let logOutLink = (
    <li className={` animWindow ${classes.navLi}`} onClick={handleSignout}>
      <Link href="/">
        <span class="material-symbols-outlined navIcons">directions_run</span>
        <span class={classes.navLi_text}>Log out</span>
      </Link>
    </li>
  );

  let menuLink = (
    <div
      className={`animWindow ${classes.navLi} ${classes.navMenu_button}`}
      onClick={handleopenNav}
    >
      <a>
        <span class="material-symbols-outlined navIcons">menu_open</span>
      </a>
    </div>
  );

  return (
    <header className={`${classes.header} `}>
      <nav className={`flex_center  ${classes.navigation}`}>
        <img className={`${classes.bg_img}`} />
        <div className={classes.logo}>
          <Link href="/">Logo</Link>
        </div>
        <ul
          className={`${classes.navUl} ${openNav && classes.navUlMobile}`}
          onClick={() => setOpenNav(false)}
        >
          {navLinks}
          {accountLink}
          {session && logOutLink}
        </ul>

        {menuLink}
      </nav>
      {openNav && <Backdrop onClick={handlecloseNav} />}
    </header>
  );
};

export default Header;
