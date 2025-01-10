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
          <div className={styles.contactImage}></div>
          <div className={styles.contactForm}>
            <h3 className={styles.contactUs}>Contact us</h3>

            <form
              action="https://formspree.io/f/moqyqzqk"
              method="POST"
              className={styles.contactFormInputs}
            >
              <input
                className={styles.formInput}
                type="text"
                name="firstname"
                placeholder="NAME"
              />
              <input
                className={styles.formInput}
                type="email"
                name="email"
                placeholder="EMAIL"
              />
              <input
                className={styles.formInput}
                type="text"
                name="phone"
                placeholder="PHONE"
              />

              <textarea
                className={styles.formInput}
                name="message"
                rows="5"
                placeholder="MESSAGE"
              ></textarea>

              <input
                type="submit"
                value="SEND A MESSAGE"
                className={styles.formButton}
              />
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
