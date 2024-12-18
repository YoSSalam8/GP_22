import React, { useState } from "react";
import { motion } from "framer-motion";
import Select from "react-select";
import { FaPlusCircle, FaCheckCircle } from "react-icons/fa";
import "./RegisterForm.css";

// Authority Options
const authorityOptions = [
  { id: 1, name: "Manage Employees" },
  { id: 2, name: "Manage Payroll" },
  { id: 3, name: "View Reports" },
  { id: 4, name: "Edit Policies" },
  { id: 5, name: "Recruit Employees" },
  { id: 6, name: "Manage Budgets" },
  { id: 7, name: "Access Admin Panel" },
  { id: 8, name: "Manage Projects" },
];

// Country Options
const countryOptions = [
  { value: "1", label: "United States" },
  { value: "2", label: "Canada" },
  { value: "3", label: "United Kingdom" },
  { value: "4", label: "Germany" },
  { value: "5", label: "Australia" },
  { value: "6", label: "India" },
];

const RegisterForm = () => {
  const [stage, setStage] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    emailDomains: "",
    countryIds: [],
    taxCode: "",
    departments: [{ name: "", authorities: [] }],
  });

  const handleNextStage = () => setStage((prev) => prev + 1);
  const handlePreviousStage = () => setStage((prev) => prev - 1);

  const handleAddDepartment = () => {
    setFormData({
      ...formData,
      departments: [...formData.departments, { name: "", authorities: [] }],
    });
  };

  const handleDepartmentChange = (index, value) => {
    const updatedDepartments = [...formData.departments];
    updatedDepartments[index].name = value;
    setFormData({ ...formData, departments: updatedDepartments });
  };

  const handleAuthorityChange = (deptIndex, authorityId) => {
    const updatedDepartments = [...formData.departments];
    const authorities = updatedDepartments[deptIndex].authorities;

    if (authorities.includes(authorityId)) {
      updatedDepartments[deptIndex].authorities = authorities.filter(
        (id) => id !== authorityId
      );
    } else {
      updatedDepartments[deptIndex].authorities = [...authorities, authorityId];
    }
    setFormData({ ...formData, departments: updatedDepartments });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    setShowSuccess(true);
  };

  return (
    <div className="register-form">
      {showSuccess ? (
        <motion.div
          className="success-popup"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaCheckCircle className="success-icon" />
          <h2>Form Submitted Successfully!</h2>
          <p>Your company has been registered.</p>
        </motion.div>
      ) : (
        <motion.div
          className="form-stage-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          {stage === 1 && (
            <div className="form-stage">
              <h2>Step 1: Company Information</h2>
              <input
                type="text"
                placeholder="Company Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Email Domains (comma-separated)"
                value={formData.emailDomains}
                onChange={(e) =>
                  setFormData({ ...formData, emailDomains: e.target.value })
                }
              />
              <button onClick={handleNextStage} className="next-button">
                Next
              </button>
            </div>
          )}

          {stage === 2 && (
            <div className="form-stage">
              <h2>Step 2: Location and Tax Information</h2>
              <label>Select Country</label>
              <Select
                options={countryOptions}
                isMulti
                placeholder="Select Countries"
                onChange={(selected) =>
                  setFormData({
                    ...formData,
                    countryIds: selected.map((option) => option.value),
                  })
                }
              />
              <input
                type="number"
                placeholder="Tax Code"
                value={formData.taxCode}
                onChange={(e) => setFormData({ ...formData, taxCode: e.target.value })}
              />
              <div className="form-buttons">
                <button onClick={handlePreviousStage} className="back-button">
                  Back
                </button>
                <button onClick={handleNextStage} className="next-button">
                  Next
                </button>
              </div>
            </div>
          )}

          {stage === 3 && (
            <div className="form-stage">
              <h2>Step 3: Departments and Authorities</h2>
              {formData.departments.map((department, index) => (
                <div key={index} className="department-section">
                  <input
                    type="text"
                    placeholder={`Department ${index + 1} Name`}
                    value={department.name}
                    onChange={(e) => handleDepartmentChange(index, e.target.value)}
                  />
                  <div className="authority-checklist">
                    <h4>Select Authorities</h4>
                    <div className="authority-grid">
                      {authorityOptions.map((auth) => (
                        <motion.div
                          key={auth.id}
                          whileHover={{ scale: 1.05 }}
                          className={`authority-card ${
                            department.authorities.includes(auth.id) ? "selected" : ""
                          }`}
                          onClick={() => handleAuthorityChange(index, auth.id)}
                        >
                          {auth.name}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={handleAddDepartment} className="add-department-button">
                <FaPlusCircle /> Add Another Department
              </button>
              <div className="form-buttons">
                <button onClick={handlePreviousStage} className="back-button">
                  Back
                </button>
                <button onClick={handleSubmit} className="submit-button">
                  Submit
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default RegisterForm;
