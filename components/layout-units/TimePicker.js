import React, { Fragment, useEffect } from "react";
import ButtonAll from "./ButtonAll";
import classes from "./LayoutUnits.module.css";

const TimePicker = ({ props, selectedWeekday }) => {
  let {
    facilityMinHr,
    facilityMaxHr,
    profOpenHours,
    facilityClosedDays,
    facilityClosedDaysEmergency,
  } = props;
  // console.log(facilityMinHr);
  // console.log(facilityMaxHr);
  // console.log(typeof facilityMinHr, typeof facilityMaxHr);
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

  // console.log(selectedWeekday);
  // console.log(profOpenHours);

  return (
    <Fragment>
      <div className={`${classes.timepicker} flex_center `}>
        {hourOptions.length > 0 ? (
          <div className="flex_center">
            <select
              id="hour"
              className={` ${classes.hour_select} flex_column glass_bg`}
            >
              {hourOptions}
            </select>
            <p>Hrs</p>
          </div>
        ) : (
          <div>
            <p>
              This specialist is not available on{" "}
              {selectedWeekday.toUpperCase()}{" "}
            </p>
            <p>{facilityClosedDaysEmergency && `Only for emergencies`}</p>
          </div>
        )}

        {hourOptions.length > 0 && (
          <div className="flex_center">
            <select className={` ${classes.hour_select} flex_column glass_bg`}>
              {minutesArr.map((min) => (
                <option className={classes.hour_option}>{min}</option>
              ))}
            </select>
            <p>Min</p>
          </div>
        )}
      </div>
      <ButtonAll text={"Confirm"} />
    </Fragment>
  );
};

export default TimePicker;
