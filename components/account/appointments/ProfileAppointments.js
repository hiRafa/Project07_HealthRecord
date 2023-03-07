import React, { Fragment, useState } from "react";
import SectionContainer from "../../layout-units/SectionContainer";
import classes from "./Appointments.module.css";
import { Calendar } from "react-calendar";
import CalendarAll from "../../layout-units/CalendarAll";

const ProfileAppointments = ({ dataFetched }) => {
  const { selectedSchedule } = dataFetched;
  const [showTimes, setShowTimes] = useState(false);
  const [dateValue, dateOnChange] = useState(new Date());
  let professionalName, professionalID, professionalSpeciality;
  let appointmentHour,
    appointmentMin,
    appointmentDay,
    appointmentMonth,
    appointmentYear;
  // professionalName = appointment[key].professionalName;
  //       professionalID = appointment[key].professionalID;
  //       professionalSpeciality = appointment[key].professionalSpeciality;
  //       appointmentHour = appointment[key].hour;
  //       appointmentMin = appointment[key].min;
  //       appointmentDay = appointment[key].day;
  //       appointmentMonth = appointment[key].month;
  //       appointmentYear = appointment[key].year;
  let arr = [];
  selectedSchedule &&
    selectedSchedule.map((appointment) =>
      Object.keys(appointment).forEach((key) =>
        arr.push(
          <article className={`flex_column ${classes.appointmentCard}`}>
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
  console.log(arr);
  return (
    <SectionContainer className={`flex_column ${classes.appointmentLayout}`}>
      <h2>ProfileAppointments</h2>
      <div className={`flex_start ${classes.appointmentContainer}`}>
        <div className={`flex_column ${classes.appointmentCardContainer}`}>
          {arr}
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
