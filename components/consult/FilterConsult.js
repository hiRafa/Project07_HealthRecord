import React, { useRef } from "react";
// import { onFindPublication } from "../../helpers/general-helper";

import classes from "../layout-units/LayoutUnits.module.css";

import { useRouter } from "next/router";
import ButtonAll from "../layout-units/ButtonAll";

const FilterConsult = ({ className }) => {
  const router = useRouter();

  const specialityInputRef = useRef();
  const businessInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const selectedSpeciality = specialityInputRef.current.value;
    const selectedFacility = businessInputRef.current.value;
    // getting method from parent
    import("../../helpers/general-helper").then((module) => {
      if (selectedFacility !== "")
        module.onFindPublication(router, "consult", selectedSpeciality, selectedFacility);
      else if (selectedFacility === "")
        module.onFindPublication(router, "consult", selectedSpeciality);
    });
  }

  return (
    <form className={`filter ${className}`} onSubmit={submitHandler}>
      <div className={`flex_center flex_column_mobile filter_controls`}>
        <div className="controls_control">
          <label htmlFor="speciality" />
          <select id="speciality" ref={specialityInputRef}>
            {/* <option value="">Year</option> */}
            <option value="general">GP</option>
            <option value="ginecologist">Ginecologists</option>
            <option value="urologist">Urologists</option>
            <option value="dermathologist">Dermathologists</option>
            <option value="masseur">Masseurs</option>
            <option value="psychiatrist">Psychiatrist</option>
          </select>
        </div>
        <div className="controls_control">
          <label htmlFor="business" />
          <select id="business" ref={businessInputRef}>
            <option value="">All</option>
            <option value="professionals">Professionals</option>
            <option value="facilities">Hospitals</option>
          </select>
        </div>
        <ButtonAll text={`Search`} />
      </div>
    </form>
  );
};

export default FilterConsult;
