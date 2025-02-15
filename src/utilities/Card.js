import React, { useState } from "react";
import PropTypes from "prop-types";

import style from "./Card.module.css";
import SecondaryButton from "./SecondaryButton";

function Card({
  secondaryHeading,
  primaryHeading,
  paragraph,
  backgroundColor = "white",
  hoverBackgroundColor,
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Determine the current background color based on hover state
  const currentBackgroundColor =
    isHovered && hoverBackgroundColor ? hoverBackgroundColor : backgroundColor;
  return (
    <div
      className={style.card}
      style={{
        backgroundColor: currentBackgroundColor,
        transition: "background-color 0.3s ease", // Smooth color transition
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className={style.cardHeadingSecondary}>{secondaryHeading}</h2>
      <h1 className={style.cardHeadingPrimary}>{primaryHeading}</h1>
      <p className={style.cardText}>{paragraph}</p>

      <SecondaryButton>Learn More</SecondaryButton>
    </div>
  );
}

// Define PropTypes for Card
Card.propTypes = {
  secondaryHeading: PropTypes.string.isRequired,
  primaryHeading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  hoverBackgroundColor: PropTypes.string.isRequired,
};

export default Card;
