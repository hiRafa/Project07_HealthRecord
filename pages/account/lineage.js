import React, { Fragment, useState } from "react";
import FamilyForm from "../../components/account/lineage/FamilyForm";
import Geneline from "../../components/account/lineage/Geneline";
import Loveline from "../../components/account/lineage/Loveline";
import ProfileTop from "../../components/account/ProfileTop";
import ButtonAll from "../../components/layout-units/ButtonAll";
import SectionContainer from "../../components/layout-units/SectionContainer";
import { togglePrevCurrent } from "../../helpers/general-helper";
import classes from "../../components/account/lineage/Lineage.module.css";

const LineagePage = () => {
  const [geneline, setGeneline] = useState(false);
  const [loveline, setLoveline] = useState(false);

  return (
    <Fragment>
      <ProfileTop />
      <SectionContainer>
        <h2>Lineage Tree</h2>

        <ButtonAll
          text="Gene Tree"
          onClick={() => {
            setGeneline(true);
            setLoveline(false);
          }}
        />
        <ButtonAll
          text="Love Tree"
          onClick={() => {
            setGeneline(false);
            setLoveline(true);
          }}
        />
      </SectionContainer>
      <SectionContainer className={`${classes.lineageGrid}`}>
        {(geneline || loveline) && (
          <FamilyForm geneline={geneline} loveline={loveline} />
        )}
        {geneline && (
          <section>
            <h3>Geneline</h3>
            <Geneline />
          </section>
        )}
        {loveline && (
          <section>
            <h3>Loveline</h3>
            <Loveline />
          </section>
        )}
      </SectionContainer>
    </Fragment>
  );
};

export default LineagePage;
