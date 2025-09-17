import React from "react";
import "./TeamIncome.css";
import teamIncomeData from "./teamIncome.json"; // Import JSON

function TeamIncome() {
  return (
    <div className="team-income-container">
      <h2>Team Income</h2>

      {/* Search bar */}
      <div className="top-bar">
        <input type="text" placeholder="Search team income..." />
      </div>

      {/* Dropdown filters */}
      <div className="filters">
        <select>
          <option>All Levels</option>
          <option>Level1</option>
          <option>Level2</option>
          <option>Level3</option>
        </select>

        <select>
          <option>All Status</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
      </div>

      {/* Data Table */}
      <table className="team-income-table">
        <thead>
          <tr>
            <th>Claimer Mobile</th>
            <th>User Mobile</th>
            <th>Amount</th>
            <th>Product</th>
            <th>Level</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teamIncomeData.map((item) => (
            <tr key={item.id}>
              <td>{item.claimerMobile}</td>
              <td>{item.userMobile}</td>
              <td>{item.amount}</td>
              <td>{item.product}</td>
              <td>{item.level}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
              <td>View</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamIncome;
