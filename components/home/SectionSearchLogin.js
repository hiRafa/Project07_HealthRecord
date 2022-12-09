import React from "react";
import classes from "./Home.module.css";

const SectionSearchLogin = () => {
  return (
    <section className={`section ${classes.searchORlogin} `}>
      <section>
        <div>
          <h2>Looking for health care around you?</h2>
          <button>Check out our list</button>
        </div>
      </section>
    </section>
  );
};

export default SectionSearchLogin;
