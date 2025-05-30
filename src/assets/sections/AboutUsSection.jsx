import React from "react";
import styles from "./AboutUsSection.module.css";
import Button from "../components/Button.jsx";
import aboutUsImage from "../images/h-about.png";
import CuttingTextOverlay from "../components/CuttingTextOverlay.jsx";

function AboutUsSection() {
  const handleLearnMoreClick = () => {
    alert("About Us clicked!");
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.headingContainer}>
        {/* Using a new class name for clarity */}
        <CuttingTextOverlay
          headingClassName="dynamic-rotate"
          style={{ "--rotation-angle": "0deg" }}
          title="Decades of film craft with no shortcuts as every project is built from scratch."
        />
      </div>
      <div className={styles.contentRow}>
        <div className={styles.image}>
          <img
            className="dynamic-rotate"
            style={{ "--rotation-angle": "-2deg" }}
            src={aboutUsImage}
            alt="About Us - Our Team"
          />
        </div>
        <div className={styles.text}>
          <p className="dynamic-rotate" style={{ "--rotation-angle": "-4deg" }}>
            A team of passionate ad film nerds, brand thinkers, and storytellers
            who know that every great project begins with collaboration. We
            craft content that not only meets the brief but also strikes a chord
            with the audience—leaving a lasting impact.
          </p>
          <div className={styles.buttonWrapper}>
            <Button
              onClick={handleLearnMoreClick}
              className={styles.circleButton}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
