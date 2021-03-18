import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DrawerComponent from "../drawers";
import "./styles.scss";

function Header() {
  const [state, setState] = useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  return (
    <header>
      <div id="home-navbar">
        <a href="/" className="home-navbar-left">
          <img src="https://i.ibb.co/P919Hd9/catMovie.png" alt="web-logo" />
        </a>
        <div className="home-navbar-center">
          <a href="#newIn-wrapper">Lịch Chiếu</a>
          <a href="#">Cụm Rạp</a>
          <a href="#">Tin Tức</a>
          <a href="#">Ứng dụng</a>
        </div>
        <div className="home-navbar-right">
          <div className="home-navbar-account">
            <NavLink className="nav-link" to="/login">
              <img
                src="https://i.ibb.co/znh3gRK/avatar.png"
                alt="avatar"
                border="0"
              />
              <p>Đăng Nhập</p>
            </NavLink>
          </div>
        </div>
        {/* Navbar for mobile */}
        <div className="home-navbar-mobile">
          <img
            src="https://i.ibb.co/XXMfvtT/menu-options.png"
            alt="menu-options"
            border="0"
            onClick={toggleDrawer("drawer", true)}
          />
        </div>
        <DrawerComponent
          open={state["drawer"]}
          toggleDrawer={toggleDrawer("drawer", false)}
        />
      </div>
    </header>
  );
}
export default Header;
