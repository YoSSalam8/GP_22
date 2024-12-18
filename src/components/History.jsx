import React from "react";
import { motion } from "framer-motion";
import "./History.css";
import historyImage from "../assets/images/history.jpg";

const History = () => {
  return (
    <section id="history-section" className="history">
      <motion.div
        className="history-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Text Animation */}
        <div className="history-text">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            Our History
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            Established in 2000, HR Management has been at the forefront of
            revolutionizing the HR industry. Our two decades of experience have
            empowered businesses to achieve their full potential through
            efficient HR practices. With a commitment to innovation and
            excellence, we have helped organizations transform their workforce
            management for sustainable growth.
          </motion.p>
        </div>

        {/* Image Animation */}
        <motion.img
          src={historyImage}
          alt="Company History"
          className="history-image"
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: -2 }}
        />
      </motion.div>
    </section>
  );
};

export default History;
