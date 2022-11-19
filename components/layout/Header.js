import Link from "next/link";
import React, { Fragment, useState } from "react";
import { useSession, signOut } from "next-auth/react";

import classes from "./UI.module.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const { data: session, status } = useSession();
  // console.log(session);
  // console.log(status);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

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
            <Link href="/products">Account</Link>
          </li>
          <li className={`${"showOnPc"}  ${classes.navLink}`}>
            <Link href="">Clinics</Link>
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
              <li className={`${"showOnPc"}  ${classes.navLink}`}>
                <button onClick={handleSignout}>Log out</button>
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
