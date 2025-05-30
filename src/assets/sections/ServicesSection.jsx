// src/components/ServicesSection.jsx (No changes needed)

import React from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import styles from "./ServicesSection.module.css";

import serviceImage1 from "../images/Mask groupServices-3.png";
import serviceImage2 from "../images/Mask groupServices-2.png";
import serviceImage3 from "../images/Mask groupServices-1.png";
import serviceImage4 from "../images/Mask groupServices.png";
import CuttingTextOverlay from "../components/CuttingTextOverlay.jsx";

function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Stories That Sell, Frames That Stay.",
      image: serviceImage1,
      alt: "Icon for Web Design",
    },
    {
      id: 2,
      title: "Your Brand, Told Cinematically",
      image: serviceImage2,
      alt: "Icon for Development",
    },
    {
      id: 3,
      title: "Bold Campaigns That Stand Out.",
      image: serviceImage3,
      alt: "Icon for Branding",
    },
    {
      id: 4,
      title: "Strategy That Shapes Perception",
      image: serviceImage4,
      alt: "Icon for Marketing",
    },
  ];

  // Define your rotation values for each card
  const cardRotationAngles = [
    "-11deg", // Rotation for the first card
    "8.336deg", // Rotation for the second card
    "-4deg", // Rotation for the third card
    "10deg", // Rotation for the fourth card
  ];

  return (
    <section className={styles.servicesSection}>
      {" "}
      {/* Added class for base section styling */}
      <div className={styles.servicesHeadingContainer}>
        <CuttingTextOverlay
          title="Services Overview"
          headingClassName={styles.servicesHeadingTextStyles}
        />
      </div>
      <div className={styles.servicesGrid}>
        {services.map(
          (
            service,
            index // Make sure to get the 'index' here
          ) => (
            <div
              key={service.id}
              className={styles.serviceCard}
              // *** Apply the inline style with the custom property ***
              style={{ "--card-rotation-angle": cardRotationAngles[index] }}
            >
              <img
                src={service.image}
                alt={service.alt}
                className={styles.serviceImage}
              />
              <h5>{service.title}</h5>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default ServicesSection;
