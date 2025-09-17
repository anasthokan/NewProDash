import React from "react";
import bankData from "./bankData.json";
import "./BankAccountManagement.css";

function BankAccountManagement() {
  return (
    <div className="bank-container">
      <h2>Bank Account Management</h2>
      <p>Welcome, Admin</p>

      <h3>Bank Account Details</h3>

      <table className="bank-table">
        <thead>
          <tr>
            <th>Mobile</th>
            <th>Account No</th>
            <th>IFSC Code</th>
            <th>Account Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bankData.map((item, index) => (
            <tr key={index}>
              <td>{item.mobile}</td>
              <td>{item.accountNumber}</td>
              <td>{item.ifsc}</td>
              <td>{item.accountName}</td>
              <td>
                <button className="edit-btn">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BankAccountManagement;
