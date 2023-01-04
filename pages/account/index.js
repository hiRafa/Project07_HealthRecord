import React, { Fragment, useEffect, useState } from "react";
import ProfileTop from "../../components/account/ProfileTop";
import ProfileMainForm from "../../components/account/ProfileMainForm";
import ProfileRecordsForm from "../../components/account/ProfileRecordsForm";
import ProfileSelectingForm from "../../components/account/ProfileSelectingForm";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const [currentUserEmail, setCurrentUserEmail] = useState();

  useEffect(() => {
    if (session) setCurrentUserEmail(session.user.email);
  }, [session]);

  return (
    <Fragment>
      <ProfileTop />
      <ProfileMainForm currentUserEmail={currentUserEmail} />
      <ProfileRecordsForm />
      <ProfileSelectingForm />
    </Fragment>
  );
};

export default ProfilePage;
