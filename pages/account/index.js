import React, { Fragment, useState } from "react";
import ProfileMain from "../../components/account/ProfileMain";
import ProfileMainForm from "../../components/account/ProfileMainForm";
import ProfileRecords from "../../components/account/ProfileRecords";
import ProfileRecordsForm from "../../components/account/ProfileRecordsForm";

const ProfilePage = () => {
  const [hasProfileData, setHasProfileData] = useState(false);
  return (
    <Fragment>
      <h2>Welcome to your profile</h2>
      {hasProfileData ? (
        <div>
          <ProfileMain />
          <ProfileRecords />
        </div>
      ) : (
        <div>
          <ProfileMainForm />
          <ProfileRecordsForm />
        </div>
      )}
    </Fragment>
  );
};

export default ProfilePage;
