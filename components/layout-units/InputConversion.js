import React, { Fragment, useEffect, useRef, useState } from "react";
import { togglePrevCurrent } from "../../helpers/general-helper";
import classes from "./LayoutUnits.module.css";

const InputConversion = ({ inputConvert, getDataFromChild }) => {
  const { label, htmlFor, type, id, data } = inputConvert;

  const inputRef = useRef();
  const inputRef2nd = useRef();
  let [weightKg, setWeightKg] = useState();
  let [weightLbs, setWeightLbs] = useState();
  let [heightCm, setHeightCm] = useState();
  let [heightFt, setHeightFt] = useState();

  useEffect(() => {
    if (id === "weight") {
      setWeightLbs(Math.floor(+data * 2.2046));
      setWeightKg(+data);
    }
    if (id === "height") {
      setHeightFt(Math.floor(+data * 0.032808));
      setHeightCm(+data);
    }
  }, [data]);

  const [isEditingMain, setIsEditingMain] = useState(true);
  // console.log(data);

  let labelCustom, inputCustom;

  // LABEL
  labelCustom = (
    <label htmlFor={htmlFor} className={`${classes.label} `}>
      {label}
    </label>
  );

  // Convert function when typing
  const convert = () => {
    if (isEditingMain && id === "height") {
      setHeightFt(Math.floor(+inputRef.current.value * 0.032808));
      setHeightCm(+inputRef.current.value);
    } else if (!isEditingMain && id === "height") {
      setHeightCm(Math.floor(+inputRef2nd.current.value / 0.032808));
      setHeightFt(+inputRef2nd.current.value);
    } else if (isEditingMain && id === "weight") {
      setWeightLbs(Math.floor(+inputRef.current.value * 2.2046));
      setWeightKg(+inputRef.current.value);
    } else if (!isEditingMain && id === "weight") {
      setWeightKg(Math.floor(+inputRef2nd.current.value / 2.2046));
      setWeightLbs(+inputRef2nd.current.value);
    }
  };

  // Setting up measures states by props id
  let measureMain,
    measureMainConvert,
    measureAlt,
    measureAltConvert,
    default2nd,
    dataToParent;
  if (id === "weight") {
    measureMain = <p>Kg</p>;
    measureMainConvert = <p>{`${weightLbs} Lbs`}</p>;
    measureAlt = <p>Lbs</p>;
    measureAltConvert = <p>{`${weightKg} Kg`}</p>;
    default2nd = weightLbs;
    dataToParent = weightKg;
  } else if (id === "height") {
    measureMain = <p>Cm</p>;
    measureMainConvert = <p>{`${heightFt} Ft`}</p>;
    measureAlt = <p>Ft</p>;
    measureAltConvert = <p>{`${heightCm} Cm`}</p>;
    default2nd = heightFt;
    dataToParent = heightCm;
  }

  // button used twice
  const buttonConvert = (
    <button
      onClick={() => {
        togglePrevCurrent(setIsEditingMain);
      }}
      className={classes.buttonConvert}
    >
      <span className="material-symbols-outlined">compare_arrows</span>
    </button>
  );

  // Final INPUT form
  const inputClasses = `${classes.input} ${classes.inputConvert}`;
  inputCustom = (
    <div className={`flex_start`}>
      {isEditingMain && (
        <div className={`${classes.inputConvertContainer}`}>
          <input
            type={type}
            id={id}
            defaultValue={data ? data : ""}
            // required
            ref={inputRef}
            className={inputClasses}
            onChange={convert}
            onBlur={() => {
              getDataFromChild(id, inputRef.current.value);
              console.log(`outside of input`);
            }}
          />
          {measureMain}
          {buttonConvert}
          {measureMainConvert}
        </div>
      )}

      {!isEditingMain && (
        <div className={`${classes.inputConvertContainer}`}>
          <input
            type={type}
            id={id}
            defaultValue={default2nd}
            ref={inputRef2nd}
            onChange={convert}
            // required
            onBlur={() => {
              getDataFromChild(id, dataToParent);
            }}
            className={inputClasses}
          />
          {measureAlt}
          {buttonConvert}
          {measureAltConvert}
        </div>
      )}
    </div>
  );

  return (
    <Fragment>
      {labelCustom}
      {inputCustom}
    </Fragment>
  );
};

export default InputConversion;
