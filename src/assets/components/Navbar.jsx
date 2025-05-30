// src/components/Navbar.jsx

import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" onClick={closeMenu}>
          <h2>Turn On Creative</h2>
        </Link>
      </div>
      <nav>
        {/* Hamburger/Menu Icon - visible only on smaller screens */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation menu"
        >
          {/* You can use a simple span/div for the icon, or an SVG */}
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Navigation Links - conditionally show/hide and style */}
        <ul
          className={`${styles.navlinks} ${
            isMenuOpen ? styles.navlinksOpen : ""
          }`}
        >
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/our-works" onClick={closeMenu}>
              Works
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
