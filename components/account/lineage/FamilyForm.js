import React, { Fragment, useEffect, useRef, useState } from "react";
import ButtonAll from "../../layout-units/ButtonAll";
import classes from "./Lineage.module.css";
const geneOptions = [
  "mother",
  "father",
  "grandmother",
  "grandfather",
  "sibling",
  "child",
];

const loveOptions = [
  "dad",
  "mom",
  "grandma",
  "grandpa",
  "brother",
  "sister",
  "sibling",
  "cousin",
  "aunty",
  "uncle",
  "friend",
  "custom",
];

const FamilyForm = ({ geneline, loveline }) => {
  // const theiremail = useRef();
  const nameRef = useRef();
  const relationshipRef = useRef();
  const disordersRef = useRef();
  const strengthsRef = useRef();

  const [currentUserEmail, setCurrentUserEmail] = useState();
  const [dataFetched, setDataFetched] = useState();
  useEffect(() => {
    if (loveline) {
      setDataFetched({
        email: currentUserEmail,
        loveline: {
          [nameRef?.current?.value]: {
            relationship: relationshipRef?.current?.value,
            disorders: disordersRef?.current?.value,
            strengths: strengthsRef?.current?.value,
          },
        },
      });
    } else if (geneline) {
    }
  }, [nameRef, relationshipRef, relationshipRef, disordersRef, strengthsRef]);

  const submitHandler = (e) => {
    e.preventDefault();

    profileFormSubmitHandler(
      dataFetched,
      successfullNotification,
      errorNotification
    );
  };

  return (
    <form className={`${classes.form} `} onSubmit={submitHandler}>
      <label>Relationship*</label>
      <select
        ref={relationshipRef}
        className={`flex_center ${classes.select}`}
        required
      >
        {geneline &&
          geneOptions.map((option) => <option value={option}>{option}</option>)}
        {loveline &&
          loveOptions.map((option) => <option value={option}>{option}</option>)}
      </select>
      <div>
        <label htmlFor={"name"} className={`${classes.label}`}>
          Name (given or nickname)*
        </label>
        <input type="text" ref={nameRef} className={``} required />
      </div>
      <Fragment>
        <label htmlFor={"healthdisorder"} className={`${classes.label}`}>
          Health Disorders
        </label>
        <input type="text" ref={disordersRef} required className={``} />
        <label htmlFor={"healthstrengths"} className={`${classes.label}`}>
          Health Strengths
        </label>
        <input type="text" ref={strengthsRef} required className={``} />
      </Fragment>
      <ButtonAll text="Register Family Member" />
      <p>*required fields</p>
      <p>Connect accounts functionality to be implemented...</p>
    </form>
  );
};

export default FamilyForm;
