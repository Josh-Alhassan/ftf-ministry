import React from "react";
import style from "./PrimaryButton.module.css";

function PrimaryButton({ children }) {
  return <button className={style.button}>{children}</button>;
}

export default PrimaryButton;
