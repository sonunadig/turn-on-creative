// src/pages/WorksPage.jsx
import React from "react";
import styles from "./WorksPage.module.css";

import maskGroup4Image from "../assets/images/Mask group-4.png";

// Sample data for your portfolio items
// In a real app, this might come from an API or a separate data file
const portfolioItems = [
  {
    id: 1,
    name: "Aqua Branding",
    category: "Branding",
    image: maskGroup4Image,
    size: "large",
    rotation: "rotate-right",
  },
  {
    id: 2,
    name: "Urban Storefront",
    category: "Web Design",
    image: maskGroup4Image,
    size: "small",
    rotation: "rotate-left",
  },
  {
    id: 3,
    name: "Echo Campaign",
    category: "Marketing",
    image: maskGroup4Image,
    size: "medium",
    rotation: "rotate-left",
  },
  {
    id: 4,
    name: "Pixel Perfect App",
    category: "UI/UX",
    image: maskGroup4Image,
    size: "small",
    rotation: "rotate-right",
  },
  {
    id: 5,
    name: "Forest Photography",
    category: "Content Creation",
    image: maskGroup4Image,
    size: "large",
    rotation: "rotate-right",
  },
  {
    id: 6,
    name: "Brand Re-Imagine",
    category: "Branding",
    image: maskGroup4Image,
    size: "small",
    rotation: "rotate-left",
  },
  {
    id: 7,
    name: "Flow Animation",
    category: "Motion Graphics",
    image: maskGroup4Image,
    size: "medium",
    rotation: "rotate-left",
  },
  {
    id: 8,
    name: "Startup Pitch Deck",
    category: "Presentation",
    image: maskGroup4Image,
    size: "small",
    rotation: "rotate-right",
  },
];

function WorksPage() {
  return (
    <>
      {/* Existing Banner Section */}
      <div className={styles.banner}>
        <h1 className={styles.bannerHeading}>
          Ad Films Crafted to Spark, Sell,{" "}
          <a className="stroke-effect">and Stay</a>
        </h1>
      </div>

      {/* New Portfolio Section */}
      <section className={styles.portfolioSection}>
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              // Apply classes for size and optional rotation
              className={`${styles.portfolioItem} ${styles[item.size] || ""} ${
                styles[item.rotation] || ""
              }`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.portfolioImage}
                />
              </div>
              <div className={styles.detailsRow}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemCategory}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default WorksPage;
