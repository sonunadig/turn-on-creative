// src/pages/ContactPage.jsx
import React from "react";
import styles from "./ContactPage.module.css";
import Button from "../assets/components/Button";

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd gather and send this data to a backend
    alert("Form submitted! (This is a placeholder action)");
    // const formData = new FormData(e.target);
    // console.log([...formData.entries()]);
  };
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.bannerHeading}>
          Reach Out and Let's Create Something{" "}
          <a className="stroke-effect">Unforgettable</a>
        </h1>
      </div>
      <div className={styles.contactPage}>
        <div className={styles.borderedContainer}>
          {/* First Row: Heading and Description */}
          <div className={styles.headingRow}>
            <h1 className={styles.mainHeading}>Let's Connect</h1>
            <p className={styles.description}>
              We're excited to hear about your project and answer any questions
              you may have. Reach out to us using the form below or connect
              through our direct contact information.
            </p>
          </div>

          {/* Second Row: Two Equal Columns */}
          <div className={styles.contentRow}>
            {/* Left Column: Contact Form */}
            <div className={styles.contactFormContainer}>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                {/* Full Name Field (First Form Row) */}
                <div className={styles.formGroup}>
                  <label htmlFor="fullName" className={styles.visuallyHidden}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={styles.input}
                    placeholder="Your Full Name"
                    required
                  />
                </div>

                {/* Phone and Email Fields (Second Form Row) */}
                <div className={styles.formRow}>
                  {/* Add a specific class for the phone field group */}
                  <div
                    className={`${styles.formGroup} ${styles.phoneFieldGroup}`}
                  >
                    <label htmlFor="phone" className={styles.visuallyHidden}>
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phoneNumber"
                      className={styles.input}
                      placeholder="(XXX) XXX-XXXX"
                    />
                  </div>
                  {/* Add a specific class for the email field group */}
                  <div
                    className={`${styles.formGroup} ${styles.emailFieldGroup}`}
                  >
                    <label htmlFor="email" className={styles.visuallyHidden}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={styles.input}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Message Text Area (Third Form Row) */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.visuallyHidden}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    rows="6" // Adjust rows as needed
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button (Fourth Form Row) */}
                <Button type="submit" className={styles.submitButton}>
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right Column: Contact Information and Social Links */}
            <div className={styles.contactInfo}>
              <h3 className={styles.contactHeading}>Reach Out Directly</h3>
              <p className={styles.infoText}>
                Have an urgent query or prefer to speak directly? We're just a
                call or email away.
              </p>
              <div className={styles.contactDetails}>
                <p>
                  <strong>Email:</strong> info@turnoncreations.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Address:</strong> 123 Creative Lane, Innovation City,
                  CA 90210
                </p>
              </div>

              <h3 className={styles.infoHeading}>Connect With Us</h3>
              <div className={styles.socials}>
                {/* Replace with actual icons/links and add styling */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FB
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IG
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YT
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LI
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
