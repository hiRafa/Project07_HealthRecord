import { useSession } from "next-auth/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import useNotification from "../../../contexts/notifications-context";
import { profileFormSubmitHandler } from "../../../helpers/general-helper";
import ButtonAll from "../../layout-units/ButtonAll";
import classes from "./Lineage.module.css";
import { geneOptions, loveOptions } from "../../../helpers/data-helper";

const FamilyForm = ({ geneline, loveline, userGeneline }) => {
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
      console.log(geneline, loveline);
      dataFetched.geneline = true;
    } else if (loveline) {
      console.log(geneline, loveline);
      dataFetched.loveline = true;
    }

    profileFormSubmitHandler(
      dataFetched,
      successfullNotification,
      errorNotification
    );
  };

  let geneOptionsFilter = [];
  Object.keys(userGeneline).forEach((key) => {
    geneOptionsFilter.push(userGeneline[key].relationship);
  });
  let geneOptionsDifference = geneOptions.filter((x) => {
    if (x === "child" || x === "grandchild") {
      return true;
    } else if (!geneOptionsFilter.includes(x)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <form className={`${classes.form} `} onSubmit={submitHandler}>
      <label>Relationship*</label>
      <select
        ref={relationshipRef}
        className={`flex_center ${classes.select}`}
        required
      >
        {geneline &&
          geneOptionsDifference.map((option) => (
            <option value={option} key={option}>{option}</option>
          ))}
        {loveline &&
          loveOptions.map((option) => <option value={option} key={option}>{option}</option>)}
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
