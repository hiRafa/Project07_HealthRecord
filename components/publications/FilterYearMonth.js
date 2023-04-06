import React, { useRef } from "react";
import { onFindPublication } from "../../helpers/general-helper";

import classes from "./Publications.module.css";

import ButtonAll from "../layout-units/ButtonAll";
import { useRouter } from "next/router";

const FilterYearMonth = ({ currentYear, currentMonth }) => {
  const router = useRouter();

  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    // getting method from parent
    if (selectedMonth !== "")
      onFindPublication(
        router,
        "publicationslist",
        selectedYear,
        selectedMonth
      );
    else if (selectedMonth === "")
      onFindPublication(router, "publicationslist", selectedYear);
  }

  return (
    <form className="filter" onSubmit={submitHandler}>
      <div className={`flex_center flex_column_mobile filter_controls`}>
        <div className="controls_control">
          <label htmlFor="year" />
          <select id="year" ref={yearInputRef}>
            {/* <option value="">Year</option> */}
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="controls_control">
          <label htmlFor="month" />
          <select id="month" ref={monthInputRef}>
            <option value="">Month</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
        <ButtonAll text={`Search`} />
      </div>
    </form>
  );
};

export default FilterYearMonth;
