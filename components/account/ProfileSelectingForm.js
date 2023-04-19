import React, { useEffect, useState } from "react";
import ButtonAll from "../layout-units/ButtonAll";
import InputSelectReq from "../layout-units/InputSelectReq";
import SectionContainer from "../layout-units/SectionContainer";

import classes from "./Account.module.css";

const ProfileSelectingForm = ({ dataFromPar }) => {
  const [dataFetched, setDataFetched] = useState({});
  useEffect(() => {
    setDataFetched({ ...dataFromPar });
    console.log("Profile Main Form fetch");
  }, [dataFromPar]);

  const inputs = [
    {
      label: "Allergies?",
      id: "allergies",
      data: dataFetched.allergies,
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
      data: dataFetched.conditions,
      options: [
        "Heart Problems",
        "Lung",
        "Osteoporosis",
        "Diabetes",
        "High Blood Pressure",
      ],
    },
    {
      label: "Neurodiverse?",
      id: "neurodiversities",
      data: dataFetched.neurodiversities,
      options: ["ADHD", "Altism", "Dyslexia", "Alzheimer", "Parkinson"],
    },
  ];

  return (
    <SectionContainer className={`consult_border consult_border-bottom`}>
      <h3>Options Questions</h3>

      {inputs.map((input) => (
        <InputSelectReq
          input={input}
          key={input.id}
          dataFetched={dataFetched}
        />
      ))}
    </SectionContainer>
  );
};

export default ProfileSelectingForm;
