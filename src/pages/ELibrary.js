import React from "react";
import SecondaryHeader from "../utilities/SecondaryHeader";
import Navigation from "../components/Navigation";

function ELibrary() {
  return (
    <div
      style={{
        backgroundColor: "#333333",

        padding: "50px 350px",
      }}
    >
      <Navigation />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "840px",
        }}
      >
        <SecondaryHeader textAlign="center" color="#fff">
          Coming Soon!
        </SecondaryHeader>
      </div>
    </div>
  );
}

export default ELibrary;
