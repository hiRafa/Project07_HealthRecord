import React, { Fragment, useRef, useState } from "react";
import classes from "./Account.module.css";

import ButtonAll from "../layout-units/ButtonAll";
import InputRequired from "../layout-units/InputRequired";
import InputSaved from "../layout-units/InputSaved";
import SectionContainer from "../layout-units/SectionContainer";
import { togglePrevCurrent } from "../../helpers/general-helper";

const dummy = {
  fullname: "Cassio Albert Feinstein",
  address: "Tokyo Bay Bitch",
  dob: "2022/02/10",
  sex: "bicha",
  weight: "80",
  height: "172",
};

const ProfileMainForm = () => {
  const [isEditing, setIsEditing] = useState(false);

  const fullNameInputRef = useRef();
  const addressInputRef = useRef();
  const dobInputRef = useRef();
  const sexInputRef = useRef();
  const weightInputRef = useRef();
  const heightInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const inputs = [
    {
      type: "text",
      label: "Full Name",
      id: "fullname",
      reference: fullNameInputRef,
      dummyData: dummy.fullname,
    },
    {
      type: "text",
      label: "Current Address",
      id: "address",
      reference: addressInputRef,
      dummyData: dummy.address,
    },
    {
      type: "date",
      label: "Date of Birth",
      id: "dob",
      reference: dobInputRef,
      dummyData: dummy.dob,
    },
    {
      label: "Current Biological Sex",
      id: "sex",
      reference: sexInputRef,
      dummyData: dummy.sex,
      list: "sex",
      options: [
        "Female",
        "Male",
        "Female Transitioning",
        "Male Transitioning",
        "Female Trans",
        "Male Trans",
      ],
    },
    {
      type: "number",
      label: "Weight",
      id: "weight",
      reference: weightInputRef,
      dummyData: dummy.weight,
    },
    {
      type: "number",
      label: "Height",
      id: "height",
      reference: heightInputRef,
      dummyData: dummy.height,
    },
  ];

  return (
    <SectionContainer className={`flex_column ${classes.section_accountinfo}`}>
      <h2>Main</h2>
      <form onSubmit={submitHandler} className={classes.maininfo_form}>
        {isEditing
          ? inputs.map((input) => (
              <InputRequired
                type={input.type}
                label={input.label}
                htmlFor={input.id}
                id={input.id}
                reference={input.reference}
                dummyData={input.dummyData}
                key={input.id}
                //only for selections
                list={input.list}
                options={input.options}
              />
            ))
          : inputs.map((input) => (
              <InputSaved
                label={input.label}
                htmlFor={input.id}
                dummyData={input.dummyData}
                className
                key={input.id}
              />
            ))}
      </form>
      <ButtonAll
        text={isEditing ? "Save" : "Edit"}
        onClick={() => togglePrevCurrent(setIsEditing)}
        className={`${classes.buttonSave}`}
      />
    </SectionContainer>
  );
};

export default ProfileMainForm;
