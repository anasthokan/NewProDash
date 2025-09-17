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
import TeamIncome from "./TeamIncome";
import ClaimHistory from "./ClaimHistory";
import BankAccountManagement from "./BankAccountManagement";
import PaymentStatus from "./PaymentStatus";
import Setting from "./Setting";
import Logout from "./Logout";
import ManageCategories from "./ManageCategories";

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
        <Route path="/edit-product" element={<ManageCategories />} />

        <Route path="/team-income" element={<TeamIncome/>}/>
        <Route path="/claim-history" element={<ClaimHistory/>}/>
        <Route path="all-banks" element={<BankAccountManagement/>}/>
        <Route path="/phonepe-gateway" element={<PaymentStatus/>}/>
        <Route path="/settings" element={<Setting/>}/>
        <Route path="/logout" element={<Logout/>}/>


        {/* Add other routes if needed */}
      </Routes>
    </div>
  );
}

export default App;
