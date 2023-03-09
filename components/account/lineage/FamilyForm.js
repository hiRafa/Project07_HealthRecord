import { useSession } from "next-auth/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import useNotification from "../../../contexts/notifications-context";
import { profileFormSubmitHandler } from "../../../helpers/general-helper";
import ButtonAll from "../../layout-units/ButtonAll";
import classes from "./Lineage.module.css";
const geneOptions = [
  "mother",
  "father",
  "grandmother(mother)",
  "grandmother(father)",
  "grandfather(mother)",
  "grandfather(father)",
  "child",
  "grandchild",
];

const loveOptions = [
  "family",
  "friend",
  "daddy",
  "mamma",
  "grandma",
  "grandpa",
  "brother",
  "sister",
  "sibling",
  "cousin",
  "aunty",
  "uncle",
  "niece",
  "nephew",
  "child",
  "grandchild",
  "master",
  "pupil",
];

const FamilyForm = ({ geneline, loveline }) => {
  // const theiremail = useRef();
  const nameRef = useRef();
  const relationshipRef = useRef();
  const disordersRef = useRef(null);
  const strengthsRef = useRef(null);

  const { successfullNotification, errorNotification } = useNotification();
  const { data: session, status } = useSession();
  const [currentUserEmail, setCurrentUserEmail] = useState();
  useEffect(() => {
    if (session) setCurrentUserEmail(session.user.email);
  }, [session, currentUserEmail]);

  const submitHandler = (e) => {
    e.preventDefault();
    let dataFetched = {
      email: currentUserEmail,
      member: nameRef.current.value,
      relationship: relationshipRef.current.value,
      disorders: disordersRef.current.value,
      strengths: strengthsRef.current.value,
    };
    if (geneline) {
      console.log(geneline, loveline)
      dataFetched.geneline = true
    } else if (loveline) {
      console.log(geneline, loveline)
      dataFetched.loveline = true
    }

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
        <input type="text" ref={disordersRef} className={``} />
        <label htmlFor={"healthstrengths"} className={`${classes.label}`}>
          Health Strengths
        </label>
        <input type="text" ref={strengthsRef} className={``} />
      </Fragment>
      <ButtonAll text="Register Family Member" />
      <p>*required fields</p>
      <p>Connect accounts functionality to be implemented...</p>
    </form>
  );
};

export default FamilyForm;
