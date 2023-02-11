import React, { useState } from "react";
import SectionContainer from "../../layout-units/SectionContainer";
import UserCalendar from "../../consult/BusinessCalendar";
import classes from "./Appointments.module.css";
import BusinessCalendar from "../../consult/BusinessCalendar";
import CalendarAll from "../../layout-units/CalendarAll";

const ProfileAppointments = () => {
  const [showTimes, setShowTimes] = useState(false);
  return (
    <SectionContainer className={`flex_column ${classes.appointmentLayout}`}>
      <h2>ProfileAppointments</h2>
      <CalendarAll setShowTimes={setShowTimes} />
      {showTimes && <p>No Appointments yet!</p>}
    </SectionContainer>
  );
};

export default ProfileAppointments;
