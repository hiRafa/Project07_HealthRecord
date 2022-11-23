import React, { useRef } from "react";
import ButtonAll from "../layout-units/ButtonAll";
import InputRequired from "../layout-units/InputRequired";
import classes from "./Account.module.css";

const dummy = {
  meds: true,
  address: "Tokyo Bay Bitch",
  dob: "2022/02/10",
  sex: "undefined",
  weight: "80",
  height: "172",
};

const ProfileRecordsForm = () => {
  const yesORnoInputRef = useRef();
  const addressInputRef = useRef();
  const dobInputRef = useRef();
  const sexInputRef = useRef();
  const weightInputRef = useRef();
  const heightInputRef = useRef();

  const switchYesOrNo = () => {
    setIsEditing((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.prevent.Default();
    console.log(yesORnoInputRef.current.value);
  };

  return (
    <section>
      <h2></h2>
      <form onSubmit={submitHandler}>
        <div>
          <fieldset>
            <legend>
              <h2>Currently intaking any medication?</h2>
            </legend>
            <InputRequired
              type="radio"
              htmlFor="true"
              value="true"
              id="true"
              label="true"
              name="intakingMeds"
              classNameInput={classes.input_radio}
              onClick={switchYesOrNo}
              dummyData={dummy.meds}
            />
            {dummy.meds && <p>Health Problem</p>}
            {dummy.meds && <p>Medication</p>}
          </fieldset>
        </div>
        {/* <h3>Have you ever had any of the following health problems?</h3>
        <div>
          <label htmlFor="address">Current Address</label>
          <input type="address" id="address" required ref={addressInputRef} />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input type="dob" id="dob" required ref={dobInputRef} />
        </div> */}
        <ButtonAll text="Save" />
      </form>
    </section>
  );
};

export default ProfileRecordsForm;
