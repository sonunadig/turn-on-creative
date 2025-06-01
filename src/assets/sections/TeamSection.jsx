// src/sections/TeamSection.jsx
import React from "react";
import styles from "./TeamSection.module.css"; // Dedicated CSS module for TeamSection
import CuttingTextOverlay from "../components/CuttingTextOverlay";

// Dummy image imports - REPLACE WITH YOUR ACTUAL IMAGE IMPORTS
import teamMember1 from "../images/Mask group-2.png"; // Placeholder
import teamMember2 from "../images/Mask group-2.png"; // Placeholder
import teamMember3 from "../images/Mask group-2.png"; // Placeholder
import teamMember4 from "../images/Mask group-2.png"; // Placeholder
import teamMember5 from "../images/Mask group-2.png"; // Placeholder
import teamMember6 from "../images/Mask group-2.png"; // Placeholder
import teamMember7 from "../images/Mask group-2.png"; // Placeholder
import teamMember8 from "../images/Mask group-2.png"; // Placeholder

// Dummy Team Member Data
const teamMembers = [
  {
    id: 1,
    name: "Aditya P. Sharma",
    designation: "Director",
    image: teamMember1,
    rotate: "-3deg",
    verticalOffset: "10px",
  },
  {
    id: 2,
    name: "Priya Singh",
    designation: "Creative Lead",
    image: teamMember2,
    rotate: "2deg",
    verticalOffset: "0px",
  },
  {
    id: 3,
    name: "Rahul Verma",
    designation: "Lead Editor",
    image: teamMember3,
    rotate: "-1deg",
    verticalOffset: "15px",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    designation: "Senior Producer",
    image: teamMember4,
    rotate: "4deg",
    verticalOffset: "5px",
  },
  {
    id: 5,
    name: "Arjun Reddy",
    designation: "Animator",
    image: teamMember5,
    rotate: "1deg",
    verticalOffset: "-5px",
  },
  {
    id: 6,
    name: "Kavya Rao",
    designation: "Sound Designer",
    image: teamMember6,
    rotate: "-2deg",
    verticalOffset: "12px",
  },
  {
    id: 7,
    name: "Vikas Kumar",
    designation: "Cinematographer",
    image: teamMember7,
    rotate: "3deg",
    verticalOffset: "0px",
  },
  {
    id: 8,
    name: "Disha Mehta",
    designation: "Strategist",
    image: teamMember8,
    rotate: "-4deg",
    verticalOffset: "8px",
  },
];

function TeamSection() {
  return (
    <section className={styles.teamSection}>
      {/* Heading which uses CuttingTextOverlay */}
      <div className={styles.teamHeadingContainer}>
        <CuttingTextOverlay
          title="The Minds Behind the Madness"
          headingClassName={styles.teamHeadingText} // Custom class for heading font size, etc.
          style={{ "--rotation-angle": "-2deg" }} // Example rotation for the heading
        />
      </div>

      {/* 8-Grid Layout - 4 columns and two rows */}
      <div className={styles.teamGridContainer}>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className={styles.teamGridItem}
            style={{
              transform: `rotate(${member.rotate}) translateY(${member.verticalOffset})`,
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              className={styles.teamImage}
            />
            <h3 className={styles.teamName}>{member.name}</h3>
            {/*<p className={styles.teamDesignation}>{member.designation}</p>*/}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
