import React, { Fragment } from "react";
import ProfileAppointments from "../../components/account/appointments/ProfileAppointments";
import ProfileTop from "../../components/account/ProfileTop";

const AppointmentsPage = () => {

  return (
    <Fragment>
      <ProfileTop />
      <ProfileAppointments/>
    </Fragment>
  );
};

export default AppointmentsPage;
