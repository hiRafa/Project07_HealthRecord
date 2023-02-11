import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ButtonAll from "./ButtonAll";
import TimePicker from "./TimePicker";
import classes from "./LayoutUnits.module.css";

const CalendarAll = (props) => {
  // const {
  //   facilityMinHr,
  //   facilityMaxHr,
  //   profOpenHours,
  //   facilityClosedDays,
  //   facilityClosedDaysEmergency,
  // } = props;

  const [dateValue, dateOnChange] = useState(new Date());

  const [showTimes, setShowTimes] = useState(false);
  const [selectedWeekday, setSelectedWeekday] = useState("");

  const getCalendarWeekDay = (e) => {
    setSelectedWeekday(
      e.toLocaleDateString("en-US", { weekday: "short" }).toLowerCase()
    );
    // console.log(selectedWeekday)
  };

  return (
    <div className={`flex_start `}>
      <Calendar
        value={dateValue}
        onChange={dateOnChange}
        minDate={new Date(2020, 0, 0)}
        maxDate={new Date(2040, 0, 0)}
        minDetail={"decade"}
        calendarType={"Hebrew"}
        onClickDay={(e) => {
          setShowTimes(true);
          getCalendarWeekDay(e);
        }}
        className={`${classes.calendar} glass_bg`}
      />
      {showTimes && (
        <aside className={`flex_column `}>
          <TimePicker props={props} selectedWeekday={selectedWeekday} />
          <ButtonAll text={"Close"} onClick={() => setShowTimes(false)} />
        </aside>
      )}
    </div>
  );
};

export default CalendarAll;
