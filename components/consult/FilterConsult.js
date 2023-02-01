import React, { useRef } from "react";
import { onFindPublication } from "../../helpers/general-helper";

import classes from "../layout-units/LayoutUnits.module.css";

import { useRouter } from "next/router";
import ButtonAll from "../layout-units/ButtonAll";

const FilterConsult = ({ currentYear, currentMonth }) => {
  const router = useRouter();

  const specialityInputRef = useRef();
  const businessInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const selectedYear = specialityInputRef.current.value;
    const selectedMonth = businessInputRef.current.value;

    // getting method from parent
    if (selectedMonth !== "")
      onFindPublication(router, selectedYear, selectedMonth);
    else if (selectedMonth === "") onFindPublication(router, selectedYear);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={`flex_center flex_column_mobile ${classes.controls}`}>
        <div className={classes.control}>
          <label htmlFor="speciality" />
          <select id="speciality" ref={specialityInputRef}>
            {/* <option value="">Year</option> */}
            <option value="">Speciality</option>
            <option value="gp">GP</option>
            <option value="ginecologists">Ginecologists</option>
            <option value="urologists">Urologists</option>
            <option value="dermathologists">Dermathologists</option>
            <option value="masseurs">Masseurs</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="business" />
          <select id="business" ref={businessInputRef}>
            <option value="Professionals">Professionals</option>
            <option value="Clinics">Clinics</option>
            <option value="Hospitals">Hospitals</option>
          </select>
        </div>
        <ButtonAll text={`Search`} />
      </div>
    </form>
  );
};

export default FilterConsult;
