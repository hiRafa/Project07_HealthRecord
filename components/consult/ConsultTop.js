import { useSession } from "next-auth/react";
import React from "react";
import AccountAccess from "../home/AccountAccess";
import SectionContainer from "../layout-units/SectionContainer";
import classes from "./Consult.module.css";

import FilterConsult from "./FilterConsult";
const ConsultTop = ({ filterOptions }) => {
  const { data: session, status } = useSession();

  if (filterOptions) {
    return (
      <SectionContainer className={`${classes.consultTop} `}>
        <a id="consultop" name="consultop"></a>
        <h1>Find your professional!</h1>
        <div
          className={`${classes.consultTopInner} flex_center flex_column_mobile`}
        >
          <div className={`${classes.filterDiv} flex_column`}>
            <p>{`Publications found for ${filterOptions}`}</p>
            <FilterConsult className={classes.filterConsult} />
            <ButtonAll href="/consult" text={"Show all professionals"} />
          </div>
          <div className={` flex_column`}>
            <p>
              Log in or create an account to be able to schedule an appointment
            </p>
            {!session && <AccountAccess routerPush={"/consult"} />}
          </div>
        </div>
      </SectionContainer>
    );
  } else {
    return (
      <SectionContainer className={`${classes.consultTop} `}>
        <a id="consultop" name="consultop"></a>
        <h1>Find your professional!</h1>
        <div
          className={`${classes.consultTopInner} flex_center flex_column_mobile`}
        >
          <div className={`${classes.filterDiv} flex_column`}>
            <p>
              Below you will find our registered professionals and facilities
            </p>
            <FilterConsult className={classes.filterConsult} />
          </div>
          <div className={` flex_column`}>
            {!session && (
              <AccountAccess
                extraInfo={`Log in or create an account to schedule an appointment`}
                routerPush={"/consult"}
              />
            )}
          </div>
        </div>
      </SectionContainer>
    );
  }
};

export default ConsultTop;
