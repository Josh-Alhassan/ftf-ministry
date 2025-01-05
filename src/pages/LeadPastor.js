import React from "react";

import SecondaryHeader from "../utilities/SecondaryHeader";
import Navigation from "../components/Navigation";
import style from "./Blog.module.css";
import styles from "./LeadPastor.module.css";
import Label from "../utilities/Label";

function LeadPastor() {
  return (
    <>
      <div className={style.blog}>
        <Navigation />

        <div style={{ padding: "90px", textAlign: "center" }}>
          <Label color="#fff" mb="50px">
            Our Prophet
          </Label>
          <SecondaryHeader
            textTransform="uppercase"
            color="#FFF"
            textAlign="center"
          >
            Our Global <br /> Lead Pastor
          </SecondaryHeader>
        </div>
      </div>
      <div className={styles.leadPastor}>
        <div className={styles.leadPastorCard}>
          {/* Lead Pastor Image */}
          <p className={styles.leadPastorImage}>Image to be here</p>
        </div>

        {/* Pastor Contact */}
        <div className={styles.pastorContactCard}>
          <h3>FULL NAME</h3>
          <h4>POSITION</h4>
        </div>
      </div>
    </>
  );
}

export default LeadPastor;
