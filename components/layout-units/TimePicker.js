import { useSession } from "next-auth/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import modalContxt from "../../contexts/modal-context";
import useNotification from "../../contexts/notifications-context";
import { profileFormSubmitHandler } from "../../helpers/general-helper";
import ButtonAll from "./ButtonAll";
import classes from "./LayoutUnits.module.css";

const TimePicker = ({ props, selectedWeekday, dateValue }) => {
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
  const [confirmConsult, setConfirmConsult] = useState(false);
  const { data: session, status } = useSession();
  const { successfullNotification, errorNotification } = useNotification();

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
    minutesArr = ["00", 30];
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
    minutesArr = ["00", 15, 30, 45];
  }
  const hourRef = useRef();
  const minRef = useRef();

  const [currentUserEmail, setCurrentUserEmail] = useState();
  useEffect(() => {
    if (session) setCurrentUserEmail(session.user.email);
  }, [session, currentUserEmail]);

  const submitHandler = (e) => {
    e.preventDefault();
    let scheduleID = `${dateValue.getFullYear()}${dateValue.getMonth()}${dateValue.getDate()}${
      facility ? facility.id : professional.id
    }`;
    let dataFetched = {
      email: currentUserEmail,
      [scheduleID]: {
        professionalName: facility ? facility.name : professional.name,
        professionalID: facility ? facility.id : professional.id,
        professionalSpeciality: facility
          ? facilSpecialistRef.current.value
          : professional.speciality,
        day: dateValue.getDate(),
        month: dateValue.getMonth() + 1,
        year: dateValue.getFullYear(),
        hour: hourRef.current.value,
        min: minRef.current.value,
      },
    };
    console.log(dataFetched);
    profileFormSubmitHandler(
      dataFetched,
      successfullNotification,
      errorNotification
    );
  };

  // let selectedDateFormat = new Date(
  //   (dateValue.getFullYear(),
  //   dateValue.getMonth(),
  //   dateValue.getDate()).
  // );
  return (
    <Fragment>
      <div className={`${classes.timepicker} flex_center `}>
        {hourOptions.length > 0 ? (
          <Fragment>
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
          </Fragment>
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
      </div>
      {session && hourOptions.length > 0 && (
        <ButtonAll text={"Confirm"} onClick={() => setConfirmConsult(true)} />
      )}

      {confirmConsult && (
        <div
          className={`${classes.consultConfirmation} flex_center`}
          onClick={() => {
            setConfirmConsult(false);
          }}
        >
          <ButtonAll
            text={`Confirm Consult for: ${hourRef.current.value}:${
              minRef.current.value
            } on 
         ${dateValue.toDateString()}`}
            onClick={(e) => submitHandler(e)}
          />
          <ButtonAll text={`Cancel`} />
        </div>
      )}
    </Fragment>
  );
};

export default TimePicker;
