import React from "react";

import "boxicons";

import styles from "./Contact.module.css";
import Navigation from "../components/Navigation";

import style from "../sections/AboutHeader.module.css";

function Contact() {
  return (
    <>
      <div className={styles.contactContainer}>
        <Navigation />
        <div className={style.aboutHeaderJumbo}>
          <h4 className={style.aboutHeaderLabel}>Contact Us</h4>

          <h2 className={style.aboutHeaderTitle}>Get Connected with us</h2>
          <p className={style.aboutHeaderParagraph}></p>
        </div>
      </div>
      <main className={styles.contactMain}>
        <section className={styles.contactWrapper}>
          <div className={styles.contactAddress}>
            <p className={styles.contactVenue}>
              MEET US @ Cliff Hotel Ganaja Junction, Lokoja, Kogi State.
            </p>
            <h3
              style={{ textTransform: "uppercase" }}
              className={styles.contactAddressPhone}
            >
              Phone
            </h3>
            <h3
              style={{ textTransform: "uppercase", marginBottom: "25px" }}
              className={styles.contactAddressPhone}
            >
              +234 813 129 5220, +234 706 586 9779
            </h3>

            <h4
              style={{
                textTransform: "uppercase",
                fontSize: "22px",
                fontFamily: "Alegreya",
                color: "#686868",
                marginBottom: "20px",
              }}
            >
              Church Doors are Open
            </h4>

            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "16px",
                marginBottom: "15px",
              }}
            >
              Mondays <box-icon type="solid" name="right-arrow-alt"></box-icon>{" "}
              05:00 PM.
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "16px",
              }}
            >
              Saturday <box-icon type="solid" name="right-arrow-alt"></box-icon>{" "}
              09:00 AM.
            </p>
          </div>
          <div>Contact Image</div>
          <div className={styles.contactForm}>
            <h3 className={styles.contactUs}>Contact us</h3>

            <div className={styles.firstName}>
              <label name="firstname">First Name</label>
              <input type="text" name="firstname" />
            </div>

            <div className={styles.email}>
              <label name="email">Email</label>
              <input type="email" name="email" />
            </div>

            <div className={styles.phoneNumber}>
              <label name="phone">Phone</label>
              <input type="text" name="phone" />
            </div>

            <div className={styles.firstName}>
              <label name="message">Message</label>
              <textarea name="message" rows="5"></textarea>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
