import React, { useRef } from "react";
import ButtonAll from "../layout-units/ButtonAll";
import InputFieldsetReq from "../layout-units/InputFieldsetReq";
import classes from "./Account.module.css";

const dummy = {
  meds: false,
  pregnant: true,
  dob: "2022/02/10",
  sex: "undefined",
  weight: "80",
  height: "172",
};

const ProfileRecordsForm = () => {
  // const medsYesInputRef = useRef();
  // const medsNoInputRef = useRef();
  // const pregnantYesInputRef = useRef();
  // const pregnantNoInputRef = useRef();
  // const sexInputRef = useRef();
  // const weightInputRef = useRef();
  // const heightInputRef = useRef();
  const medsYesOrNoRef = useRef([]);
  const pregnantYesOrNoRef = useRef([]);
  // 0 is no, 1 is yes
  const switchYesOrNo = () => {
    setIsEditing((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(medsYesOrNoRef.current);
    console.log(pregnantYesOrNoRef.current);
    const no = false;
    const yes = true;
    medsYesOrNoRef.current[0].checked &&
      console.log("Currently intaking any medication?:" + no);
    medsYesOrNoRef.current[1].checked &&
      console.log("Currently intaking any medication?:" + yes);
    pregnantYesOrNoRef.current[0].checked && console.log("Pregnant?:" + no);
    pregnantYesOrNoRef.current[1].checked && console.log("Pregnant?:" + yes);

  };

  return (
    <section>
      <h2>No or Yes</h2>
      <form onSubmit={submitHandler}>
        <InputFieldsetReq
          legend="Currently intaking any medication?"
          name="intakingMeds"
          classNameInput={classes.input_radio}
          onClick={switchYesOrNo}
          dummyData={dummy.meds}
          reference={medsYesOrNoRef}
        />
        {dummy.meds && <p>Health Problem</p>}
        {dummy.meds && <p>Medication</p>}
        <InputFieldsetReq
          legend="Pregnant?"
          name="pregnant"
          classNameInput={classes.input_radio}
          onClick={switchYesOrNo}
          dummyData={dummy.pregnant}
          reference={pregnantYesOrNoRef}
        >
          {dummy.meds && <p>Health Problem</p>}
          {dummy.meds && <p>Medication</p>}
        </InputFieldsetReq>
        <ButtonAll text="Save" />
      </form>
    </section>
  );
};

export default ProfileRecordsForm;
