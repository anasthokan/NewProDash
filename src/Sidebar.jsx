// Sidebar.jsx
import React from "react";
import {
  BsGrid1X2Fill,
  BsPeopleFill,
  BsWallet2,
  BsCashStack,
  BsArrowUpRightCircle,
  BsBag,
  BsBarChart,
  BsCreditCard,
  BsGear,
  BsBoxSeam,
  BsPower
} from "react-icons/bs";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-user">
        <div className="user-photo">
          {/* Placeholder – replace src with actual image if needed */}
          {/* <img src="/user-photo.png" alt="Admin User" /> */}
        </div>
        <div className="user-name">Fox Admin </div>
      </div>

      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <a href="#">
            <BsGrid1X2Fill className="icon" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <BsPeopleFill className="icon" />
            All Users
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <BsWallet2 className="icon" />
            Wallets
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <BsCashStack className="icon" />
            Recharge
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <BsArrowUpRightCircle className="icon" />
            Withdraw
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <BsBag className="icon" />
            All Orders
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <BsBoxSeam className="icon" />
            Edit Product
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <BsBarChart className="icon" />
            Team Income
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <BsCreditCard className="icon" />
            Claim History
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <BsCreditCard className="icon" />
            All Banks
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <BsCreditCard className="icon" />
            PhonePe Gateway
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <BsGear className="icon" />
            Settings
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#">
            <BsPower className="icon" />
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
