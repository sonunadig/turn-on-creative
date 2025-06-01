import React from "react";
import styles from "./AboutPage.module.css";

import BannerSection from "../assets/sections/BannerSection";
import ImageGallerySection from "../assets/sections/ImageGallerySection";
import OurStorySection from "../assets/sections/OurStorySection";
import TeamSection from "../assets/sections/TeamSection";

import smallLeftImage from "../assets/images/Mask group-3.png";
import bigCenterImage from "../assets/images/Mask group-4.png";
import smallRightImage from "../assets/images/Mask group-6.png";
import aboutUsImage from "../assets/images/Mask group-1.png";

function AboutPage() {
  return (
    <>
      <BannerSection />
      <div className={styles.aboutUsPage}>
        <ImageGallerySection
          smallLeftImage={smallLeftImage}
          bigCenterImage={bigCenterImage}
          smallRightImage={smallRightImage}
        />{" "}
        <OurStorySection aboutUsImage={aboutUsImage} />
        <TeamSection />
      </div>
    </>
  );
}

export default AboutPage;
