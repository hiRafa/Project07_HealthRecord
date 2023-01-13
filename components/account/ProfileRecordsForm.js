import React, { useEffect, useRef, useState } from "react";
import { togglePrevCurrent } from "../../helpers/general-helper";
import ButtonAll from "../layout-units/ButtonAll";
import InputFieldsetReq from "../layout-units/InputFieldsetReq";
import SectionContainer from "../layout-units/SectionContainer";
import useNotification from "../../contexts/notifications-context";

import classes from "./Account.module.css";

const ProfileRecordsForm = ({ currentUserEmail }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [fetchingData, setFetchingData] = useState(true);
  const { successfullNotification, errorNotification } = useNotification();

  const [dataFetched, setDataFetched] = useState({});
  useEffect(() => {
    if (currentUserEmail)
      fetch(`/api/userData/${currentUserEmail}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // then extracting the data, the data was stored as { userData: userData}
          // set the data to a local component state#
          // console.log(data.userData);
          setDataFetched({ ...data.userData });
          setFetchingData(false);
        });
  }, [currentUserEmail]);

  const getDataFromChild = (childKey, childValue) => {
    if (childValue === null || childValue === "" || childValue < 0) {
      return;
    }
    setDataFetched({ ...dataFetched, [childKey]: childValue });
    // console.log({ [childKey]: childValue });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(dataFetched);
    // By clicking on save it wont be editing anymore, so the fetch will be activated
    if (!isEditing) {
      fetch("/api/postUserDataFromForms", {
        method: "POST",
        body: JSON.stringify({
          ...dataFetched,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return response.json().then((data) => {
            errorNotification(data.message || "Something went wrong!");
          });
        })
        .then(
          // (data) => console.log(data),
          successfullNotification("Success!", "Your comment was registered!")
        )
        .catch((error) => errorNotification("Error!", error));
      console.log(dataFetched);
    }
  };

  const inputs = [
    {
      legend: "Smoke tabaco?",
      data: dataFetched.tabaco,
      name: "tabaco",
    },
    {
      legend: "Pregnant?",
      data: dataFetched.pregnant,
      name: "pregnant",
    },
    {
      legend: "Are you on drugs?",
      data: dataFetched.drugs,
      name: "drugs",
    },
  ];

  return (
    <SectionContainer className={`flex_column ${classes.section_noyes}`}>
      <h3>No or Yes Questions</h3>
      <form
        onSubmit={submitHandler}
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
