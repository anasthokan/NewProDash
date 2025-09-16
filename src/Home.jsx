import React from "react";
import "./App.css";
import { homeData } from "./data";

function Home() {
  return (
    <div className="dashboard-home">
      <h2 className="dashboard-title">Dashboard</h2>
      {/* Stat Cards */}
      <div className="stat-cards">
        {homeData.stats.map((stat, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <small>{stat.title}</small>
              <div className="display-6">{stat.value}</div>
              <p className={stat.trendClass}>{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>

      {/* API Status */}
      <div className="section">
        <h3 className="dashboard-title">API Status</h3>
        <div className="api-status">
          {homeData.apis.map((api, index) => (
            <div className="status-card" key={index}>
              <h4>{api.name}</h4>
              <p className="expired">{api.status}</p>
              <small>{api.expiry}</small>
            </div>
          ))}
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
            {homeData.orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.mobile}</td>
                <td>{order.price}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Stats */}
      <div className="section">
        <h3 className="dashboard-title">Quick Stats</h3>
        <div className="quick-stats">
          {homeData.quickStats.map((q, index) => (
            <div className="q-card" key={index}>
              <h4>{q.title}</h4>
              {q.details ? (
                <ul>
                  {q.details.map((d, i) => (
                    <li key={i}>
                      {d.label}: <span className={d.className}>{d.status}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{q.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
