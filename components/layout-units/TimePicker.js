import React, { Fragment, useEffect, useRef } from "react";
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
  } = props;
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
  const subtmitHandler = (e) => {
    e.preventDefault();
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
        <ButtonAll text={"Confirm"} onClick={subtmitHandler} />
      )}
    </Fragment>
  );
};

export default TimePicker;
