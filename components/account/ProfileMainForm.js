import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./Account.module.css";

import InputReq from "../layout-units/InputReq";
import InputReqSaved from "../layout-units/InputReqSaved";
import SectionContainer from "../layout-units/SectionContainer";
import useNotification from "../../contexts/notifications-context";
import ButtonAll from "../layout-units/ButtonAll";
import {
  profileFormSubmitHandler,
  togglePrevCurrent,
} from "../../helpers/general-helper";
import InputConversion from "../layout-units/InputConversion";

const ProfileMainForm = ({ dataFromPar }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { successfullNotification, errorNotification } = useNotification();

  const [dataFetched, setDataFetched] = useState({ ...dataFromPar });
  useEffect(() => {
    setDataFetched({ ...dataFromPar });
    console.log("Profile Main Form fetch");
  }, [dataFromPar]);

  // Function that it passed to the children.
  // Used wih onBlur on children inputs
  // Arguments that are set on the children come back here and are set to a state

  const getDataFromChild = (childKey, childValue) => {
    if (childValue === null || childValue === "" || childValue < 0) {
      return;
    }
    setDataFetched({ ...dataFetched, [childKey]: childValue });
  };

  const inputs = [
    {
      type: "text",
      label: "Full Name",
      id: "fullname",
      data: dataFetched.fullname,
    },
    {
      type: "text",
      label: "Current Address",
      id: "address",
      data: dataFetched.address,
    },
    {
      type: "date",
      label: "Date of Birth",
      id: "dob",
      data: dataFetched.dob,
    },
    {
      label: "Current Biological Sex",
      id: "sex",
      data: dataFetched.sex,
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
  ];

  const inputsConvert = [
    {
      type: "number",
      label: "Weight",
      id: "weight",
      measureMain: "Kg",
      measureAlt: "Lbs",
      data: dataFetched.weight,
    },
    {
      type: "number",
      label: "Height",
      id: "height",
      measureMain: "Cm",
      measureAlt: "Ft",
      data: dataFetched.height,
    },
  ];

  return (
    <SectionContainer className={`flex_column ${classes.section_accountinfo}`}>
      <h2>Main</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          !isEditing &&
            profileFormSubmitHandler(
              dataFetched,
              successfullNotification,
              errorNotification
            );
        }}
        className={classes.maininfo_form}
      >
        {isEditing &&
          inputs.map((input) => (
            <InputReq
              input={input}
              key={input.label}
              getDataFromChild={getDataFromChild}
            />
          ))}

        {isEditing &&
          inputsConvert.map((inputConvert) => (
            <InputConversion
              inputConvert={inputConvert}
              key={inputConvert.label}
              getDataFromChild={getDataFromChild}
            />
          ))}

        {!isEditing &&
          inputs.map((input) => <InputReqSaved input={input} key={input.id} />)}
        {!isEditing &&
          inputsConvert.map((input) => (
            <InputReqSaved input={input} key={input.id} />
          ))}

        <ButtonAll
          text={isEditing ? "Save" : "Edit"}
          onClick={() => togglePrevCurrent(setIsEditing)}
          className={`${classes.buttonSave}`}
        />
      </form>
    </SectionContainer>
  );
};

export default ProfileMainForm;
