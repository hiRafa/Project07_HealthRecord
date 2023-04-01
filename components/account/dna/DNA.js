import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import classes from "./DNA.module.css";

const dnabuttons = [
  {
    link: "https://www.youtube.com/watch?v=8MjjmCQIdiY",
    src: "/logo1.png",
    name: "Genelife",
  },
  {
    link: "https://www.youtube.com/watch?v=8MjjmCQIdiY",
    src: "/logo2.png",
    name: "AncestryDNA",
  },
  {
    link: "https://www.youtube.com/watch?v=8MjjmCQIdiY",
    src: "/logo3.png",
    name: "My Heritage",
  },
  {
    link: "https://www.youtube.com/watch?v=8MjjmCQIdiY",
    src: "/logo4.png",
    name: "DNAlife",
  },
];

const DNA = () => {
  return (
    <Fragment>
      <h3>Select a DNA test to connect:</h3>
      <ul className={`${classes.DNAlist} flex_column`}>
        {dnabuttons.map((button) => (
          <Link
            href={button.link}
            target="_blank"
            className={`${classes.DNAbutton} flex_center`}
          >
            <Image
              src={button.src}
              alt="DNA test logo"
              width={50}
              height={50}
              className={classes.DNAlogo}
            />
            {button.name}
          </Link>
        ))}
      </ul>
    </Fragment>
  );
};

export default DNA;
