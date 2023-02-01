import React, { Fragment, useState } from "react";
import "react-calendar/dist/Calendar.css";
import TimePicker from "../layout-units/TimePicker";
import ButtonAll from "../layout-units/ButtonAll";
import CalendarAll from "../layout-units/CalendarAll";

const BusinessCalendar = () => {
  const [showTimes, setShowTimes] = useState(false);

  return (
    <div className={`flex_start `}>
      <CalendarAll setShowTimes={setShowTimes} />
      {showTimes && (
        <aside className={`flex_column `}>
          <TimePicker minHr={8} maxHr={22} />
          <ButtonAll text={"close"} onClick={() => setShowTimes(false)} />
        </aside>
      )}
    </div>
  );
};

export default BusinessCalendar;
