// src/pages/WorksPage.jsx
import React from "react";
import styles from "./WorksPage.module.css";

function WorksPage() {
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.bannerHeading}>
          Ad Films Crafted to Spark, Sell,{" "}
          <a className="stroke-effect">and Stay</a>
        </h1>
      </div>
    </>
  );
}

export default WorksPage;
