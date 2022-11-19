import React, { Fragment } from "react";

import useNotification from "../../contexts/notifications-context";

import Header from "./Header";
import Notification from "./Notification";

const PagesLayout = (props) => {
  const { activeNotification } = useNotification();
  //   console.log(activeNotification);

  return (
    <Fragment>
      <Header />

      <main>{props.children}</main>

      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
};

export default PagesLayout;
