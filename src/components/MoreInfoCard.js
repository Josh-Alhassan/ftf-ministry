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
        secondaryHeading="Who we are"
        primaryHeading="Know about us"
        paragraph="We Exist to Win, Equip and Deploy (WED) supernatural leaders everywhere
        taking over every sphere."
        backgroundColor="#F5F9FE"
        hoverBackgroundColor="#F5F9FE"
      />
      <Card
        secondaryHeading="Who we are"
        primaryHeading="Know about us"
        paragraph="We Exist to Win, Equip and Deploy (WED) supernatural leaders everywhere
        taking over every sphere."
        backgroundColor="#E8EEF1"
        hoverBackgroundColor="#E0E2F0"
      />
    </div>
  );
}

export default MoreInfoCard;
