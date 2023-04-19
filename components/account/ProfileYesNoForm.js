import React, { useEffect, useRef, useState } from "react";
import {
  profileFormSubmitHandler,
  togglePrevCurrent,
} from "../../helpers/general-helper";
import ButtonAll from "../layout-units/ButtonAll";
import InputFieldsetReq from "../layout-units/InputFieldsetReq";
import SectionContainer from "../layout-units/SectionContainer";
import useNotification from "../../contexts/notifications-context";

import classes from "./Account.module.css";

const ProfileRecordsForm = ({ dataFromPar }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { successfullNotification, errorNotification } = useNotification();

  const [dataFetched, setDataFetched] = useState({});
  useEffect(() => {
    setDataFetched({ ...dataFromPar });
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
      legend: "Smoke tabaco?",
      data: dataFetched.tabaco,
      name: "tabaco",
      icon: "smoking_rooms",
    },
    {
      legend: "Pregnant?",
      data: dataFetched.pregnant,
      name: "pregnant",
      icon: "breastfeeding",
    },
    {
      legend: "Are you on drugs?",
      data: dataFetched.drugs,
      name: "drugs",
      icon: "mixture_med",
    },
  ];

  return (
    <SectionContainer className={`flex_column consult_border`}>
      <h3>No or Yes Questions</h3>
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
        className={`flex_column ${classes.noyes_form}`}
      >
        {inputs.map((input) => (
          <InputFieldsetReq
            input={input}
            getDataFromChild={getDataFromChild}
            classNameInput={classes.input_radio}
            key={input.name}
            isEditing={isEditing}
          />
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

export default ProfileRecordsForm;
