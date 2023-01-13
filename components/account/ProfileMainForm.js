import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./Account.module.css";

import InputReq from "../layout-units/InputReq";
import InputReqSaved from "../layout-units/InputReqSaved";
import SectionContainer from "../layout-units/SectionContainer";
import useNotification from "../../contexts/notifications-context";
import ButtonAll from "../layout-units/ButtonAll";
import { togglePrevCurrent } from "../../helpers/general-helper";
import InputConversion from "../layout-units/InputConversion";

const ProfileMainForm = ({ currentUserEmail }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [fetchingData, setFetchingData] = useState(true);
  const { successfullNotification, errorNotification } = useNotification();

  // First Fetch data from api if there is any.
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
  // console.log(dataFetched);

  // if (dataFetched === null || !dataFetched) return <p>Loading...</p>;

  // Function that it passed to the children.
  // Used wih onBlur on children inputs
  // Arguments that are set on the children come back here and are set to a state

  const getDataFromChild = (childKey, childValue) => {
    if (childValue === null || childValue === "" || childValue < 0) {
      return;
    }
    setDataFetched({ ...dataFetched, [childKey]: childValue });
  };
  // console.log(dataFetched);

  const submitHandler = (e) => {
    e.preventDefault();

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
      {fetchingData && <p>Loading...</p>}
      {!fetchingData && (
        <form onSubmit={submitHandler} className={classes.maininfo_form}>
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
            inputs.map((input) => (
              <InputReqSaved input={input} key={input.id} />
            ))}
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
      )}
    </SectionContainer>
  );
};

export default ProfileMainForm;
