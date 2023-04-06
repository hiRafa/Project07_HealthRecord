import { useSession } from "next-auth/react";
import React from "react";
import SectionContainer from "../layout-units/SectionContainer";
import AccountAccess from "../home/AccountAccess";
import classes from "./Layout.module.css";

const HomeTop = () => {
  const { data: session, status } = useSession();

  return (
    <SectionContainer className={`flex_center flex_column ${classes.topHome} `}>
      <h1>Welcome to your Medical Records platform at Health Memory</h1>
      <div
        className={`${classes.topHome_body} flex_center flex_column_mobile `}
      >
        <div className={classes.body_intro}>
          <h2>Webapp introduction</h2>
          <p>
            Health Records is your webapplication for registaring and securing
            all of your health records and history and of your family! <br />
            <br />
            On your profile account you can share or print and bring the form
            filled to your local Hospital, Clinics, Pharmacies and others places
            without having to fill the same form over and over! <br />
            <br />
            We also provide a profile to create a genealogy chart, register DNA
            test results, scheduling with health centers*, and even with
            specialists available for online consultation* <br />
          </p>
        </div>
        {status !== "authenticated" && (
          <AccountAccess routerPush={"/account"} />
        )}
      </div>
    </SectionContainer>
  );
};

export default HomeTop;
