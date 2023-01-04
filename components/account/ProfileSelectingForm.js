import React, { Fragment, useEffect, useRef, useState } from "react";
import ButtonAll from "../layout-units/ButtonAll";
import InputSelectReq from "../layout-units/InputSelectReq";
import SectionContainer from "../layout-units/SectionContainer";

import classes from "./Account.module.css";

const ProfileSelectingForm = () => {
  const inputs = [
    {
      label: "Allergies?",
      id: "allergies",
      dummyData: ["Almond", "Cat Fur"],
      select: "allergies",
      options: [
        "Dog Fur",
        "Cat Fur",
        "Pine Tree Pollen",
        "Milk",
        "Lactose",
        "Flour",
      ],
    },
    {
      label: "Any health conditions?",
      id: "conditions",
      dummyData: ["Lung", "Altism"],
      select: "conditions",
      options: ["Heart Problems", "Altism", "Lung", "Osteoporosis", "Diabetes"],
    },
  ];

  return (
    <SectionContainer className={` ${classes.section_accountinfo}`}>
      <h3>Options Questions</h3>
      {inputs.map((input) => (
        <InputSelectReq input={input} key={input.id} />
      ))}
    </SectionContainer>
  );
};

export default ProfileSelectingForm;
