import React from "react";
import style from "./PrimaryButton.module.css";

function PrimaryButton({ label }) {
  return <button className={style.button}>{label}</button>;
}

export default PrimaryButton;
