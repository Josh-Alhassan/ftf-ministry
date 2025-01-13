import React from "react";

import style from "./FaithStatement.module.css";
import Label from "../utilities/Label";
import SecondaryHeader from "../utilities/SecondaryHeader";
import FaithStatementList from "../utilities/FaithStatementList";

function FaithStatement() {
  return (
    <div className={style.faithSection}>
      <div className={style.faithStatement}>
        <Label color="#FFFFFF"> What we Believe</Label>
        <SecondaryHeader color="#FFFFFF">Our Faith Statement</SecondaryHeader>
        <FaithStatementList />
      </div>
    </div>
  );
}

export default FaithStatement;
