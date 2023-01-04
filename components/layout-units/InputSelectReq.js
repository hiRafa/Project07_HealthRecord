import React, { Fragment, useRef, useState } from "react";
import ButtonAll from "./ButtonAll";
import classes from "./LayoutUnits.module.css";
import { togglePrevCurrent } from "../../helpers/general-helper";

const InputSelectReq = ({ input }) => {
  const inputRef = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([
    ...input.dummyData.map((data) => data),
  ]);
  // State with the user data if there is any, if not it is an empty array
  // Same state that will be updated and posted on the database
  // console.log(selectedOptions);

  const onAddtoAnswersArray = () => {
    if (selectedOptions.includes(inputRef.current.value)) {
      return;
    } else {
      setSelectedOptions([...selectedOptions, inputRef.current.value]);
    }
  };
  // Adding options to the state array in order to send it back to the server when saved

  const onDeleteFromAnswersArray = (key) => {
    // console.log(key);
    if (selectedOptions.includes(key)) {
      setSelectedOptions(selectedOptions.filter((el, i, arr) => el !== key));
    } else {
      return;
    }
  };
  // Deleting the option from the state array based on the key set through map ↓↓
  // onClick={() => onDeleteFromAnswersArray(option)} function is passing that key
  // toe the function and based on that the array is filtered.

  const showSelectedOptions = (
    <ul className={`flex_center ${classes.options_ul}`}>
      {selectedOptions.map((option) => {
        if (!isEditing) {
          return (
            <li key={option} className={`flex_center ${classes.options_li}`}>
              {option}
            </li>
          );
        } else {
          return (
            <li
              className={`flex_center ${classes.options_li} ${classes.options_li_X}`}
              onClick={() => onDeleteFromAnswersArray(option)}
              key={option}
              // passing the option/key as a value to the function to delete the corresponding element from the array
            >
              {option}
              <span
                className={`material-symbols-outlined ${classes.slider_icon}`}
              >
                cancel
              </span>
            </li>
          );
        }
      })}
    </ul>
  );
  // showing all selected options inside the state array
  // based on different rules of true or false the array will show accordingly.

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <form
        onSubmit={submitHandler}
        key={input.id}
        className={` ${classes.inputSelect_top} `}
      >
        <h4>{input.label}</h4>
        <div className={`flex_start ${classes.inputSelect} `}>
          {isEditing && (
            <select ref={inputRef} className={`flex_center ${classes.select}`}>
              {input.options.map((option) => (
                <option
                  value={option}
                  key={option}
                  onClick={() => onAddtoAnswersArray()}
                >
                  {option}
                </option>
              ))}
            </select>
          )}
          <ButtonAll
            text={isEditing ? "Save" : "Edit"}
            onClick={() => togglePrevCurrent(setIsEditing)}
            className={`${classes.buttonSave}`}
          />
        </div>
        {input.dummyData && !isEditing && showSelectedOptions}
        {isEditing && showSelectedOptions}
      </form>
    </Fragment>
  );
};

export default InputSelectReq;
