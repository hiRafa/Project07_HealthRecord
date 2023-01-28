import React from "react";

const TimePicker = () => {
  const hoursArr = [];
  let i = 0;
  while (i < 24) {
    hoursArr.push(i);
    i++;
  }
  const minArr = ["00", 15, 30, 45];

  return (
    <div>
      {hoursArr.map((hour) =>
        minArr.map((min) => (
          <button>
            {hour}:{min}
          </button>
        ))
      )}
    </div>
  );
};

export default TimePicker;
