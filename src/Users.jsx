import React, { useState, useEffect } from "react";
import "./users.css";
import usersData from "./users.json";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(50);

  useEffect(() => {
    setUsers(usersData);
  }, []);

  const filteredUsers = users
    .filter(user =>
      user.mobile.includes(search) ||
      user.ownCode.toLowerCase().includes(search.toLowerCase()) ||
      user.referCode.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, rowsPerPage); // limit rows

  return (
    <div className="users-container">
      <h3>All Users</h3>

      <div className="users-controls">
        <input
          type="text"
          placeholder="Search users"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <select value={rowsPerPage} onChange={e => setRowsPerPage(Number(e.target.value))}>
          <option value={50}>50 rows</option>
          <option value={100}>100 rows</option>
          <option value={200}>200 rows</option>
        </select>
      </div>

      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Mobile</th>
            <th>Own Code</th>
            <th>Refer Code</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.mobile}</td>
              <td>{user.ownCode}</td>
              <td>{user.referCode}</td>
              <td>{user.password}</td>
              <td>
                <button>Reset</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
