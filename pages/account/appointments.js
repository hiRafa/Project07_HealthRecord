import React, { Fragment } from "react";
import ProfileAppointments from "../../components/account/appointments/ProfileAppointments";
import ProfileTop from "../../components/account/ProfileTop";
import SectionContainer from "../../components/layout-units/SectionContainer";

const AppointmentsPage = () => {
  return (
    <Fragment>
      <ProfileTop />
      <ProfileAppointments />
    </Fragment>
  );
};

export default AppointmentsPage;
