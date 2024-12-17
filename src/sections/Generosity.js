import React from "react";

import style from "./Generosity.module.css";
import MoreInfoCard from "../components/MoreInfoCard";

function Generosity() {
  return (
    <div className={style.generosityContainer}>
      <div className={style.outOfPageFlow}>
        <MoreInfoCard />
      </div>
    </div>
  );
}

export default Generosity;
