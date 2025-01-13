import React from "react";
import style from "./SecondaryHeader.module.css";

function SecondaryHeader({
  children,
  color,
  mb = "15px",
  textTransform = "uppercase",
  textAlign = "left",
  fontWeight = "600",
  fontSize = "48px",
}) {
  return (
    <h2
      className={style.secondaryHeader}
      style={{
        textTransform: textTransform,
        color: color,
        fontFamily: "Alegreya",
        marginBottom: mb,
        textAlign: textAlign,
        fontWeight: fontWeight,
        fontSize: fontSize,
      }}
    >
      {children}
    </h2>
  );
}

export default SecondaryHeader;
