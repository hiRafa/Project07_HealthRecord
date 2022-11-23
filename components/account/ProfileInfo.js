import React, { Fragment, useState } from "react";
import ProfileMain from "./ProfileMain";
import ProfileMainForm from "./ProfileMainForm";
import ProfileRecords from "./ProfileRecords";
import ProfileRecordsForm from "./ProfileRecordsForm";

const ProfileInfo = () => {
  const [hasProfileData, setHasProfileData] = useState(false);
  return (
    <Fragment>
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

export default ProfileInfo;
