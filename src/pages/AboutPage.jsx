// src/pages/AboutPage.jsx
import React from "react";
import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.bannerHeading}>
          The Crew Behind the Camera and{" "}
          <a className="stroke-effect">the Chaos</a>
        </h1>
      </div>
    </>
  );
}

export default AboutPage;
