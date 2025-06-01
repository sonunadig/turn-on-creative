// src/pages/ContactPage.jsx
import React, { useState } from "react"; // Import useState hook
import styles from "./ContactPage.module.css";
import Button from "../assets/components/Button"; // Ensure this import path is correct

function ContactPage() {
  // 1. State for managing form input values
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "", // Note: name attribute is 'phoneNumber' in JSX
    email: "",
    message: "",
  });

  // 2. State for managing form submission status and feedback
  const [isLoading, setIsLoading] = useState(false); // To show loading state (e.g., "Sending...")
  const [statusMessage, setStatusMessage] = useState(""); // To display success/error messages
  const [isSuccess, setIsSuccess] = useState(false); // To determine styling for the status message

  // 3. Handle changes in form inputs
  // This function updates the 'formData' state as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the correct field based on 'name' attribute
    }));
  };

  // 4. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default browser form submission (page reload)

    // Clear any previous status messages before a new submission
    setStatusMessage("");
    setIsSuccess(false);

    // Basic client-side validation
    // HTML 'required' attribute provides basic validation, but this adds a check before sending
    if (!formData.fullName || !formData.email || !formData.message) {
      setStatusMessage("Please fill in all required fields.");
      setIsSuccess(false); // Ensure it's marked as an error
      return; // Stop the submission process
    }

    setIsLoading(true); // Set loading state to true, disabling the button

    try {
      // Make a POST request to your Node.js backend endpoint
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify that we're sending JSON data
        },
        body: JSON.stringify(formData), // Convert your formData object to a JSON string
      });

      // Parse the JSON response from the backend
      const data = await response.json();

      if (response.ok && data.success) {
        // If the response was successful (HTTP 2xx status and success: true from backend)
        setStatusMessage(data.message); // Display success message from the backend
        setIsSuccess(true);
        // Clear the form fields after successful submission
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        // If the response was not OK or success: false from backend
        setStatusMessage(
          data.message || "Failed to send message. Please try again."
        );
        setIsSuccess(false); // Mark as an error
      }
    } catch (error) {
      // Catch any network errors (e.g., server not running, no internet connection)
      console.error("Error submitting form:", error);
      setStatusMessage(
        "Network error. Please check your connection and try again."
      );
      setIsSuccess(false);
    } finally {
      setIsLoading(false); // Always reset loading state, regardless of success or error
    }
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
                    name="fullName" // Name attribute must match the state key
                    className={styles.input}
                    placeholder="Your Full Name"
                    required
                    value={formData.fullName} // Make this a controlled component
                    onChange={handleChange} // Update state on change
                  />
                </div>

                {/* Phone and Email Fields (Second Form Row) */}
                <div className={styles.formRow}>
                  {/* Phone Field Group */}
                  <div
                    className={`${styles.formGroup} ${styles.phoneFieldGroup}`}
                  >
                    <label htmlFor="phone" className={styles.visuallyHidden}>
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phoneNumber" // Name attribute must match the state key
                      className={styles.input}
                      placeholder="(XXX) XXX-XXXX"
                      value={formData.phoneNumber} // Make this a controlled component
                      onChange={handleChange} // Update state on change
                    />
                  </div>
                  {/* Email Field Group */}
                  <div
                    className={`${styles.formGroup} ${styles.emailFieldGroup}`}
                  >
                    <label htmlFor="email" className={styles.visuallyHidden}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email" // Name attribute must match the state key
                      className={styles.input}
                      placeholder="your.email@example.com"
                      required
                      value={formData.email} // Make this a controlled component
                      onChange={handleChange} // Update state on change
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
                    name="message" // Name attribute must match the state key
                    className={`${styles.input} ${styles.textarea}`}
                    rows="6" // Adjust rows as needed
                    placeholder="Tell us about your project or inquiry..."
                    required
                    value={formData.message} // Make this a controlled component
                    onChange={handleChange} // Update state on change
                  ></textarea>
                </div>

                {/* Display Status Message */}
                {statusMessage && (
                  <p
                    className={
                      isSuccess ? styles.successMessage : styles.errorMessage
                    }
                  >
                    {statusMessage}
                  </p>
                )}

                {/* Submit Button (Fourth Form Row) */}
                <Button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isLoading} // Disable button while submission is in progress
                >
                  {isLoading ? "Sending..." : "Send Message"}
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
