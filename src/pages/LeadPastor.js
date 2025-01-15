import React from "react";

import "boxicons";

import SecondaryHeader from "../utilities/SecondaryHeader";
import Navigation from "../components/Navigation";
import Footer from "../sections/Footer";
import style from "./Blog.module.css";
import styles from "./LeadPastor.module.css";
import PrimaryHeader from "../utilities/PrimaryHeader";

// Reusable SocialLink Component
const SocialLink = ({ href, name, type, animation = "tada", size = "sm" }) => (
  <a href={href} className={styles.socialLink}>
    <box-icon
      name={name}
      type={type}
      animation={animation}
      size={size}
    ></box-icon>
  </a>
);

// Reusable PastorDetails Component
const PastorDetails = ({ name, position, description, extraInfo }) => (
  <div className={styles.pastorContactCard}>
    <h3 className={styles.fullName}>{name}</h3>
    <h4 className={styles.position}>{position}</h4>
    {description.map((paragraph, index) => (
      <p className={styles.paragraph} key={index}>
        {paragraph}
      </p>
    ))}
    {extraInfo && <p className={styles.paragraph}>{extraInfo}</p>}
  </div>
);

const LeadPastor = () => {
  const pastorDescription = [
    `Pastor Isah David is a dynamic teacher, Pastor and a strategic 
     "Impactpreneur" with a clear mandate to raise true kingdom ambassadors 
     in every sphere packaged in success and excellence.`,
    `The Lord Jesus told him "I have given you grace and apostleship to make the 
     nations obedient to the faith for my name sake" this has become his driving 
     force and oversight of Gloryzone International Ministry, a young Multi-stream 
     movement reaching the world through different platforms.`,
    `Through his T.V Program Supernatural shift, Radio broadcast and Internet platforms, 
     he is fast shaping the culture of the emerging young generation. He is the Global Lead 
     Pastor of Gloryzone International Ministry headquartered in the city of Jos Nigeria, 
     and he is blessed with an amazing beautiful wife Pst Peniel U. AmehWealth and 3 children, 
     Kristine, Jason and Jovan.`,
  ];

  const socialLinks = [
    { href: "#", name: "envelope", type: "solid" },
    { href: "#", name: "facebook", type: "logo" },
    { href: "#", name: "twitter", type: "logo" },
  ];

  return (
    <>
      <Navigation />
      <div className={style.blog}>
        <PrimaryHeader subTitle="Our Prophet" title="Our Global Lead Pastor" />
      </div>

      <div className={styles.leadPastor}>
        <div className={styles.leadPastorCard}>
          <div className={styles.leadPastorImage}>{/* Image is here */}</div>
          <PastorDetails
            name="Pst Isah David Moh'd"
            position="Global Lead Pastor"
            description={pastorDescription}
          />
          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <SocialLink key={index} {...link} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LeadPastor;
