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

  return (
    <header className={classes.header}>
      <img className={`${classes.bg_img}`} />
      <div className={classes.logo}>
        <Link href="/">Logo</Link>
      </div>
      <nav className={`flex_center  ${classes.navigation}`}>
        <ul className={` ${classes.navLink}`}>
          <li className={`showOnPc ${classes.navLink}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`showOnPc  ${classes.navLink}`}>
            {session ? (
              <Link href="/account">Account</Link>
            ) : (
              <Link href="/">Account</Link>
            )}
          </li>
          <li className={`showOnPc  ${classes.navLink}`}>
            <Link href="/centers">Health Centers!</Link>
          </li>
          <li className={`showOnPc  ${classes.navLink}`}>
            <Link href="/publicationslist">Publications</Link>
          </li>

          {/* Log Out and Menu */}
          {session && (
            <li
              className={`showOnPc  ${classes.navLink}`}
              onClick={handleSignout}
            >
              <Link href="/">Log out</Link>
            </li>
          )}
          <li
            className={`showOnMobile  ${classes.navLink} ${classes.navMenu_button}`}
            onClick={handleopenNav}
          >
            Menu
          </li>
          {openNav && <Backdrop onClick={handlecloseNav} />}
          {openNav && (
            <div className={`flex_column ${classes.navMobile}`}>
              <li className={`showOnMobile ${classes.navLink}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`showOnMobile  ${classes.navLink}`}>
                {session ? (
                  <Link href="/account">Account</Link>
                ) : (
                  <Link href="/">Account</Link>
                )}
              </li>
              <li className={`showOnMobile  ${classes.navLink}`}>
                <Link href="/centers">Health Centers!</Link>
              </li>
              <li className={`showOnMobile  ${classes.navLink}`}>
                <Link href="/publicationslist">Publications</Link>
              </li>

              {session && (
                <li
                  className={`showOnMobile  ${classes.navLink}`}
                  onClick={handleSignout}
                >
                  <Link href="/">Log out</Link>
                </li>
              )}
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
