import React from "react";

import style from "./SecondaryButton.module.css";

function SecondaryButton({ children }) {
  return <button className={style.button}>{children}</button>;
}

export default SecondaryButton;
