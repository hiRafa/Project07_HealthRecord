import React, { Fragment, useState } from "react";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import classes from "./Layout.module.css";

const Header = () => {
  // const [activeMenu, setActiveMenu] = useState(true);
  const { data: session, status } = useSession();
  session && console.log("Session ongoing, need to logout");
  console.log(status);

  // const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Logo</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li className={`${"showOnPc"}  ${classes.navLink}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${"showOnPc"}  ${classes.navLink}`}>
            {session ? (
              <Link href="/account">Account</Link>
            ) : (
              <Link href="/">Account</Link>
            )}
          </li>
          <li className={`${"showOnPc"}  ${classes.navLink}`}>
            <Link href="/centers">Health Centers!</Link>
          </li>
          <li
            className={`${"showOnPc"}  ${classes.navLink}`}
            onClick={handleSignout}
          >
            <Link href="/">Log out</Link>
          </li>
          {/* <li className={`${"showOnPc"}  ${classes.navLink}`}>
            <Link href="/protectedRoute">Protected</Link>
          </li>
          {!session && (
            <li className={`${"showOnPc"}  ${classes.navLink}`}>
              <Link href="/account">Log in</Link>
            </li>
          )}
          {session && (
            <Fragment>
              <li className={`${"showOnPc"}  ${classes.navLink}`}>
                <Link href="/account">Account</Link>
              </li>
      
            </Fragment>
          )}
          <li
            className={`${"showOnMobile"}  ${classes.navMenuIcon}`}
            onClick={handleActiveMenu}
          >
            Menu
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
