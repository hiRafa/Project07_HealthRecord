import React, { Fragment, useEffect, useState } from "react";
import FamilyForm from "../../components/account/lineage/FamilyForm";
import Geneline from "../../components/account/lineage/Geneline";
import Loveline from "../../components/account/lineage/Loveline";
import ProfileTop from "../../components/account/ProfileTop";
import ButtonAll from "../../components/layout-units/ButtonAll";
import SectionContainer from "../../components/layout-units/SectionContainer";
import { togglePrevCurrent } from "../../helpers/general-helper";
import classes from "../../components/account/lineage/Lineage.module.css";
import { useSession } from "next-auth/react";




const LineagePage = () => {
  const [geneline, setGeneline] = useState(false);
  const [loveline, setLoveline] = useState(false);
  const [userLoveline, setUserLoveline] = useState(false);
  const [userGeneline, setUserGeneline] = useState(false);
  const [userData, setUserData] = useState(false);

  const { data: session, status } = useSession();
  const [currentUserEmail, setCurrentUserEmail] = useState();
  const [dataFetched, setDataFetched] = useState({});

  useEffect(() => {
    if (session) setCurrentUserEmail(session.user.email);

    if (currentUserEmail)
      fetch(`/api/userData/${currentUserEmail}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // then extracting the data, the data was stored as { userData: userData}
          setUserLoveline({ ...data.userData.loveline });
          setUserGeneline({ ...data.userData.geneline });
          setUserData({ fullname: data.userData.fullname });
          // console.log(dataFetched.geneline)
          // console.log(dataFetched.loveline)
        });
  }, [session, currentUserEmail]);

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
          <FamilyForm geneline={geneline} loveline={loveline} userGeneline={userGeneline} />
        )}
        {geneline && (
          <section>
            <h3>Geneline</h3>
            <Geneline userGeneline={userGeneline} userData={userData}/>
          </section>
        )}
        {loveline && (
          <section>
            <h3>Loveline</h3>
            <Loveline userLoveline={userLoveline} />
          </section>
        )}
      </SectionContainer>
    </Fragment>
  );
};

export default LineagePage;
