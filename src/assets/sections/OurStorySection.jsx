import React from "react";
import styles from "./OurStorySection.module.css";
import CuttingTextOverlay from "../components/CuttingTextOverlay";

function OurStorySection({ aboutUsImage }) {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.headingContainer}>
        <CuttingTextOverlay
          headingClassName="dynamic-rotate"
          style={{ "--rotation-angle": "0deg" }}
          title="How a Love for the Lens Turned Into a Journey of Creative Obsession"
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
        <div
          className={`${styles.text} dynamic-rotate`}
          style={{ "--rotation-angle": "-4deg" }}
        >
          <p>
            It all began with a shared fascination for moving images and the
            magic they create. What started as a passion for storytelling
            through a camera lens slowly evolved into a deeper dive into the
            world of ad films, brand narratives, and content that connects.
            Years later, that same obsession fuels every project we take on.
          </p>
          <p>
            With every brief, we chase thethrill of building something
            unforgettable—pushing boundaries, embracing chaos, and making sure
            each frame earns its place. We don’t just make films. We live them,
            frame by frame.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurStorySection;
