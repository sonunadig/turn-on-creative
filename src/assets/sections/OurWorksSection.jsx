import React from "react";
import styles from "./OurWorksSection.module.css";
import SectionHeading from "../components/SectionHeading.jsx";

import workImage1 from "../images/Mask group-1.png";
import workImage2 from "../images/Mask group-2.png";
import workImage3 from "../images/Mask group-3.png";
import workImage4 from "../images/Mask group-4.png";
import workImage5 from "../images/Mask group-5.png";
import workImage6 from "../images/Mask group-6.png";
import CuttingTextOverlay from "../components/CuttingTextOverlay.jsx";

function OurWorksSection() {
  const workImages = [
    { id: 1, src: workImage1, alt: "Work showcase 1" },
    { id: 2, src: workImage2, alt: "Work showcase 2" },
    { id: 3, src: workImage3, alt: "Work showcase 3" },
    { id: 4, src: workImage4, alt: "Work showcase 4" },
    { id: 5, src: workImage5, alt: "Work showcase 5" },
    { id: 6, src: workImage6, alt: "Work showcase 6" },
  ];

  const imageRotationAngles = [
    "11deg", // for img1
    "-11.99deg", // for img2
    "15.82deg", // for img3
    "-12.36deg", // for img4
    "21.88deg", // for img5
    "-24.98deg", // for img6
  ];

  return (
    <section className={styles.ourWorksSection}>
      <div className={styles.heading}>
        <CuttingTextOverlay title="Dive Into Our Collection of Films That Turn Ideas Into Memorable Stories" />
      </div>
      <div className={styles.imageGrid}>
        {workImages.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`${styles.image} ${styles[`img${index + 1}`]}`}
            style={{ "--rotation-angle": imageRotationAngles[index] }}
          />
        ))}
      </div>
    </section>
  );
}

export default OurWorksSection;
