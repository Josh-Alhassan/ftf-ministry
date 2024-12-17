import React from "react";

import style from "./SermonLibrary.module.css";
import SecondaryButton from "../utilities/SecondaryButton";

import sermonImage from "../assets/messimg-scaled.jpg";

function SermonLibrary() {
  return (
    <div className={style.sermonLibraryContainer}>
      <img
        src={sermonImage}
        alt="Sermon Message Cover"
        className={style.sermonImage}
      />

      <div className={style.sermonDetail}>
        <h4 className={style.sermonLabel}>SERMON LIBRARY ⸻</h4>
        <h3 className={style.sermonHeading}>
          SERMONS FROM DR KARIS THAT WILL ENHANCE WHOLISTIC GROWTH IN YOU
        </h3>
        <p className={style.sermonParagraph}>
          Spiritual growth is impossible without the ministry of God's word. At
          Gloryzone Church, we are committed to the word of his grace taught by
          our global lead pastor Dr Karis. These teachings have the ability to
          transform your life completely. You can access the entire E-library of
          Gloryzone Church for free.
        </p>

        <SecondaryButton>Visit E-Library &rarr;</SecondaryButton>
      </div>
    </div>
  );
}

export default SermonLibrary;
