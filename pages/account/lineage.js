import React, { Fragment } from "react";
import ProfileTop from "../../components/account/ProfileTop";
import SectionContainer from "../../components/layout-units/SectionContainer";

const LineagePage = () => {
  return (
    <Fragment>
      <ProfileTop />
      <SectionContainer>
        <h2>Lineage Tree</h2>
      </SectionContainer>
    </Fragment>
  );
};

export default LineagePage;
