import React from "react";

function SecondaryHeader({ children, color, mb = "15px" }) {
  return (
    <h2
      style={{
        textTransform: "uppercase",
        color: color,
        fontSize: "48px",
        fontFamily: "Alegreya",
        marginBottom: mb,
      }}
    >
      {children}
    </h2>
  );
}

export default SecondaryHeader;
