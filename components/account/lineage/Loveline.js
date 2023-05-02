import React from "react";
import classes from "./Lineage.module.css";

const Loveline = (props) => {
  const lovelineData = props.userLoveline;
  console.log(lovelineData);
  return (
    <div className={`${classes.tree} ${classes.tree_love}`}>
      {Object.values(lovelineData).map((member) => (
        <div  className={`${classes.familyMember}`}>
          <img className={`${classes.photo}`} />
          <h4>{member.member}</h4>
          <h5>{member.relationship}</h5>
        </div>
      ))}
    </div>
  );
};

export default Loveline;
