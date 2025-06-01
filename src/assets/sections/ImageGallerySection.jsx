import React from "react";
import styles from "./ImageGallerySection.module.css";

function ImageGallerySection({
  smallLeftImage,
  bigCenterImage,
  smallRightImage,
}) {
  return (
    <section className={styles.imageSection}>
      <div className={styles.imageRow}>
        {/* Small Left Image */}
        <div className={`${styles.smallImageContainer} ${styles.left}`}>
          <img
            src={smallLeftImage}
            alt="Our Team Member"
            className={styles.smallImage}
          />
        </div>
        {/* Big Center Image */}
        <div className={styles.bigImageContainer}>
          <img
            src={bigCenterImage}
            alt="Creative Workspace"
            className={styles.bigImage}
          />
        </div>
        {/* Small Right Image */}
        <div className={`${styles.smallImageContainer} ${styles.right}`}>
          <img
            src={smallRightImage}
            alt="Project Collaboration"
            className={styles.smallImage}
          />
        </div>
      </div>
      <div className={styles.descriptionRow}>
        <p className={styles.smallDescription}>
          A creative agency that turns ideas into impactful realities. With a
          passion for innovation and a commitment to excellence
        </p>
      </div>
    </section>
  );
}

export default ImageGallerySection;
