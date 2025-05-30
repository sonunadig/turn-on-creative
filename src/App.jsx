// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar.jsx"; // Your "Header"
import Footer from "./assets/components/Footer.jsx";

// Import your pages
import HomePage from "./pages/Homepage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import WorksPage from "./pages/WorksPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* Background SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1414 5168"
        fill="none"
        preserveAspectRatio="none"
        className="svg-bg" // <--- FIX IS HERE: Changed 'class' to 'className'
      >
        <path
          d="M422.5 11.4348L353 18.7115L214.5 7.79644L54.5 11.4348L5.00177 7.79644L11.5041 71.2075V202.707L22.508 219.86L11.5041 307.18L22.508 353.958L11.5041 544.191L26.0092 633.591L11.5041 732.346L20.5072 862.806L5.00177 981.312L17.5062 1093.06L4.00141 1284.33L14.005 1375.29L4.00141 1491.2L15.5055 1634.65L4.00141 1713.66L7.00248 1899.21L0 2097.76L17.006 2128.43L2.50088 2312.94L17.006 2412.22L2.50088 2544.76L18.5065 2701.73L5.00177 2831.15L15.5055 2981.36L5.00177 3029.18L15.5055 3196.02L5.00177 3267.23L15.5055 3427.83L5.00177 3497.48L15.5055 3584.28L5.00177 3649.25L21.5076 3895.1L8.50301 3944.48L21.5076 4095.21L6.00212 4125.88L13.5048 4317.67L31.5111 4364.45L13.5048 4507.9L31.5111 4548.96L18.0064 4621.73L13.5048 4699.17L18.0064 4817.68L13.5048 4912.28L27.5097 4964.77L13.5048 5061.45V5163.84L79.0279 5168L256.091 5158.12L398.641 5168L491.674 5148.25L559.698 5168L704.249 5148.25L840.297 5168H868.5H924L974.344 5160.72H1056.87L1122.4 5148.25L1264.45 5154.49L1412 5148.25L1402.5 5007.91L1390.49 4821.84L1414 4587.42L1395.99 4478.79L1414 4345.74L1410.5 4093.65L1396.49 4067.66L1413.5 3928.37L1398.49 3723.58L1413 3586.88L1401 3417.96L1414 3158.08L1392.99 3106.62L1404.5 3009.43L1392.99 2953.29L1414 2864.41L1392.99 2696.53L1414 2649.75L1404 2584.26L1387.49 2537.48L1410 2343.61L1387.49 2245.37L1410 2108.68L1394.99 1963.14L1389.99 1792V1669.48L1405.5 1586L1383.99 1472.49L1405.5 1350.34L1387.99 1175.18L1402 1080.59L1380.99 888.274L1402 784.322V573.298L1390.99 462.069L1402.5 383.065L1382.99 255.203L1396.99 18.7115L1324.97 0L1250.44 7.79644L1218.43 18.7115L1031.86 0L933.5 18.7115L790.78 11.4348H687H578.705L500.5 18.7115L422.5 11.4348Z"
          fill="#f7e8c6"
        />
      </svg>

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "2rem",
        }}
      >
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/our-works" element={<WorksPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
