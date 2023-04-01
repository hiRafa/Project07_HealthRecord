import React, { useState } from "react";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import classes from "./Layout.module.css";

import modalContxt from "../../contexts/modal-context";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const { modalIsOpen, toggleModal } = modalContxt();
  const { data: session, status } = useSession();
  // session && console.log("Session ongoing, need to logout");
  // console.log(status);

  const handleSignout = (e) => {
    e.preventDefault();
    signOut({
      callbackUrl: `${window.location.origin}`
    });
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
    <li className={`animWindow ${classes.navLi} `} key={links.pageTitle}>
      <Link href={link.link}>
        <span className="material-symbols-outlined navIcons">{link.icon}</span>
        <span className={classes.navLi_text}>{link.pageTitle}</span>
      </Link>
    </li>
  ));

  let accountLink = (
    <li className={` animWindow ${classes.navLi}`}>
      <Link href={session ? "/account" : "/"}>
        <span className="material-symbols-outlined navIcons">cognition</span>
        <span className={classes.navLi_text}>Account</span>
      </Link>
    </li>
  );

  let logOutLink = (
    <li className={` animWindow ${classes.navLi}`} onClick={handleSignout}>
      <Link href="/">
        <span className="material-symbols-outlined navIcons">directions_run</span>
        <span className={classes.navLi_text}>Log out</span>
      </Link>
    </li>
  );

  let menuLink = (
    <div
      className={`animWindow ${classes.navLi} ${classes.navMenu_button}`}
      onClick={() => {
        !modalIsOpen && toggleModal();
        setOpenNav(true);
      }}
    >
      <a>
        <span className="material-symbols-outlined navIcons">menu_open</span>
      </a>
    </div>
  );

  return (
    <header className={`${classes.header}  `}>
      <img className={`${classes.bg_img}`} />
      <nav className={`flex_center  ${classes.navigation} `}>
        <Link href="/" className={classes.logo}>
          Logo
        </Link>

        <ul
          className={`${classes.navUl} ${openNav && classes.navUlMobile} ${
            modalIsOpen && "glass_bg"
          }`}
          onClick={() => {
            openNav && toggleModal();
            setOpenNav(false);
          }}
        >
          {navLinks}
          {accountLink}
          {session && logOutLink}
        <ThemeSwitcher/>
        </ul>
        {menuLink}
      </nav>
    </header>
  );
};

export default Header;
