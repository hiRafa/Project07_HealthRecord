import React, { Fragment, useState } from "react";
import SectionContainer from "../../layout-units/SectionContainer";
import classes from "./Appointments.module.css";
import { Calendar } from "react-calendar";
import CalendarAll from "../../layout-units/CalendarAll";
import ButtonAll from "../../layout-units/ButtonAll";
import togglePrevCurrent from "../../../helpers/general-helper";


const ProfileAppointments = ({ dataFetched }) => {
  const { selectedSchedule } = dataFetched;
  const [showTimes, setShowTimes] = useState(false);
  const [dateValue, dateOnChange] = useState(new Date());
  const [newAppointmentsState, setNewAppointmentsState] = useState(true);

  let arr = [];
  selectedSchedule &&
    selectedSchedule.map((appointment) =>
      Object.keys(appointment).forEach((key) =>
        arr.push(
          <article
            className={`flex_column ${classes.appointmentCard}`}
            key={`${appointment[key].year}${appointment[key].month}${appointment[key].day}`}
          >
            <h3>{appointment[key].professionalName}</h3>
            <p> {appointment[key].professionalSpeciality}</p>
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
        )
      )
    );
  let arrSort, currentDate;
  let oldAppointments = [];
  let newAppointments = [];
  if (arr !== undefined) {
    arrSort = arr.sort((a, b) => a.key - b.key);
  }
  if (arrSort !== undefined) {
    let dateHelper = new Date();
    currentDate = `${dateHelper.getFullYear()}${
      dateHelper.getMonth() + 1
    }${dateHelper.getDate()}`;
    // console.log(currentDate);
    arrSort.map((appointment) => {
      if (appointment.key < currentDate) {
        oldAppointments.push(appointment);
      } else {
        newAppointments.push(appointment);
      }
    });
    console.log(oldAppointments, newAppointments);
  }

  return (
    <SectionContainer className={`flex_column ${classes.appointmentLayout}`}>
      <h2>Profile Appointments</h2>
      <div className={`flex_start ${classes.appointmentContainer}`}>
        <div className={`flex_column ${classes.appointmentCardContainer}`}>

          {!newAppointmentsState && (
            <div>
              <h3>Past Appointments</h3>
              {oldAppointments}
            </div>
          )}
          {newAppointmentsState && (
            <div>
              <h3>Incoming Appointments</h3>
              {newAppointments}
            </div>
          )}
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
        <ButtonAll
            text={`${newAppointmentsState ? "Past" : "Incoming"}`}
            onClick={() => setNewAppointmentsState((prevState) => !prevState)}
          />
      </div>
    </SectionContainer>
  );
};

export default ProfileAppointments;
