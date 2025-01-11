import React from "react";

import style from "./Generosity.module.css";
import MoreInfoCard from "../components/MoreInfoCard";
import GenerosityIcon from "../utilities/GenerosityIcon";
import SecondaryButton from "../utilities/SecondaryButton";

function Generosity() {
  return (
    <div className={style.externalContainer}>
      {/* <div className={style.outOfPageFlow}>
        <MoreInfoCard />
      </div> */}
      <div className={style.generosityContainer}>
        <div className={style.generositySection}>
          <div className={style.generosityIcon}>
            <GenerosityIcon />
          </div>
          <p className={style.generosityTitle}>Generosity</p>

          <h2 className={style.generosityPassage}>
            <span className={style.ilatic}>and</span> God is able to make all
            grace abound toward you; that ye, always having all sufficiency in
            all things, may abound to every good{" "}
            <span className={style.ilatic}>work</span>.
          </h2>

          <h4 className={style.generosityScripture}>2 CORINTHIANS 9:8</h4>

          <SecondaryButton
            style={{ color: "#ff5632" }}
            hoverStyle={{
              color: "#fff",
              background: "#ff5632",
            }}
          >
            GIVE NOW &rarr;
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}

export default Generosity;
