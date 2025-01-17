import React from "react";
import Card from "../utilities/Card";
import style from "./MoreInfoCard.module.css";

// Define card data in an array
const cardData = [
  {
    secondaryHeading: "Who we are",
    primaryHeading: "Know about us",
    paragraph:
      "We Exist to Win, Equip and Deploy (WED) supernatural leaders everywhere taking over every sphere.",
    backgroundColor: "#FFF",
    hoverBackgroundColor: "#FDF0EC",
  },
  {
    secondaryHeading: "Be in the know",
    primaryHeading: "Connect with us",
    paragraph:
      "Join our mailing list to get amazing updates from Faith of the Faithful Ministries and Pst. David Isah.",
    backgroundColor: "#F5F9FE",
    hoverBackgroundColor: "#F5F9FE",
  },
  {
    secondaryHeading: "Monday Gathering",
    primaryHeading: "Follow us online",
    paragraph:
      "We meet every Monday by 4:30 PM WAT and Wednesdays by 9 PM WAT online. Join us this week.",
    backgroundColor: "#E8EEF1",
    hoverBackgroundColor: "#E0E2F0",
  },
];

function MoreInfoCard() {
  return (
    <div className={style.moreInfoCard}>
      {cardData.map((card, index) => (
        <Card
          key={index} // Use a unique key if possible
          secondaryHeading={card.secondaryHeading}
          primaryHeading={card.primaryHeading}
          paragraph={card.paragraph}
          backgroundColor={card.backgroundColor}
          hoverBackgroundColor={card.hoverBackgroundColor}
        />
      ))}
    </div>
  );
}

export default MoreInfoCard;
