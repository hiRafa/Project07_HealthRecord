import React, { Fragment } from "react";
import ProfileTop from "../../components/account/ProfileTop";
import SectionContainer from "../../components/layout-units/SectionContainer";

const AppointmentsPage = () => {
  return (
    <Fragment>
      <ProfileTop />
      <SectionContainer>
        <h2>Appointments</h2>
      </SectionContainer>
    </Fragment>
  );
};

export default AppointmentsPage;
