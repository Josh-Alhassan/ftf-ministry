import React, { useState } from "react";
import PropTypes from "prop-types";

import style from "./SecondaryButton.module.css";

function SecondaryButton({
  children,
  style: customStyle,
  hoverStyle,
  marginBottom,
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Merge styles, with hover style taking precedence when hovering
  const buttonStyle =
    isHovered && hoverStyle ? { ...customStyle, ...hoverStyle } : customStyle;

  return (
    <button
      className={style.button}
      style={customStyle}
      marginBottom={marginBottom}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  hoverStyle: PropTypes.object,
  style: PropTypes.object,
};

export default SecondaryButton;
