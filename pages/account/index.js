import React, { Fragment, useEffect, useState, useMemo } from "react";
import ProfileTop from "../../components/account/ProfileTop";
import ProfileMainForm from "../../components/account/ProfileMainForm";
import ProfileYesNoForm from "../../components/account/ProfileYesNoForm";
import ProfileSelectingForm from "../../components/account/ProfileSelectingForm";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";

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

  return (
    <Fragment>
      <ProfileTop />
      <ProfileMainForm dataFromPar={userData} />
      <ProfileYesNoForm dataFromPar={userData} />
      <ProfileSelectingForm dataFromPar={userData} />
    </Fragment>
  );
};

export default ProfilePage;
