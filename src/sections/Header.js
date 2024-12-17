import React from "react";
import style from "./Header.module.css";
import Navigation from "../components/Navigation";

function Header() {
  return (
    <div className={style.headerContainer}>
      <Navigation />
      Header
    </div>
  );
}

export default Header;
