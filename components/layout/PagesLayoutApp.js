import React, { Fragment, useCallback, useEffect, useState } from "react";
import classes from "./Layout.module.css";

import useNotification from "../../contexts/notifications-context";

import Header from "./Header";
import Notification from "./Notification";
import NewsletterSignup from "./NewsLetterSignup";
import Backdrop from "./Backdrop";
import modalContxt from "../../contexts/modal-context";

import { useSession } from "next-auth/react";
import { fetchUserData } from "../../helpers/general-helper";

const PagesLayoutApp = (props) => {
  const { activeNotification } = useNotification();
  const { modalIsOpen, toggleModal } = modalContxt();

  const { data: session, status } = useSession();
  const [dataFetched, setDataFetched] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState();

  const memoizedFetchUserData = useCallback(() => {
    fetchUserData(currentUserEmail, setDataFetched);
  }, [currentUserEmail]);

  useEffect(() => {
    if (session) setCurrentUserEmail(session.user.email);
    memoizedFetchUserData();
  }, [session, memoizedFetchUserData]);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth().toString().padStart(2, "0"); // add 1 since months are zero-indexed
  const date = currentDate.getDate().toString().padStart(2, "0");
  const hour = currentDate.getHours().toString().padStart(2, "0");
  const minute = currentDate.getMinutes().toString().padStart(2, "0");
  const currentKey = `${year}${month}${date}${hour}${minute}`;
  // console.log("current key" + currentKey)

  let objValues = null;
  if (dataFetched?.selectedSchedule) {
    const appointments = dataFetched.selectedSchedule.filter(appointment => Object.keys(appointment)[0] >= currentKey);
    if (appointments.length > 0) {
      const lowestObj = appointments.reduce((a, b) => Object.keys(a)[0] < Object.keys(b)[0] ? a : b);
      objValues = Object.values(lowestObj)[0];
    }
  }

  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        {props.children}
        {modalIsOpen && <Backdrop onClick={() => toggleModal()} />}
        {activeNotification && (
          <Notification
            title={activeNotification.title}
            message={activeNotification.message}
            status={activeNotification.status}
          />
        )}
        {objValues && (
          <div className={`${classes.notificationAppointment} flex_center`}>
            <p>Next Appointment: </p>
            <p>{objValues.professionalName}</p>
            <p>Speciality: {objValues.professionalSpeciality}</p>
            <p>
              Date: {objValues.month}/{objValues.day}/{objValues.year}
            </p>
            <p>
              Time: {objValues.hour}:{objValues.min}
            </p>
          </div>
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
