import React from "react";
import style from "./About.module.css";
import AboutHeader from "../sections/AboutHeader";
import VisionStatement from "../sections/VisionStatement";
import FaithStatement from "../sections/FaithStatement";
import CoreValues from "../sections/CoreValues";
import Footer from "../sections/Footer";

function About() {
  return (
    <div>
      <AboutHeader />
      {/* <VisionStatement
        label="WHAT WE WANT TO DO"
        mainTitle="Vision Statement"
        description=" Reaching and influencing all nations of the earth with the Government
        and Presence of Christ (i.e. The Gospel) by the power of the Holy
        Spirit."
        backgroundColor="#FFFFFF"
      /> */}
      {/* <VisionStatement
        label="How we intend to do it"
        mainTitle="Mission Statement"
        description="We exist to Win, Equip and Deploy (WED) supernatural believers everywhere taking over every sphere."
        backgroundColor="#F7F7F7"
      /> */}

      {/* <FaithStatement /> */}
      {/* <CoreValues /> */}
      <Footer />
    </div>
  );
}

export default About;
