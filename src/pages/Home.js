import React from "react";
import Header from "../sections/Header";
import Generosity from "../sections/Generosity";

import style from "./Home.module.css";
import SermonLibrary from "../sections/SermonLibrary";
import HeavenOnEarth from "../sections/HeavenOnEarth";

function Home() {
  return (
    <div className={style.homeContainer}>
      <Header />
      <Generosity />
      <SermonLibrary />
      <HeavenOnEarth />
    </div>
  );
}

export default Home;
