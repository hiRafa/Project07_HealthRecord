import React from "react";
import classes from "./Lineage.module.css";

const Loveline = (props) => {
  const lovelineData = props.userGeneline;

  return (
    <div className={`${classes.tree} ${classes.tree_love}`}>
      <img src="/bg_dnatree.png" alt="Image 1" className={`${classes.photo}`} />

      <img src="/water.jpg" alt="Image 2" className={`${classes.photo}`} />

      <img
        src="/branch-308647.png"
        alt="Image 1"
        className={`${classes.photo}`}
      />

      <img src="/bg_dnatree.png" alt="Image 2" className={`${classes.photo}`} />

      <img src="/bg_dna.jpg" alt="Image 1" className={`${classes.photo}`} />
    </div>
  );
};

export default Loveline;
