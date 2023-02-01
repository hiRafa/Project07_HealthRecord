import React from "react";

const TimePicker = (props) => {
  let { minHr, maxHr } = props;

  const hoursArr = [];
  if (minHr === undefined || maxHr === undefined) {
    minHr = 0;
    maxHr = 24;
  }
  while (minHr < maxHr) {
    hoursArr.push(minHr);
    minHr++;
  }
  const minutesArr = ["00", 15, 30, 45];

  return (
    <div className={`flex_center `}>
      {/* {hoursArr.map((hour) =>
        minutesArr.map((min) => (
          <button>
            {hour}
          </button>
        ))
      )} */}
      <div className={`flex_column `}>
        {hoursArr.map((hour) => (
          <button>{hour}</button>
        ))}
      </div>
      <div className={`flex_column `}>
        {minutesArr.map((hour) => (
          <button>{hour}</button>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
