import React, { Fragment, useRef, useState } from "react";
import classes from "./Account.module.css";

import ButtonAll from "../layout-units/ButtonAll";
import InputRequired from "../layout-units/InputRequired";
import InputSaved from "../layout-units/InputSaved";
import SectionContainer from "../layout-units/SectionContainer";
import { togglePrevCurrent } from "../../helpers/general-helper";
import { useUser } from "../../helpers/firebaseData-helper";
import { useSession } from "next-auth/react";
import useNotification from "../../contexts/notifications-context";

const dummy = {
  fullname: "Cassio Albert Feinstein",
  address: "Tokyo Bay Bitch",
  dob: "02/10/2022",
  sex: "bicha",
  weight: "80",
  height: "172",
};

const ProfileMainForm = () => {
  const { userData, isLoading, isError } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const { successfullNotification, errorNotification } = useNotification();

  const fullNameInputRef = useRef();
  const addressInputRef = useRef();
  const dobInputRef = useRef();
  const sexInputRef = useRef();
  const weightInputRef = useRef();
  const heightInputRef = useRef();

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
  const { data: session, status } = useSession();
  // console.log(session.user.email);
  let currentUserEmail;
  if (session) currentUserEmail = session.user.email;
  // always initially have the user data, even if it is empty
  // const [dataFromChild, setDataFromChild] = useState({ ...dummy });

  let dataFromChild = {};
  if (dummy) {
    dataFromChild = { ...dummy };
  } else if (userData) {
    dataFromChild = { ...userData.formsample };
  }
  // console.log({ ...dataFromChild });

  const getDataFromChild = (childKey, childValue) => {
    Object.keys(dataFromChild).forEach((key) => {
      // console.log(key);
      // console.log(dataFromChild[key]);
      // if values are not invalid
      if (childValue === null || childValue === "" || childValue < 0) {
        // console.log(dataFromChild);
        return;
      }
      // else if (Object.keys(dataFromChild).length === 0) {
      // dataFromChild = {
      //   ...dataFromChild,
      //   [childKey]: childValue,
      // };
      // }
      // if both keys are equal, then replace value
      else if (key === childKey) {
        dataFromChild[key] = childValue;
        // console.log(dataFromChild);
      }
    });
  };
  // console.log({ ...dataFromChild });

  const submitHandler = (e) => {
    e.preventDefault();

    fetch("/api/userDataForms", {
      method: "POST",
      body: JSON.stringify({
        currentUserEmail,
        ...dataFromChild,
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
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then(
        // (data) => console.log(data),

        successfullNotification("Success!", "Your comment was registered!")
      )
      .catch((error) => errorNotification("Error!", error));
    // onAddComment({
    //   email: enteredEmail,
    //   name: enteredName,
    //   comment: enteredComment,
    // });
    fetch("/api/userDataForms")
      .then((response) => {
        response.json();
      })
      // then extracting the data, the data was stored as { comments: documents}
      .then((data) => {
        // set the data to a local component state#
        console.log(data);
        // setComments(data.comments);
        // setIsFetchingComments(false);
      });
  };

  return (
    <SectionContainer className={`flex_column ${classes.section_accountinfo}`}>
      <h2>Main</h2>
      <form onSubmit={submitHandler} className={classes.maininfo_form}>
        {inputs.map((input) => (
          <InputRequired
            input={input}
            key={input.label}
            getDataFromChild={getDataFromChild}
            dummy={dummy}
          />
        ))}

        {/* {isEditing
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
                getDataFromChild={getDataFromChild}
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
            ))} */}
        <button>Collect Data from Children</button>
      </form>
      {/* <button onClick={() => getDataFromChild()}></button> */}
      {/* <ButtonAll
        text={isEditing ? "Save" : "Edit"}
        onClick={() => togglePrevCurrent(setIsEditing)}
        className={`${classes.buttonSave}`}
      /> */}
    </SectionContainer>
  );
};

export default ProfileMainForm;
