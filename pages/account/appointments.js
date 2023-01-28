import React, { Fragment } from "react";
import UserCalendar from "../../components/account/appointments/UserCalendar";
import ProfileTop from "../../components/account/ProfileTop";
import SectionContainer from "../../components/layout-units/SectionContainer";

const AppointmentsPage = () => {
  return (
    <Fragment>
      <ProfileTop />
      <SectionContainer>
        <h2>Appointments</h2>
        <UserCalendar />
      </SectionContainer>
    </Fragment>
  );
};

export default AppointmentsPage;
