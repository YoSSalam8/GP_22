import React from "react";
import { motion } from "framer-motion";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <div className="signup-page">
      <motion.div
        className="signup-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>Create Your Account</h1>
        <p className="signup-subtitle">Join us and manage HR effectively!</p>
        <form>
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <label htmlFor="confirm-password">Rewrite Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Re-enter your password"
            />
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <label htmlFor="access-code">Access Code</label>
            <input type="text" id="access-code" placeholder="Enter your access code" />
          </motion.div>
          <motion.button
            type="submit"
            className="btn signup-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </form>
        <p className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
