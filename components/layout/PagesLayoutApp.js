import React, { Fragment } from "react";
import classes from "./Layout.module.css";

import useNotification from "../../contexts/notifications-context";

import Header from "./Header";
import Notification from "./Notification";

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
      
      <footer></footer>
    </Fragment>
  );
};

export default PagesLayoutApp;