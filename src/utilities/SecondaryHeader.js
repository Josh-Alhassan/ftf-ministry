import React from "react";

function SecondaryHeader({ children, color }) {
  return (
    <h2
      style={{
        textTransform: "uppercase",
        color: color,
        fontSize: "48px",
        fontFamily: "Alegreya",
        width: "264px",
      }}
    >
      {children}
    </h2>
  );
}

export default SecondaryHeader;
