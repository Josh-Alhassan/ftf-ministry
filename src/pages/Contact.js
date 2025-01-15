import React, { useState } from "react";

import "boxicons";

import styles from "./Contact.module.css";
import Navigation from "../components/Navigation";

import style from "../sections/AboutHeader.module.css";
import Footer from "../sections/Footer";
import PrimaryHeader from "../utilities/PrimaryHeader";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      const response = await fetch("https://formspree.io/f/moqyqzqk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Thank you for your message. We will get back to you soon!",
        });
        setFormData({
          firstname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className={styles.contactContainer}>
        <div className={style.aboutHeaderJumbo}>
          <h4 className={style.aboutHeaderLabel}>Contact Us</h4>

          <h2 className={style.aboutHeaderTitle}>Get Connected with us</h2>
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

      <Footer />
    </>
  );
}

export default Contact;
