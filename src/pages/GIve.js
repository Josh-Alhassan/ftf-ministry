import React from "react";
import style from "./GIve.module.css";
import SecondaryHeader from "../utilities/SecondaryHeader";
import Navigation from "../components/Navigation";
import Offering from "../sections/Offering";
import ProjectOffering from "../sections/ProjectOffering";
import Footer from "../sections/Footer";

function GIve() {
  return (
    <>
      <div className={style.give}>
        <Navigation />
        <div
          style={{ padding: "90px", textAlign: "center" }}
          className={style.giveContainer}
        >
          <SecondaryHeader
            textTransform="capitalize"
            color="#FFF"
            textAlign="center"
          >
            Give
          </SecondaryHeader>

          <p className={style.giveText}>
            "So let each one give as he purposes in his heart, not grudgingly or
            of necessity; for God loves a cheerful giver" - 2 Cor. 9:7
          </p>
        </div>
      </div>

      <main className={style.giveMain}>
        <Offering />
      </main>
      <Footer />
    </>
  );
}

export default GIve;
