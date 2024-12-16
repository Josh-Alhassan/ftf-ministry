import React from "react";
import Header from "../sections/Header";
import Generosity from "../sections/Generosity";

import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.homeContainer}>
      <Header />
      <Generosity />
    </div>
  );
}

export default Home;
