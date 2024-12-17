import React from "react";
import Header from "../sections/Header";
import Generosity from "../sections/Generosity";

import style from "./Home.module.css";
import SermonLibrary from "../sections/SermonLibrary";

function Home() {
  return (
    <div className={style.homeContainer}>
      <Header />
      <Generosity />
      <SermonLibrary />
    </div>
  );
}

export default Home;
