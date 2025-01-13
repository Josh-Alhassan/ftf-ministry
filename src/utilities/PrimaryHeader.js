import React from "react";

import style from "./PrimaryHeader.module.css";

function PrimaryHeader({ subTitle, title }) {
  return (
    <div className={style.hero}>
      <p className={style.ourProphet}>{subTitle}</p>
      <h1 className={style.globalLeadPastor}>{title}</h1>
    </div>
  );
}

export default PrimaryHeader;
