import React, { Fragment } from "react";
import classes from "./Layout.module.css";

import useNotification from "../../contexts/notifications-context";

import Header from "./Header";
import Notification from "./Notification";
import NewsletterSignup from "./NewsLetterSignup";

const PagesLayoutApp = (props) => {
  const { activeNotification } = useNotification();
  //   console.log(activeNotification);

  return (
    <Fragment>
      <Header />

      <main className={classes.main}>
        {props.children}
        {activeNotification && (
          <Notification
            title={activeNotification.title}
            message={activeNotification.message}
            status={activeNotification.status}
          />
        )}
      </main>

      <footer className={`flex_center flex_column ${classes.footer}`}>
        <NewsletterSignup />
        <p>Web app created by Hirashiki Rafael, 2022 </p>
      </footer>
    </Fragment>
  );
};

export default PagesLayoutApp;
