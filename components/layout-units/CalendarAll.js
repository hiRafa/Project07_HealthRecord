import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ButtonAll from "./ButtonAll";
import TimePicker from "./TimePicker";
import classes from "./LayoutUnits.module.css";
import { useSession } from "next-auth/react";

const CalendarAll = (props) => {
  // passing props directly to TimePicker, the last component in this tree
  // props contains data from any of the parents
  const { data: session, status } = useSession();

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
    <div className={`${classes.calendarContainer} glass_bg`}>
      <Calendar
        value={dateValue}
        onChange={dateOnChange}
        minDate={new Date(2020, 0, 0)}
        maxDate={new Date(2040, 0, 0)}
        minDetail={"decade"}
        calendarType={"ISO 8601"}
        onClickDay={(e) => {
          setShowTimes(true);
          getCalendarWeekDay(e);
        }}
        className={`${classes.calendar} ${props.className}`}
      />
      {session && showTimes && (
        <aside className={`${classes.timeContainer} flex_column `}>
          <TimePicker
            props={props}
            selectedWeekday={selectedWeekday}
            dateValue={dateValue}
          />
          <ButtonAll text={"Close"} onClick={() => setShowTimes(false)} />
        </aside>
      )}
      {!session && selectedWeekday && (
        <a href="#consultop" className={`${classes.calendarLogIn} flex_center`}>
          Log in or create an account first
          <span class="material-symbols-outlined">
            keyboard_double_arrow_up
          </span>
        </a>
      )}
    </div>
  );
};

export default CalendarAll;
