import React from "react";
import style from "./SecondaryHeader.module.css";

function SecondaryHeader({
  children,
  color,
  mb = "15px",
  textTransform = "uppercase",
  textAlign = "left",
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
      }}
    >
      {children}
    </h2>
  );
}

export default SecondaryHeader;
