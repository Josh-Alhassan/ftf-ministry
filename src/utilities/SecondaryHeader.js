import React from "react";

function SecondaryHeader({
  children,
  color,
  mb = "15px",
  textTransform = "uppercase",
  textAlign = "left",
}) {
  return (
    <h2
      style={{
        textTransform: textTransform,
        color: color,
        fontSize: "48px",
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
