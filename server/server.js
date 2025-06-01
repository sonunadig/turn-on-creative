require("dotenv").config(); // Load environment variables from .env file immediately

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
// Use the PORT from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// --- Middleware Setup ---
// Enable CORS for all routes to allow your React app to make requests
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"], // Explicitly allow requests from your React app's origin
    credentials: true,
  })
);

// Parse JSON request bodies (important for receiving form data from React)
app.use(express.json());

// --- Nodemailer Transporter Setup ---
// This creates a reusable transporter object using your SMTP settings.
// IMPORTANT: Replace with your actual email service provider details.
// We use environment variables for security.
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com' for Gmail, 'smtp-mail.outlook.com' for Outlook
  port: parseInt(process.env.EMAIL_PORT || "587", 10), // e.g., 587 for TLS/STARTTLS, 465 for SSL
  secure: process.env.EMAIL_SECURE === "true", // true for port 465 (SSL), false for other ports like 587 (TLS/STARTTLS)
  auth: {
    user: process.env.EMAIL_USER, // Your email address that will SEND the emails
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
  // Optional: Some setups might need specific TLS options.
  // Generally, `rejectUnauthorized: false` should be avoided in production if you don't control the SMTP server.
  tls: {
    rejectUnauthorized: false,
  },
});

// --- Transporter Connection Verification (Optional, but Recommended for Debugging) ---
transporter.verify(function (error) {
  if (error) {
    console.error("Nodemailer Transporter verification failed:", error);
    console.error(
      "Check your EMAIL_HOST, EMAIL_PORT, EMAIL_USER, and EMAIL_PASS in your .env file."
    );
  } else {
    console.log(
      "Server is ready to send messages (Nodemailer transporter is configured)."
    );
  }
});

app.options("/api/contact", cors());
// --- API Endpoint for Contact Form Submission ---
app.post("/api/contact", async (req, res) => {
  // This function block starts here
  const { fullName, phoneNumber, email, message } = req.body;
  console.log(req.body);

  // Basic server-side validation
  if (!fullName || !email || !message) {
    return res.status(400).json({
      success: false,
      message:
        "Please fill in all required fields (Full Name, Email, Message).",
    });
  }

  // Define the email content
  const mailOptions = {
    from: process.env.EMAIL_USER, // The email address that is sending the form (must be your EMAIL_USER)
    to: process.env.RECEIVING_EMAIL, // The email address where you want to RECEIVE the form submissions
    subject: `New Contact Form Inquiry from ${fullName}`, // Subject line for the email
    // Corrected: Use backticks (`) for multi-line string and proper variable interpolation
    html: `
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phoneNumber || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
        `, // HTML body content of the email
  }; // Corrected: Missing closing brace for mailOptions object

  try {
    // Attempt to send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    // Respond to the frontend with success
    res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    // Respond to the frontend with an error
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
}); // Corrected: Missing closing parenthesis and brace for app.post function block

// --- Start the Express Server ---
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Backend API URL: http://localhost:${PORT}`);
});
