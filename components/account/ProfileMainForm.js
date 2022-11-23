import React, { Fragment, useRef, useState } from "react";
import classes from "./Account.module.css";

import ButtonAll from "../layout-units/ButtonAll";
import Input from "../layout-units/Input";
import InputRequired from "../layout-units/InputRequired";
import InputSaved from "../layout-units/InputSaved";

const dummy = {
  fullname: "Cassio Albert Feinstein",
  address: "Tokyo Bay Bitch",
  dob: "2022/02/10",
  sex: "undefined",
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

  const switchEdit = () => {
    setIsEditing((prevState) => !prevState);
  };

  const submitHandler = () => {};

  let currentDate = new Date();
  // let userTimeZone = currentDate.getTimezoneOffset() / 60; // return timezone in minutes, divide by 60 for hours
  // const timeElapsed = currentDate.now();
  // const now = new Date(timeElapsed);
  let currentFormatDate = currentDate.toLocaleString();
  // console.log(currentDate.toLocaleString());
  // console.log(currentDate.toTimeString());
  // console.log(currentDate.toString());
  // console.log(currentDate);
  // console.log(currentDate.getDay());
  // console.log(currentDate.getDate());
  // console.log(currentDate.getMonth());
  // console.log(currentDate.getFullYear());
  // console.log(currentDate.getTime());
  // console.log(userTimeZone);
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
    <section>
      <p>{currentFormatDate}</p>
      <form onSubmit={submitHandler}>
        {isEditing ? (
          <Fragment>
            <div className={classes.grid_info}>
              {inputs.map((input) => (
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
              ))}
            </div>

            <ButtonAll text="Save" onClick={switchEdit} />
          </Fragment>
        ) : (
          <Fragment>
            <div className={classes.grid_info}>
              {inputs.map((input) => (
                <InputSaved
                  label={input.label}
                  htmlFor={input.id}
                  dummyData={input.dummyData}
                  className
                  key={input.id}
                />
              ))}
            </div>
            <ButtonAll text="Edit" onClick={switchEdit} />
          </Fragment>
        )}
      </form>
    </section>
  );
};

export default ProfileMainForm;
