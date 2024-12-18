import React from "react";

import style from "./Footer.module.css";
import SecondaryHeader from "../utilities/SecondaryHeader";

function Footer() {
  return (
    <div className={style.footer}>
      <SecondaryHeader
        textTransform="capitalize"
        color="#ffffff"
        textAlign="center"
      >
        Footer Coming Soon
      </SecondaryHeader>
    </div>
  );
}

export default Footer;
