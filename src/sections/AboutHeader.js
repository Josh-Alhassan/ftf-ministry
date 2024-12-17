import React from "react";
import Navigation from "../components/Navigation";

import style from "./AboutHeader.module.css";
import { PrefetchPageLinks } from "react-router-dom";

function AboutHeader() {
  return (
    <div className={style.aboutHeaderContainer}>
      <Navigation />

      <div className={style.aboutHeaderJumbo}>
        <h4 className={style.aboutHeaderLabel}>
          About The FaithFuls Ministries
        </h4>

        <h2 className={style.aboutHeaderTitle}>A few Words About Us</h2>
        <p className={style.aboutHeaderParagraph}></p>
      </div>
    </div>
  );
}

export default AboutHeader;
