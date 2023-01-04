import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./Account.module.css";

import InputRequired from "../layout-units/InputRequired";
import InputSaved from "../layout-units/InputSaved";
import SectionContainer from "../layout-units/SectionContainer";
import { useUser } from "../../helpers/firebaseData-helper";
import { useSession } from "next-auth/react";
import useNotification from "../../contexts/notifications-context";
import ButtonAll from "../layout-units/ButtonAll";
import { togglePrevCurrent } from "../../helpers/general-helper";

const ProfileMainForm = ({ currentUserEmail }) => {
  const { userData, isLoading, isError } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const { successfullNotification, errorNotification } = useNotification();

  const fullNameInputRef = useRef();
  const addressInputRef = useRef();
  const dobInputRef = useRef();
  const sexInputRef = useRef();
  const weightInputRef = useRef();
  const heightInputRef = useRef();

  const [dataFetched, setDataFetched] = useState({});
  let dataFromChild = {};
  // useEffect(() => {
  //   fetch(`/api/userData/${currentUserEmail}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // then extracting the data, the data was stored as { userData: userData}
  //       // set the data to a local component state#
  //       dataFromChild = { ...data.userData };
  //       // setIsFetchingComments(false);
  //     });
  // }, [dataFromChild, dataFetched]);
  // console.log(dataFetched);

  // always initially have the user data, even if it is empty
  // const [dataFromChild, setDataFromChild] = useState({ ...dummy });
  // if (userData) {
  //   dataFromChild = { ...userData.formsample, currentUserEmail };
  // }

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

  const submitHandler = (e) => {
    e.preventDefault();

    // fetch("/api/userDataForms", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     currentUserEmail,
    //     ...dataFromChild,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }

    //     return response.json().then((data) => {
    //       errorNotification(data.message || "Something went wrong!");
    //     });
    //   })
    //   .then(
    //     // (data) => console.log(data),
    //     successfullNotification("Success!", "Your comment was registered!")
    //   )
    //   .catch((error) => errorNotification("Error!", error));

    fetch(`/api/userData/${currentUserEmail}`)
      .then((response) => {
        return response.json();
      })
      // then extracting the data, the data was stored as { comments: documents}
      .then((data) => {
        // set the data to a local component state#
        dataFromChild = { ...data.userData };
        console.log(data);
        // setIsFetchingComments(false);
      });
  };

  const fetchHandler = () => {
    fetch(`/api/userData/${currentUserEmail}`)
      .then((response) => {
        return response.json();
      })
      // then extracting the data, the data was stored as { comments: documents}
      .then((data) => {
        // set the data to a local component state#
        setDataFetched({ ...data.userData });
        console.log({ ...data.userData });
        // setIsFetchingComments(false);
      });
    console.log(dataFetched);
  };

  const inputs = [
    {
      type: "text",
      label: "Full Name",
      id: "fullname",
      reference: fullNameInputRef,
      data: dataFromChild.fullname,
    },
    {
      type: "text",
      label: "Current Address",
      id: "address",
      reference: addressInputRef,
      data: dataFromChild.address,
    },
    {
      type: "date",
      label: "Date of Birth",
      id: "dob",
      reference: dobInputRef,
      data: dataFromChild.dob,
    },
    {
      label: "Current Biological Sex",
      id: "sex",
      reference: sexInputRef,
      data: dataFromChild.sex,
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
      data: dataFromChild.weight,
    },
    {
      type: "number",
      label: "Height",
      id: "height",
      reference: heightInputRef,
      data: dataFromChild.height,
    },
  ];

  return (
    <SectionContainer className={`flex_column ${classes.section_accountinfo}`}>
      <h2>Main</h2>
      <form onSubmit={submitHandler} className={classes.maininfo_form}>
        {isEditing
          ? inputs.map((input) => (
              <InputRequired
                input={input}
                key={input.label}
                getDataFromChild={getDataFromChild}
              />
            ))
          : inputs.map((input) => (
              <InputSaved
                label={input.label}
                htmlFor={input.id}
                data={input.data}
                className
                key={input.id}
              />
            ))}

        <button>Collect Data from Children</button>
      </form>
      <ButtonAll
        text={isEditing ? "Save" : "Edit"}
        onClick={() => togglePrevCurrent(setIsEditing)}
        className={`${classes.buttonSave}`}
      />
      <button onClick={fetchHandler}>fetch</button>
    </SectionContainer>
  );
};

export default ProfileMainForm;
