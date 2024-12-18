import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import aboutImage from "../assets/images/about.jpg";

const About = () => {
  return (
    <section id="about-section" className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Image Animation */}
        <motion.img
          src={aboutImage}
          alt="HR Management"
          className="about-image"
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />

        {/* Text Content with Animations */}
        <div className="about-text">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            About Our Company
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            Welcome to HR Management, where innovation meets efficiency. We
            specialize in creating modern HR solutions that help businesses
            streamline their workforce management, enhance productivity, and
            foster growth. With over two decades of expertise, we lead the way
            in empowering organizations to achieve their goals through effective
            HR practices.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
