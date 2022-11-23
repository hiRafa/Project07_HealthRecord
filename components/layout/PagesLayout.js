import React, { Fragment } from "react";
import classes from "./Layout.module.css";

import useNotification from "../../contexts/notifications-context";

import Header from "./Header";
import Notification from "./Notification";

const PagesLayout = (props) => {
  const { activeNotification } = useNotification();
  //   console.log(activeNotification);

  return (
    <Fragment>
      <Header />

      <main className={classes.pagesLayout_main}>
        {props.children}
        {activeNotification && (
          <Notification
            title={activeNotification.title}
            message={activeNotification.message}
            status={activeNotification.status}
          />
        )}
      </main>
    </Fragment>
  );
};

export default PagesLayout;
