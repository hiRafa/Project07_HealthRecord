import React, { Fragment } from "react";
import DNA from "../../components/account/dna/DNA";
import ProfileTop from "../../components/account/ProfileTop";
import SectionContainer from "../../components/layout-units/SectionContainer";

const DNAPage = () => {
  return (
    <Fragment>
      <ProfileTop />
      <SectionContainer className={"consult_border consult_border-bottom"}>
        <h2>DNA</h2>
        <DNA/>
      </SectionContainer>
    </Fragment>
  );
};

export default DNAPage;
