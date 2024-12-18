import React from "react";

function Label({ children, color }) {
  return (
    <h4
      style={{
        fontFamily: "Alegreya",
        fontSize: "14px",
        textTransform: "uppercase",
        color: color,
        fontWeight: "100",
      }}
    >
      {children}
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
  );
}

export default Label;
