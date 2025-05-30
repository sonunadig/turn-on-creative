// src/components/CuttingTextOverlay.jsx (Modified)
import React from "react";
import styles from "./CuttingTextOverlay.module.css";
import SectionHeading from "./SectionHeading.jsx";

/**
 * Renders a heading with a two-layer cut-through effect (filled and stroked),
 * designed to allow another element (like an image) to appear between the layers.
 *
 * @param {string} title - The text content for the heading.
 * @param {string} headingClassName - Optional CSS class for additional text styling (e.g., font size).
 * @param {object} style - Optional inline style object to pass to the inner heading elements. // ADDED
 */
function CuttingTextOverlay({ title, headingClassName, style }) {
  // ADDED style prop
  return (
    <>
      {/* The 'filled' heading layer */}
      <div className={`${styles.headingWrapper} ${styles.behind}`}>
        <SectionHeading
          title={title}
          className={`${styles.filled} ${headingClassName || ""}`}
          style={style} // Pass the style prop down here
        />
      </div>

      {/* The 'stroked' heading layer */}
      <div className={`${styles.headingWrapper} ${styles.front}`}>
        <SectionHeading
          title={title}
          className={`${styles.stroked} ${headingClassName || ""}`}
          style={style} // Pass the style prop down here
        />
      </div>
    </>
  );
}

export default CuttingTextOverlay;
