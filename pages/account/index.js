import React, { Fragment } from "react";
import ProfileTop from "../../components/account/ProfileTop";
import ProfileMainForm from "../../components/account/ProfileMainForm";
import ProfileRecordsForm from "../../components/account/ProfileRecordsForm";
import ProfileSelectingForm from "../../components/account/ProfileSelectingForm";

const ProfilePage = () => {
  return (
    <Fragment>
      <ProfileTop />
      <ProfileMainForm />
      <ProfileRecordsForm />
      <ProfileSelectingForm />
    </Fragment>
  );
};

export default ProfilePage;
