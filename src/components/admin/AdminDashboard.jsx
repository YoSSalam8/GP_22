import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // To navigate to other pages
import "./AdminDashboard.css"; // Custom styles for Admin Dashboard

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [signUpRequests, setSignUpRequests] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "pending", role: "" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "pending", role: "" },
    { id: 3, name: "Tom Allen", email: "tom@example.com", status: "pending", role: "" },
  ]);

  const [employees, setEmployees] = useState(Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Employee ${index + 1}`,
    email: `employee${index + 1}@example.com`,
    role: index % 2 === 0 ? "Employee" : "HR",
  })));

  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState(""); 


  // Dummy data for employee statistics and HR data
  const employeeStats = {
    totalEmployees: 120,
    activeEmployees: 95,
    inactiveEmployees: 25,
    totalHR: 5,
    activeHR: 4,
    inactiveHR: 1,
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle accepting or denying a sign-up request
  const handleRequestAction = (id, action, role = "") => {
    setSignUpRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id
          ? { ...request, status: action === "accept" ? "accepted" : "denied", role }
          : request
      )
    );
    console.log(`Request ${action}: ${id} with role ${role}`);
  };

  // Function to scroll to different sections
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle role update
  const updateRole = (id, newRole) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee, role: newRole } : employee
      )
    );
  };

  // Filter employees based on search term
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const saveRoleUpdates = () => {
    console.log("Role updates saved!");
    // Here you can implement the actual save logic like calling an API
  };

  return (
    <div className="admin-dashboard">
      {/* Top Navbar */}
      <div className={`top-navbar ${isSidebarOpen ? "open" : ""}`}>
        <div className="navbar-left">
          <div className="burger-menu" onClick={toggleSidebar}>
            <span className="burger-icon"></span>
            <span className="burger-icon"></span>
            <span className="burger-icon"></span>
            {isSidebarOpen && <span className="sidebar-text">Admin Panel</span>}
          </div>
        </div>
        <div className="navbar-right">
          <img src="admin-icon.png" alt="Admin Icon" className="admin-icon" />
          <button className="logout-btn" onClick={() => navigate("/login")}>
            Logout
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <motion.div
        className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}
        initial={{ x: -250 }}
        animate={{ x: isSidebarOpen ? 0 : -250 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="sidebar-nav">
          <li onClick={() => scrollToSection("sign-up-requests")}>Sign Up Requests</li>
          <li onClick={() => scrollToSection("employee-management")}>Employee Management</li>
          <li onClick={() => scrollToSection("reports-section")}>Reports</li>
          <li onClick={() => scrollToSection("settings-section")}>Settings</li>
        </ul>
      </motion.div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <motion.div
          className="dashboard-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1>Welcome, Admin</h1>
          <p>Manage and oversee employee data effectively.</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="stats-cards"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="stat-card">
            <h3>Total Employees</h3>
            <p>{employeeStats.totalEmployees}</p>
          </div>
          <div className="stat-card">
            <h3>Active Employees</h3>
            <p>{employeeStats.activeEmployees}</p>
          </div>
          <div className="stat-card">
            <h3>Inactive Employees</h3>
            <p>{employeeStats.inactiveEmployees}</p>
          </div>
        </motion.div>

        {/* HR Stats Cards */}
        <motion.div
          className="stats-cards"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stat-card">
            <h3>Total HR</h3>
            <p>{employeeStats.totalHR}</p>
          </div>
          <div className="stat-card">
            <h3>Active HR</h3>
            <p>{employeeStats.activeHR}</p>
          </div>
          <div className="stat-card">
            <h3>Inactive HR</h3>
            <p>{employeeStats.inactiveHR}</p>
          </div>
        </motion.div>

        {/* Sign Up Requests Section */}
        <motion.div
          className="section sign-up-requests"
          id="sign-up-requests"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3>Sign Up Requests</h3>
          <p>Below are the pending sign-up requests. The admin can accept or deny these requests and assign a role (Employee or HR).</p>

          <div className="request-list">
            {signUpRequests.map((request) => (
              <motion.div
                className="request-item"
                key={request.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-header">
                  <strong>{request.name}</strong> ({request.email})
                </div>
                {request.status === "pending" && (
                  <div className="card-body">
                    <div className="role-selection">
                      <select
                        value={request.role}
                        onChange={(e) =>
                          setSignUpRequests((prevRequests) =>
                            prevRequests.map((r) =>
                              r.id === request.id
                                ? { ...r, role: e.target.value }
                                : r
                            )
                          )
                        }
                      >
                        <option value="">Select Role</option>
                        <option value="Employee">Employee</option>
                        <option value="HR">HR</option>
                      </select>
                    </div>
                    <div className="request-actions">
                      <button
                        className="accept-btn"
                        onClick={() => handleRequestAction(request.id, "accept", request.role)}
                      >
                        Accept
                      </button>
                      <button
                        className="deny-btn"
                        onClick={() => handleRequestAction(request.id, "deny")}
                      >
                        Deny
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Employee Management Section */}
        <motion.div
          className="section"
          id="employee-management"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3>Employee Management</h3>
          <p>Here you can manage all employee details.</p>

          {/* Search Bar */}
          <input
            type="text"
            className="search-bar"
            placeholder="Search Employees"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Role Filter Dropdown */}
          <div className="role-filter">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="role-filter-select"
            >
              <option value="">All Roles</option>
              <option value="Employee">Employee</option>
              <option value="HR">HR</option>
            </select>
          </div>
          

          {/* Employee Table */}
          <div className="employee-table-container">
            <table className="employee-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Update Role</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.role}</td>
                    <td>
                      <select
                        value={employee.role}
                        onChange={(e) => updateRole(employee.id, e.target.value)}
                      >
                        <option value="Employee">Employee</option>
                        <option value="HR">HR</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <button className="save-btn" onClick={saveRoleUpdates}>
            Save Changes
          </button>
        </motion.div>
        {/* Reports Section */}
        <motion.div
          className="section"
          id="reports-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3>Reports</h3>
          <p>View and generate various reports related to employee data.</p>
        </motion.div>

        {/* Settings Section */}
        <motion.div
          className="section"
          id="settings-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h3>Settings</h3>
          <p>Configure system settings and preferences.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
