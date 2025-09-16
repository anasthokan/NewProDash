import React from "react";
import { Link } from "react-router-dom";
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
        </div>
        <div className="user-name">Fox Admin </div>
      </div>

      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/">
            <BsGrid1X2Fill className="icon" />
            Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/users">
            <BsPeopleFill className="icon" />
            All Users
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/wallets">
            <BsWallet2 className="icon" />
            Wallets
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/recharge">
            <BsCashStack className="icon" />
            Recharge
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/withdraw">
            <BsArrowUpRightCircle className="icon" />
            Withdraw
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/all-orders">
            <BsBag className="icon" />
            All Orders
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/edit-product">
            <BsBoxSeam className="icon" />
            Edit Product
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/team-income">
            <BsBarChart className="icon" />
            Team Income
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/claim-history">
            <BsCreditCard className="icon" />
            Claim History
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/all-banks">
            <BsCreditCard className="icon" />
            All Banks
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/phonepe-gateway">
            <BsCreditCard className="icon" />
            PhonePe Gateway
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings">
            <BsGear className="icon" />
            Settings
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/logout">
            <BsPower className="icon" />
            Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
