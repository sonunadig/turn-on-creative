import React from "react";
import styles from "./HeroSection.module.css";
import Button from "../components/Button.jsx";

function HeroSection() {
  const handleButtonClick = () => {
    alert("Hero button clicked!");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Scripted for <a className="stroke-effect">brands</a>. Shot for
          <a className="stroke-effect"> impact</a>.
        </h1>
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={handleButtonClick}>See the Magic</Button>
      </div>
    </section>
  );
}

export default HeroSection;
