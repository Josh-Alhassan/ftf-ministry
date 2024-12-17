import React from "react";
import style from "./Header.module.css";
import Navigation from "../components/Navigation";
import PrimaryButton from "../utilities/PrimaryButton";
// import MoreInfoCard from "../components/MoreInfoCard";

function Header() {
  return (
    <div className={style.headerContainer}>
      <Navigation />

      <div className={style.headerHeroSection}>
        <h1 className={style.headerHeroHeader}>
          Live, Love & <br /> Connect With Us
        </h1>
        <p className={style.headerHeroText}>
          We have recieved grace and apostleship to make the nations <br />
          obidient to the faith for his name sake.
        </p>

        <PrimaryButton>LEARN MORE ABOUT &rarr; </PrimaryButton>

        {/* <div className={style.outOfPageFlow}>
          <MoreInfoCard />
        </div> */}
      </div>
    </div>
  );
}

export default Header;
