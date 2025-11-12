import React, { useState, useEffect } from "react";
import { createAdmin, updateAdmin } from "../api";
import "./AdminForm.css";

function AdminForm({ selectedAdmin, refreshList }) {
  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    department: "",
  });

  useEffect(() => {
    if (selectedAdmin) setAdmin(selectedAdmin);
  }, [selectedAdmin]);

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (admin.id) {
      await updateAdmin(admin.id, admin);
    } else {
      await createAdmin(admin);
    }
    setAdmin({
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      role: "",
      department: "",
    });
    refreshList();
  };

  return (
    <div className="form-container">
      <h2>{admin.id ? "Update Admin" : "Add New Admin"}</h2>
      <form onSubmit={handleSubmit}>
        {["username", "email", "password", "phoneNumber", "role", "department"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={admin[field]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">{admin.id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}

export default AdminForm;
