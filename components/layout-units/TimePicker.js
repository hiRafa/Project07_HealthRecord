import React, { Fragment, useEffect, useRef, useState } from "react";
import modalContxt from "../../contexts/modal-context";
import { togglePrevCurrent } from "../../helpers/general-helper";
import Backdrop from "../layout/Backdrop";
import ButtonAll from "./ButtonAll";
import classes from "./LayoutUnits.module.css";

const TimePicker = ({ props, selectedWeekday }) => {
  let {
    facilityMinHr,
    facilityMaxHr,
    facilityClosedDays,
    facilityClosedDaysEmergency,
    facilSpecialistRef,
    facility,
    profOpenHours,
    professional,
    dateValue,
  } = props;
  const { modalIsOpen, toggleModal } = modalContxt();
  const [confirmConsult, setConfirmConsult] = useState(false);

  // console.log(facilityMinHr);
  // console.log(facilityMaxHr);
  // console.log(typeof facilityMinHr, typeof facilityMaxHr);
  // console.log(selectedWeekday);
  // console.log(profOpenHours);
  let hourOptions = [];
  let minutesArr = [];
  if (facilityMinHr || facilityMaxHr) {
    if (!facilityClosedDays.split(",").includes(selectedWeekday)) {
      console.log(selectedWeekday);
      const facilityHoursArr = [];
      while (facilityMinHr < facilityMaxHr) {
        facilityHoursArr.push(facilityMinHr);
        facilityMinHr++;
        // console.log(facilityHoursArr);
      }
      hourOptions = facilityHoursArr.map((hour) => (
        <option value={hour} className={classes.hour_option}>
          {hour}
        </option>
      ));
    }
    minutesArr = [0, 30];
  } else if (profOpenHours) {
    let helper = [];
    Object.keys(profOpenHours).forEach((keyWeekDay) => {
      if (selectedWeekday === keyWeekDay) {
        helper = profOpenHours[keyWeekDay].hours.split(",");
      }
    });

    hourOptions = helper.map((hour) => (
      <option value={+hour} className={classes.hour_option}>
        {+hour}
      </option>
    ));
    minutesArr = [0, 15, 30, 45];
  }

  const hourRef = useRef();
  const minRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    toggleModal();
    setConfirmConsult(true);
    console.log("sending to database");
    if (facility) {
      // data to fetch POST if facility
      // facilSpecialistRef,
      // facility,
      console.log(facilSpecialistRef.current.value);
      console.log(facility);
      console.log(hourRef.current.value);
      console.log(minRef.current.value);
    } else if (professional) {
      //data to fetch POST if professional
      // professional,
      console.log(professional);
    }
  };

  return (
    <Fragment>
      <div className={`${classes.timepicker} flex_center `}>
        {hourOptions.length > 0 ? (
          <div className="flex_center">
            <select
              id="hour"
              className={` ${classes.hour_select} flex_column glass_bg`}
              ref={hourRef}
            >
              {hourOptions}
            </select>
            <p>Hrs</p>
          </div>
        ) : (
          <div>
            <p>
              {`This place/specialist is not available on 
              ${selectedWeekday.toUpperCase()}`}
            </p>
            <br />
            <p>
              {facilityClosedDaysEmergency &&
                `Only for emergencies, call emergency number`}
            </p>
          </div>
        )}

        {hourOptions.length > 0 && (
          <div className="flex_center">
            <select
              className={` ${classes.hour_select} flex_column glass_bg`}
              ref={minRef}
            >
              {minutesArr.map((min) => (
                <option className={classes.hour_option}>{min}</option>
              ))}
            </select>
            <p>Min</p>
          </div>
        )}
      </div>
      {hourOptions.length > 0 && (
        <ButtonAll text={"Confirm"} onClick={submitHandler} />
      )}
      {/* {confirmConsult && (
        <div className={classes.consultConfirmation}>
          <ButtonAll
            text={`Confirm Consult for: ${hourRef.current.value}hrs ${minRef.current.value}min on ${dateValue} `}
          />
          <ButtonAll text={`Cancel`} />
        </div>
      )} */}
    </Fragment>
  );
};

export default TimePicker;
