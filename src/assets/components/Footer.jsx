import React from "react";
import Button from "./Button";
import styles from "./Footer.module.css";

function Footer() {
  const handleButtonClick = () => {
    alert("Start Talking!");
  };

  return (
    <footer className={styles.footer}>
      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>
          Think your story <br /> needs a little magic?
        </h2>
        <div className={styles.ctaRight}>
          <p className={styles.ctaText}>
            Let's create something unforgettable.
          </p>
          <Button
            onClick={handleButtonClick}
            className={styles.footerUnderlineButton}
          >
            Let's Talk
          </Button>
        </div>
      </div>

      {/* Footer Info Section */}
      <div className={styles.footerMain}>
        <div className={styles.footerTop}>
          <h1 className={styles.siteTitle}>Turn On Creations</h1>
          <nav>
            <ul className={styles.footerNav}>
              <li>Home</li>
              <li>About</li>
              <li>Works</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <hr className={styles.divider} />

        <div className={styles.footerBottom}>
          <p className={styles.copy}>
            © 2025 Turn On Creations. All rights reserved.
          </p>
          <div className={styles.socials}>
            {/* Replace with actual icons/links */}
            <span>FB</span>
            <span>IG</span>
            <span>YT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
