import React from "react";
import Navigation from "../components/Navigation";

import style from "./AboutHeader.module.css";

function AboutHeader() {
  return (
    <>
      <Navigation />
      <div className={style.aboutHeaderContainer}>
        <div className={style.aboutHeaderJumbo}>
          <h4 className={style.aboutHeaderLabel}>About FaithFul</h4>

          <h2 className={style.aboutHeaderTitle}>
            A few Words <br /> About Us
          </h2>
          {/* <p className={style.aboutHeaderParagraph}></p> */}
        </div>
      </div>
    </>
  );
}

export default AboutHeader;
