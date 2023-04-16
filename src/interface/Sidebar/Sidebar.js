import React from "react";
import "./Sidebar.css";
import Logo from "../../images/logo.png";
import Dashboard from "../../images/dashboard.png";
import Layouts from "../../images/layouts.png";
import Settings from "../../images/settings.png";
import LogOut from "../../images/log-out.png";
import User from "../../images/user.png";
import Interface from "../../images/web-interface.png";
import Cards from "../../images/cards.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} />
        <span>
          AJ 
        </span>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
            <img src={Dashboard} className="img" />
          </div>
          <span>
            <a href="/Dashboard" className="nav_link">Dashboard</a>
          </span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
            <img src={Layouts} className="img" />
          </div>
          <span>Layouts</span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
            <img src={User} className="img" />
          </div>
          <span>User</span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
            <img src={Interface} className="img" />
          </div>
          <span>Interface</span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
            <img src={Cards} className="img" />
          </div>
          <span>Cards</span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
            <img src={Settings} className="img" />
          </div>
          <span>Settings</span>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
            <img src={LogOut} className="img" />
          </div>
          <span>Log out</span>
        </div>
      </div>

      <div className="menu">
        <div className="switch"></div>
      </div>
    </div>
  );
};

export default Sidebar;
