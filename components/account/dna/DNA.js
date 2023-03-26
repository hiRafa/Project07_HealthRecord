import Image from "next/image";
import Link from "next/link";   
import React, { Fragment } from "react";
import classes from "./DNA.module.css";

const DNA = () => {
  return (
    <Fragment>
      <h2>Select a DNA test to connect:</h2>
      <ul className={`${classes.DNAlist} flex_column`}>
        <Link
          href="https://www.youtube.com/watch?v=8MjjmCQIdiY"
          target="_blank"
        >
          <Image
            src="/logo1.png"
            alt="DNA test logo"
            width={50}
            height={50}
            className={classes.DNAlogo}
          />
          Genelife
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=8MjjmCQIdiY"
          target="_blank"
        >
          <Image
            src="/logo2.png"
            alt="DNA test logo"
            width={50}
            height={50}
            className={classes.DNAlogo}
          />
          AncestryDNA
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=8MjjmCQIdiY"
          target="_blank"
        >
          <Image
            src="/logo3.png"
            alt="DNA test logo"
            width={50}
            height={50}
            className={classes.DNAlogo}
          />
          My Heritage
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=8MjjmCQIdiY"
          target="_blank"
        >
          <Image
            src="/logo4.png"
            alt="DNA test logo"
            width={50}
            height={50}
            className={classes.DNAlogo}
          />
          DNAlife
        </Link>
      </ul>
    </Fragment>
  );
};

export default DNA;
