import React from "react";
import "./Hero.css";
import homeImage from "../assets/images/home.png"; // Import the image

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero-section"className="hero" style={{ backgroundImage: `url(${homeImage})` }}>
      <div className="hero-content">
        <h1>Empowering Operators Worldwide</h1>
        <p>
          Operating alongside our clients' businesses, addressing their most
          complex mission-critical issues through innovative solutions that
          improve their performance and create lasting value across enterprises.
        </p>
        <button className="scroll-arrow" onClick={scrollToAbout}>
          &#x25BC;
        </button>
      </div>
    </section>
  );
};

export default Hero;
