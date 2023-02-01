import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarAll = ({ showTimes, setShowTimes }) => {
  const [dateValue, dateOnChange] = useState(new Date());

  return (
    <Calendar
      value={dateValue}
      onChange={dateOnChange}
      minDate={new Date(2020, 0, 0)}
      maxDate={new Date(2040, 0, 0)}
      minDetail={"decade"}
      calendarType={"Hebrew"}
      onClickDay={() => setShowTimes(true)}
    />
  );
};

export default CalendarAll;
