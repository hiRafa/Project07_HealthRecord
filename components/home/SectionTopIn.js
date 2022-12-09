import { useSession } from "next-auth/react";
import React from "react";
import AccountAccess from "./AccountAccess";
import SectionContainer from "../layout-units/SectionContainer";
import classes from "./Home.module.css";

const SectionTopIn = () => {
  const { data: session, status } = useSession();

  return (
    <SectionContainer className={`flex_column ${classes.topIn}`}>
      <h1>Welcome to your Medical Records platform at Health Memory</h1>
      <section
        className={`${classes.topIn_body} flex_center flex_column_mobile `}
      >
        <section className={classes.body_intro}>
          <h2>Webapp introduction</h2>
          <p>
            Health Records is your webapplication for registaring and securing
            all of your health records and history and of your family! <br />
            On your profile account you can share or print and bring the form
            filled to your local Hospital, Clinics, Pharmacies and others places
            without having to fill the same form over and over! <br />
            We also provide a profile to create a genealogy chart, register DNA
            test results, scheduling with health centers*, and even with
            specialists available for online consultation* <br />
          </p>
        </section>
        {!session && <AccountAccess />}
      </section>
    </SectionContainer>
  );
};

export default SectionTopIn;
