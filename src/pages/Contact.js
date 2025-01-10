import React from "react";

import styles from "./Contact.module.css";
import Navigation from "../components/Navigation";

import style from "../sections/AboutHeader.module.css";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Navigation />
      <div className={style.aboutHeaderJumbo}>
        <h4 className={style.aboutHeaderLabel}>Contact Us</h4>

        <h2 className={style.aboutHeaderTitle}>Get Connected with us</h2>
        <p className={style.aboutHeaderParagraph}></p>
      </div>
    </div>
  );
}

export default Contact;
