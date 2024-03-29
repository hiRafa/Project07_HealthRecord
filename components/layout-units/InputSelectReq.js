import React, { Fragment, useEffect, useRef, useState } from "react";
import ButtonAll from "./ButtonAll";
import classes from "./LayoutUnits.module.css";
import {
  profileFormSubmitHandler,
  togglePrevCurrent,
} from "../../helpers/general-helper";
import useNotification from "../../contexts/notifications-context";

const InputSelectReq = ({ input, dataFetched }) => {
  const { id, data, label, options } = input;
  const { successfullNotification, errorNotification } = useNotification();

  const inputRef = useRef();
  const [isEditing, setIsEditing] = useState(false);
  // setting the options to a state in order to delete the already chosen options.
  const [optionsToSelect, setOptionsToSelect] = useState([...options]);
  // array state for set the user`s previous/current selected options
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (data) {
      setSelectedOptions(data);
    }
    // console.log(selectedOptions);
  }, [data]);
  // State with the user data if there is any, if not it is an empty array
  // Same state that will be updated and posted on the database
  // console.log(selectedOptions.length);
  // console.log(selectedOptions);
  const onAddtoAnswersArray = () => {
    // console.log(selectedOptions);
    if (selectedOptions.includes(inputRef.current.value) || inputRef.current.value === "select" || inputRef.current.value === "Select") {
      // console.log(`it is returning`);
      return;
    } else {
      // set the selected option to the array including the previous selections
      setSelectedOptions([...selectedOptions, inputRef.current.value]);
      // delete option when choosing one
      // setOptionsToSelect(optionsToSelect.filter((el, i, arr) => el !== inputRef.current.value));
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

  let dataToServer = {};

  return (
    <Fragment>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dataToServer = { ...dataFetched, [input.id]: selectedOptions };
          !isEditing &&
            profileFormSubmitHandler(
              dataToServer,
              successfullNotification,
              errorNotification
            );
        }}
        key={id}
        className={` ${classes.inputSelect_top} `}
      >
        <h4>{label}</h4>
        <div className={`flex_start ${classes.inputSelect} `}>
          {isEditing && (
            <select
              ref={inputRef}
              className={`flex_center ${classes.select}`}
              onChange={() => onAddtoAnswersArray()}
            >
              <option value={"select"} key={"select"}>
                Select
              </option>
              {optionsToSelect.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          <ButtonAll
            text={isEditing ? "Save" : "Select"}
            onClick={() => togglePrevCurrent(setIsEditing)}
            className={`${classes.buttonSave}`}
          />
        </div>
        {
          // showing all selected options inside the state array
          <ul className={`flex_center ${classes.options_ul}`}>
            {selectedOptions.length === 0 && <p>{`No ${id} registered`}</p>}
            {selectedOptions &&
              selectedOptions.map((option) => {
                if (!isEditing) {
                  return (
                    <li
                      key={option}
                      className={`flex_center ${classes.options_li}`}
                    >
                      {option}
                    </li>
                  );
                } else if (isEditing) {
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
        }
      </form>
    </Fragment>
  );
};

export default InputSelectReq;
