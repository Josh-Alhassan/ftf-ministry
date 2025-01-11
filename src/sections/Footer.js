import React from "react";

import style from "./Footer.module.css";
import ftf from "../assets/logo-3-preview.png";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.serviceDays}>
          <h3 className={style.title}>SERVICE DAYS</h3>
          <p className={style.paragraph}>
            Sunday: 9:00am{" "}
            <box-icon
              type="solid"
              name="right-arrow-alt"
              color="white"
            ></box-icon>{" "}
            11:00am
          </p>
          <p className={style.paragraph}>
            Wednesday: 6:00pm{" "}
            <box-icon
              type="solid"
              name="right-arrow-alt"
              color="white"
            ></box-icon>{" "}
            8:00pm
          </p>
        </div>
        <div>
          <img src={ftf} alt="ftf" className={style.logo} />
        </div>
        <div className={style.contactInfo}>
          <h3 className={style.title}>Contact Info</h3>
          <p className={style.paragraph2}>
            Cliff hotel, along government house back road ganaja junction,
            Lokoja, Kogi State, Nigeria
          </p>
          <p className={style.paragraph2}>
            Phone: +234 813 129 5220 <br /> Mail: ftfministries@gmail.com.
          </p>
        </div>
      </div>
      <p style={{ textAlign: "center", marginTop: "100px" }}>
        ©2025 Faith of the Faithful Ministries | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
