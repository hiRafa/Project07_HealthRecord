import React from "react";

const SectionContainer = ({ className, children }) => {
  return (
    <section className={`section_container ${className}`}>{children}</section>
  );
};

export default SectionContainer;
