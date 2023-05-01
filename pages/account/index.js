import React, { Fragment, useEffect, useState, useMemo } from "react";
import ProfileTop from "../../components/account/ProfileTop";
import ProfileMainForm from "../../components/account/ProfileMainForm";
import ProfileYesNoForm from "../../components/account/ProfileYesNoForm";
import ProfileSelectingForm from "../../components/account/ProfileSelectingForm";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import SectionContainer from "../../components/layout-units/SectionContainer";

const ProfilePage = () => {
  const { data: session } = useSession();
  const {
    data: userData,
    isLoading,
    isIdle,
    isError,
  } = useQuery("/api/user", async () => {
    const res = await fetch("/api/user");
    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }
    return res.json();
  });

  if (isIdle) {
    return null;
  }

  if (isLoading) {
    return (
      <Fragment>
        <ProfileTop />
        <p>Loading...</p>;
      </Fragment>
    );
  }

  if (isError) {
    return (
      <Fragment>
        <ProfileTop />
        <p></p>
      </Fragment>
    );
  }
  console.log(userData)
  return (
    <Fragment>
      <ProfileTop />
      <ProfileMainForm dataFromPar={userData} />
      {userData.fullname && <ProfileYesNoForm dataFromPar={userData} />}
      {userData.fullname && <ProfileSelectingForm dataFromPar={userData} />}
      {!userData.fullname && (
        <SectionContainer className={`flex_column consult_border`}>
          <p>
            Fill in your basic information in order to register more specific records like health conditions, diseases, pregnancy, etc.
          </p>
        </SectionContainer>
      )}
    </Fragment>
  );
};

export default ProfilePage;
