import React from "react";

function Value({ backgroundColor, label }) {
  return (
    <div
      style={{
        background: backgroundColor,
        borderRadius: "10px",
        padding: "50px 20px",
        boxShadow: "1px 1px 5px 5px #d8d8d8",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          fontFamily: "Alegreya",
          fontWeight: "500",
          textTransform: "uppercase",
          color: "#444444",
          textAlign: "center",
        }}
      >
        {label}
      </h2>
    </div>
  );
}

export default Value;
