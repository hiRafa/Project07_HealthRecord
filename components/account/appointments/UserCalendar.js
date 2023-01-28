import React, { Fragment, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "../../layout-units/TimePicker";
import ButtonAll from "../../layout-units/ButtonAll";

const UserCalendar = () => {
  const [dateValue, dateOnChange] = useState(new Date());
  const [showAvailableTimes, setShowAvailableTimes] = useState(false);
  console.log(dateValue);

  return (
    <div>
      <Calendar
        value={dateValue}
        onChange={dateOnChange}
        minDate={new Date(2020, 0, 0)}
        maxDate={new Date(2040, 0, 0)}
        minDetail={"decade"}
        calendarType={"Hebrew"}
        onClickDay={() => setShowAvailableTimes(true)}
      />
      {showAvailableTimes && (
        <Fragment>
          <TimePicker />
          <ButtonAll
            text={"close"}
            onClick={() => setShowAvailableTimes(false)}
          />
        </Fragment>
      )}
    </div>
  );
};

export default UserCalendar;
