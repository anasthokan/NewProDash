import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Users from "./Users"; // Import the Users page
import Wallets from "./Wallets";
import Recharge from "./Recharge";
import { Routes, Route } from "react-router-dom";
import Withdrawal from "./Withdrawal";
import Orders from "./Orders";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/wallets" element={<Wallets />} />
        <Route path="/recharge" element={<Recharge />} />   {/* fixed typo */}
        <Route path="/withdraw" element={<Withdrawal />} />
        <Route path="/all-orders" element={<Orders />} />

        {/* Add other routes if needed */}
      </Routes>
    </div>
  );
}

export default App;
