import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Import Router components
import Navbar from "./components/Navbar.jsx"; // Import Navbar
import Footer from "./components/Footer.jsx"; // Import Footer
import Hero from "./components/Hero.jsx"; // Import Hero Section
import About from "./components/About.jsx"; // Import About Section
import History from "./components/History.jsx"; // Import History Section
import LoginPage from "./components/LoginPage.jsx"; // Import LoginPage
import SignupPage from "./components/SignupPage.jsx"; // Import SignupPage
import AdminDashboard from "./components/admin/AdminDashboard.jsx"; // Import Admin Dashboard
import RegisterForm from "./components/RegisterForm.jsx"; // Import RegisterForm Component

// Wrapper for the Home Page
function Home() {
  return (
    <>
      <Hero />
      <About />
      <History />
    </>
  );
}

// Layout Wrapper
function Layout({ children }) {
  const location = useLocation(); // Get the current location

  // Routes that use the default Navbar
  const defaultNavbarRoutes = ["/", "/login", "/signup", "/register"];

  const showDefaultNavbar = defaultNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showDefaultNavbar ? <Navbar /> : null} {/* Conditional Navbar */}
      {children} {/* Render the child components */}
      {showDefaultNavbar && <Footer />} {/* Footer only visible for default routes */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Route */}
          <Route path="/login" element={<LoginPage />} /> {/* Login Page */}
          <Route path="/signup" element={<SignupPage />} /> {/* Signup Page */}
          <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Dashboard */}
          <Route path="/register" element={<RegisterForm />} /> {/* Register Form Route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
