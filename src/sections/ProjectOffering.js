import React from "react";
import style from "./ProjectOffering.module.css";

function ProjectOffering({
  title,
  paragraph1,
  paragraph2,
  backgroundColor = "#ffffff",
  bankName,
  accountName,
  accountNumber,
}) {
  return (
    <div className={style.projectOfferingContainer} style={{ backgroundColor }}>
      <div className={style.projectDescription}>
        <h2 className={style.projectOfferingTitle}>{title}</h2>
        <p className={style.projectOfferingParagraph}>{paragraph1}</p>
        <p className={style.projectOfferingParagraph}>{paragraph2}</p>
      </div>
      <div className={style.projectDetails}>
        <div className={style.projectDetailsItem}>
          <h2 className={style.projectOfferingTitle}>Bank</h2>
          <p className={style.paragraphOfferingSubTitle}>{bankName}</p>
        </div>

        <div className={style.projectDetailsItem}>
          <h2 className={style.projectOfferingTitle}>Account Name</h2>
          <p className={style.paragraphOfferingSubTitle}>{accountName}</p>
        </div>

        <div className={style.projectDetailsItem}>
          <h2 className={style.projectOfferingTitle}>Account Number</h2>
          <p className={style.paragraphOfferingSubTitle}>{accountNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectOffering;
