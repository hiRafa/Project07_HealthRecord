import Head from "next/head";
import React, { Fragment, useState } from "react";
import ProfileMainForm from "../../components/account/ProfileMainForm";
import ProfileRecordsForm from "../../components/account/ProfileRecordsForm";
import PagesLayoutInAccount from "../../components/layout/PagesLayoutInAccount";

const ProfilePage = () => {
  return (
    <Fragment>
      <PagesLayoutInAccount>
        <ProfileMainForm />
        <ProfileRecordsForm />
      </PagesLayoutInAccount>
    </Fragment>
  );
};

export default ProfilePage;
