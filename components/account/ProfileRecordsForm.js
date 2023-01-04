import React, { useRef, useState } from "react";
import { togglePrevCurrent } from "../../helpers/general-helper";
import ButtonAll from "../layout-units/ButtonAll";
import InputFieldsetReq from "../layout-units/InputFieldsetReq";
import SectionContainer from "../layout-units/SectionContainer";

import classes from "./Account.module.css";

const dummy = {
  tabaco: false,
  pregnant: true,
  drugs: false,
};

const ProfileRecordsForm = () => {
  const [isEditing, setIsEditing] = useState(false);

  // const medsYesInputRef = useRef();
  // const medsNoInputRef = useRef();
  // const pregnantYesInputRef = useRef();
  // const pregnantNoInputRef = useRef();
  // const sexInputRef = useRef();
  // const weightInputRef = useRef();
  // const heightInputRef = useRef();
  const YesOrNoRef1 = useRef([]);
  const YesOrNoRef2 = useRef([]);
  const YesOrNoRef3 = useRef([]);
  // 0 is no, 1 is yes
  const switchYesOrNo = () => {
    setIsEditing((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    // e.preventDefault();

    // console.log(YesOrNoRef1.current);
    // console.log(YesOrNoRef2.current);
    const no = false;
    const yes = true;
    YesOrNoRef1.current[0].checked &&
      console.log("Currently intaking any medication?:" + no);
    YesOrNoRef1.current[1].checked &&
      console.log("Currently intaking any medication?:" + yes);
    YesOrNoRef2.current[0].checked && console.log("Pregnant?:" + no);
    YesOrNoRef2.current[1].checked && console.log("Pregnant?:" + yes);
  };

  return (
    <SectionContainer className={`flex_column ${classes.section_noyes}`}>
      <h3>No or Yes Questions</h3>
      <form
        onSubmit={submitHandler}
        className={`flex_column ${classes.noyes_form}`}
      >
        <InputFieldsetReq
          legend="Smoke tabaco?"
          name="intakingMeds"
          classNameInput={classes.input_radio}
          onClick={switchYesOrNo}
          dummyData={dummy.tabaco}
          reference={YesOrNoRef1}
        />

        <InputFieldsetReq
          legend="Pregnant?"
          name="pregnant"
          classNameInput={classes.input_radio}
          onClick={switchYesOrNo}
          dummyData={dummy.pregnant}
          reference={YesOrNoRef2}
        />

        <InputFieldsetReq
          legend="Are you on drugs?"
          name="drugs"
          classNameInput={classes.input_radio}
          onClick={switchYesOrNo}
          dummyData={dummy.drugs}
          reference={YesOrNoRef3}
        />

        <ButtonAll
          text="Save"
          onClick={() => togglePrevCurrent(setIsEditing)}
          className={`${classes.buttonSave}`}
        />
      </form>
    </SectionContainer>
  );
};

export default ProfileRecordsForm;
