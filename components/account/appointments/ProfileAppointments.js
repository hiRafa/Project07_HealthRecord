import React, { Fragment, useCallback, useEffect, useState } from "react";
import SectionContainer from "../../layout-units/SectionContainer";
import classes from "./Appointments.module.css";
import { Calendar } from "react-calendar";
import CalendarAll from "../../layout-units/CalendarAll";
import ButtonAll from "../../layout-units/ButtonAll";
import { fetchUserData } from "../../../helpers/general-helper";
import { useSession } from "next-auth/react";

const ProfileAppointments = () => {
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

  const [showTimes, setShowTimes] = useState(false);
  const [dateValue, dateOnChange] = useState(new Date());
  const [newAppointmentsState, setNewAppointmentsState] = useState(true);

  const arr = dataFetched?.selectedSchedule.flatMap((appointment) =>
    Object.keys(appointment).map((key) => (
      <article
        className={`flex_column ${classes.appointmentCard}`}
        key={`${appointment[key].year}${appointment[key].month}${appointment[key].day}${appointment[key].hour}${appointment[key].min}`}
      >
        <h3>{appointment[key].professionalName}</h3>
        <p>{appointment[key].professionalSpeciality}</p>
        <div className={`flex_end ${classes.appointmentDate}`}>
          <p>Day: {appointment[key].day}</p>
          <p>
            {appointment[key].month}/{appointment[key].year}
          </p>
          <p>
            {appointment[key].hour}:{appointment[key].min}
          </p>
        </div>
      </article>
    ))
  );

  const dateHelper = new Date();
  const currentDate = `${dateHelper.getFullYear()}${
    dateHelper.getMonth() + 1
  }${dateHelper.getDate()}`;
  const appointments = arr?.sort((a, b) => a.key - b.key) || [];
  const oldAppointments = appointments.filter(
    (appointment) => appointment.key < currentDate
  );
  const newAppointments = appointments.filter(
    (appointment) => appointment.key >= currentDate
  );

  return (
    <SectionContainer className={`flex_column consult_border consult_border-bottom`}>
      <h2>Profile Appointments</h2>
      <div className={`flex_start ${classes.appointmentContainer}`}>
        <div className={`flex_column ${classes.appointmentCardContainer}`}>
          {!newAppointmentsState && (
            <Fragment>
              <h3>Past Appointments</h3>
              {oldAppointments}
            </Fragment>
          )}
          {newAppointmentsState && (
            <Fragment>
              <h3>Incoming Appointments</h3>
              {newAppointments}
            </Fragment>
          )}
          <ButtonAll
            text={`${newAppointmentsState ? "Past" : "Incoming"}`}
            onClick={() => setNewAppointmentsState((prevState) => !prevState)}
          />
        </div>

        <div className={`${classes.calendarContainer} glass_bg`}>
          <Calendar
            value={dateValue}
            onChange={dateOnChange}
            minDate={new Date(2020, 0, 0)}
            maxDate={new Date(2040, 0, 0)}
            minDetail={"decade"}
            calendarType={"ISO 8601"}
            onClickDay={(e) => {
              setShowTimes(true);
            }}
            className={`calendar ${classes.appointmentCalendar}`}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProfileAppointments;
