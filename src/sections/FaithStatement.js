import React from "react";

import style from "./FaithStatement.module.css";
import Label from "../utilities/Label";
import SecondaryHeader from "../utilities/SecondaryHeader";
import FaithStatementList from "../utilities/FaithStatementList";

function FaithStatement() {
  return (
    <div className={style.faithSection}>
      <Label color="#FFFFFF"> What we Believe</Label>
      <SecondaryHeader color="#FFFFFF">
        Our Faith <br /> Statement
      </SecondaryHeader>
      <FaithStatementList />
    </div>
  );
}

export default FaithStatement;
