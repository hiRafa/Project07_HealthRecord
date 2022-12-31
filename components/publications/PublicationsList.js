import React from "react";
import classes from "./Publications.module.css";
import SectionContainer from "../../components/layout-units/SectionContainer";

const PublicationsList = ({ children }) => {
  return (
    <SectionContainer>
      <ul className={`flex_center ${classes.publications_container}`}>
        {children}
      </ul>
    </SectionContainer>
  );
};

export default PublicationsList;
