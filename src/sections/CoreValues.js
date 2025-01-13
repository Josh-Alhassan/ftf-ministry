import React from "react";
import style from "./CoreValues.module.css";
import Label from "../utilities/Label";
import SecondaryHeader from "../utilities/SecondaryHeader";
import Values from "../components/Values";

function CoreValues() {
  return (
    <div className={style.coreValuesContainer}>
      <Label mb="50px">Our Standard of Measurement</Label>
      <SecondaryHeader color="#4F4F4F" mb="50px">
        Our Core Values
      </SecondaryHeader>
      <Values />
    </div>
  );
}

export default CoreValues;
