import React from "react";
import Card from "../utilities/Card";

import style from "./MoreInfoCard.module.css";

function MoreInfoCard() {
  return (
    <div className={style.moreInfoCard}>
      <Card
        secondaryHeading="Who we are"
        primaryHeading="Know about us"
        paragraph="We Exist to Win, Equip and Deploy (WED) supernatural leaders everywhere
        taking over every sphere."
        backgroundColor="#FFF"
        hoverBackgroundColor="#FDF0EC"
      />
      <Card
        secondaryHeading="Be in the know"
        primaryHeading="Connect with us"
        paragraph="Join our mailing list to get amazing update from faith of the faithful ministries and Pst. David Isah."
        backgroundColor="#F5F9FE"
        hoverBackgroundColor="#F5F9FE"
      />
      <Card
        secondaryHeading="Monday Gathering"
        primaryHeading="Follow us online"
        paragraph="We meet every monday by 4:30pm WAT and Wednesdays by 9PM WAT online. Join us this week."
        backgroundColor="#E8EEF1"
        hoverBackgroundColor="#E0E2F0"
      />
    </div>
  );
}

export default MoreInfoCard;
