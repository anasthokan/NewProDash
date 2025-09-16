// src/Home.jsx
import React from "react";
import "./App.css";

function Home() {
  return (
    <div className="dashboard-home">
      {/* Title */}
      

      {/* Stat Cards */}
      <div className="stat-cards">
        <div className="card">
          <div className="card-body">
            <small>Total Customers</small>
            <div className="display-6">17</div>
            <p className="text-success">12% from last month</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <small>Total Sales</small>
            <div className="display-6">₹161,955.00</div>
            <p className="text-danger">8% from last month</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <small>Total Recharge</small>
            <div className="display-6">₹6,400.00</div>
            <p className="text-success">5% from last month</p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <small>Total Withdraw</small>
            <div className="display-6">₹5,664.00</div>
            <p className="text-danger">3% from last month</p>
          </div>
        </div>
      </div>

      {/* API Status */}
      <div className="section">
        <h3 className="dashboard-title">API Status</h3>
        <div className="api-status">
          <div className="status-card">
            <h4>Login API</h4>
            <p className="expired">Expired</p>
            <small>Expires in 0 days</small>
          </div>
          <div className="status-card">
            <h4>Claim API</h4>
            <p className="expired">Expired</p>
            <small>Expires in 0 days</small>
          </div>
          <div className="status-card">
            <h4>Recharge API</h4>
            <p className="expired">Expired</p>
            <small>Expires in 0 days</small>
          </div>
          <div className="status-card">
            <h4>Team API</h4>
            <p className="expired">Expired</p>
            <small>Expires in 0 days</small>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="section">
        <h3 className="dashboard-title">Recent Orders (7 Days)</h3>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Mobile</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>369007FCE</td>
              <td>MM-First Profitable Scheme: F1</td>
              <td>8094881590</td>
              <td>₹300.00</td>
              <td>Sep 12, 2025</td>
            </tr>
            <tr>
              <td>0745632A0</td>
              <td>MM-First Profitable Scheme: F1</td>
              <td>8094881590</td>
              <td>₹300.00</td>
              <td>Sep 12, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Quick Stats */}
      <div className="section">
        <h3 className="dashboard-title">Quick Stats</h3>
        <div className="quick-stats">
          <div className="q-card">
            <h4>Active Users</h4>
            <p>1,245</p>
          </div>
          <div className="q-card">
            <h4>Pending Withdrawals</h4>
            <p>₹24,850</p>
          </div>
          <div className="q-card">
            <h4>Today's Revenue</h4>
            <p>₹8,420</p>
          </div>
          <div className="q-card">
            <h4>System Health</h4>
            <ul>
              <li>Server Load: <span className="good">Optimal</span></li>
              <li>Database: <span className="good">Stable</span></li>
              <li>Storage: <span className="warn">64% Used</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
