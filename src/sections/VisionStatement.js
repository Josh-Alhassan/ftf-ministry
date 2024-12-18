import React from "react";
import style from "./VisionStatement.module.css";

function VisionStatement({
  label,
  mainTitle,
  description,
  backgroundColor = "transparent",
}) {
  return (
    <div
      className={style.visionStatement}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className={style.visionTitle}>
        <h4 className={style.subTitle}>
          {label}
          <span
            style={{
              width: "30px",
              borderTop: ".5px",
              borderColor: "#FF5C35",
              borderStyle: "solid",
              display: "inline-block",
              marginLeft: "40px",
            }}
          ></span>
        </h4>

        <h2 className={style.mainTitle}>{mainTitle}</h2>
      </div>
      <p className={style.visionDescription}>{description}</p>
    </div>
  );
}

export default VisionStatement;
