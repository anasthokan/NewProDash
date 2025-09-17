import React from "react";
import "./PaymentStatus.css";
import paymentData from "./paymentData.json"; // Import JSON file

function PaymentStatus() {
  return (
    <div className="payment-container">
      <h2>Payment Status Management</h2>

      <table className="payment-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Mobile</th>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.mobile}</td>
              <td>{item.transactionId || "—"}</td>
              <td>{item.amount}</td>
              <td className={item.status === "success" ? "status-success" : "status-fail"}>
                {item.status}
              </td>
              <td>{item.createdAt}</td>
              <td>
                <button className="btn-approve">Approve</button>
                <button className="btn-fail">Fail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentStatus;
