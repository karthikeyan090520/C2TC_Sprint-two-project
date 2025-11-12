import React, { useEffect, useState } from "react";
import { getAdmins, deleteAdmin } from "../api";
import "./AdminList.css";

function AdminList({ onEdit }) {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    loadAdmins();
  }, []);

  const loadAdmins = async () => {
    const res = await getAdmins();
    setAdmins(res.data);
  };

  const handleDelete = async (id) => {
    await deleteAdmin(id);
    loadAdmins();
  };

  return (
    <div className="list-container">
      <h2>All Admins</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.username}</td>
              <td>{a.email}</td>
              <td>{a.phoneNumber}</td>
              <td>{a.role}</td>
              <td>{a.department}</td>
              <td>
                <button onClick={() => onEdit(a)}>✏️ Edit</button>
                <button onClick={() => handleDelete(a.id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminList;
