import { useSession } from "next-auth/react";
import React, { Fragment, useEffect, useState } from "react";
import ProfileAppointments from "../../components/account/appointments/ProfileAppointments";
import ProfileTop from "../../components/account/ProfileTop";
import SectionContainer from "../../components/layout-units/SectionContainer";

const AppointmentsPage = () => {
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
      <ProfileAppointments dataFetched={dataFetched}/>
    </Fragment>
  );
};

export default AppointmentsPage;
