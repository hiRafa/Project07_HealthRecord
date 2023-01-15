import React, { Fragment, useEffect, useState } from "react";
import ProfileTop from "../../components/account/ProfileTop";
import ProfileMainForm from "../../components/account/ProfileMainForm";
import ProfileYesNoForm from "../../components/account/ProfileYesNoForm";
import ProfileSelectingForm from "../../components/account/ProfileSelectingForm";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const [currentUserEmail, setCurrentUserEmail] = useState();
  const [dataFetched, setDataFetched] = useState({});

  useEffect(() => {
    if (session) setCurrentUserEmail(session.user.email);

    if (currentUserEmail)
      fetch(`/api/userData/${currentUserEmail}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // then extracting the data, the data was stored as { userData: userData}
          // set the data to a local component state#
          // console.log(data.userData);
          setDataFetched({ ...data.userData });
          // setFetchingData(false);
        });
  }, [session, currentUserEmail]);

  return (
    <Fragment>
      <ProfileTop />
      <ProfileMainForm dataFromPar={dataFetched} />
      <ProfileYesNoForm dataFromPar={dataFetched} />
      <ProfileSelectingForm dataFromPar={dataFetched} />
    </Fragment>
  );
};

export default ProfilePage;
