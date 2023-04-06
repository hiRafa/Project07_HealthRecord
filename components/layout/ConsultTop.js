import { useSession } from "next-auth/react";
import React from "react";
import AccountAccess from "../home/AccountAccess";
import SectionContainer from "../layout-units/SectionContainer";
import classes from "./Layout.module.css";

import FilterConsult from "../consult/FilterConsult";
import ButtonAll from "../layout-units/ButtonAll";
const ConsultTop = ({ selectedFilter, message }) => {
  const { data: session, status } = useSession();

  if (selectedFilter) {
    return (
      <SectionContainer className={`${classes.topContainer} `}>
        <h1>Find your specialist!</h1>
        <div
          className={`${classes.topInner} flex_column `}
        >
            <FilterConsult className={classes.filterConsult} />
            <p>{message}</p>
            <ButtonAll href="/consult" text={"Show all specialists"} />
          </div>
      </SectionContainer>
    );
  } else {
    return (
      <SectionContainer className={`${classes.topContainer} `}>
        <a id="consultop" name="consultop"></a>
        <h1>Find your specialist!</h1>
        <div
          className={`${classes.topInner} flex_center flex_column_mobile`}
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
