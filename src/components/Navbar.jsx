import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if the current page is Login or Signup
  const isAuthPage = ["/signup", "/login", "/register"].includes(location.pathname);

  return (
    <nav className="navbar">
      <div
        className="navbar-brand"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        HR Management
      </div>
      {!isAuthPage && (
        <div className="navbar-center">
          <a
            href="#hero-section"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Home
          </a>
          <a
            href="#about-section"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              setTimeout(() => {
                document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            About
          </a>
          <a
            href="#history-section"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              setTimeout(() => {
                document.getElementById("history-section")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            History
          </a>
        </div>
      )}
      <div className="navbar-buttons">
        <button
          className="btn login"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="btn signup"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
        <button
          className="btn register"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
