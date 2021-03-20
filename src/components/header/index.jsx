import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DrawerComponent from "../drawers";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./styles.scss";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ModalTrailer from "../modal-trailer";
function Header() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);
  const [anchorEl, setMenu] = useState(null);
  const [profile, setProfile] = useState("profile");

  const isLogin = JSON.parse(localStorage.getItem("userInfo"));
  console.log(isLogin);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleClickMenu = (event) => {
    setMenu(event.currentTarget);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseMenu = () => {
    setMenu(null);
    // localStorage.removeItem("userInfo");
    // window.location.reload(true);
  };
  const renderAccount = () => {
    if (isLogin == null) {
      return (
        <NavLink className="nav-link" to="/login">
          <img
            src="https://i.ibb.co/znh3gRK/avatar.png"
            alt="avatar"
            border="0"
          />
          <p>Đăng Nhập</p>
        </NavLink>
      );
    } else {
      return (
        <div className="login-wrapper">
          <img
            src="https://i.ibb.co/znh3gRK/avatar.png"
            alt="avatar"
            border="0"
          />
          <p className="header-logined" onClick={handleClickMenu}>
            {isLogin.hoTen}
            <i class="fa fa-caret-down"></i>
          </p>
        </div>
      );
    }
  };
  const themeMenu = createMuiTheme({
    overrides: {
      MuiPopover: {
        paper: {
          top: `${6}% !important`,
          left: "unset !important",
          right: `${2}%`,
        },
      },
    },
  });
  return (
    <header>
      <div id="home-navbar">
        <a href="/" className="home-navbar-left">
          <img src="https://i.ibb.co/P919Hd9/catMovie.png" alt="web-logo" />
        </a>
        <div className="home-navbar-center">
          <NavLink to="/shows-time">Lịch Chiếu</NavLink>
          <a href="#">Cụm Rạp</a>
          <a href="#">Tin Tức</a>
          <a href="#">Ứng dụng</a>
        </div>
        <div className="home-navbar-right">
          <div className="home-navbar-account">{renderAccount()}</div>
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
      <MuiThemeProvider theme={themeMenu}>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={() => handleOpen()}>Profile</MenuItem>
          <MenuItem onClick={handleCloseMenu}>History</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
        </Menu>
      </MuiThemeProvider>
      <ModalTrailer open={open} close={handleClose} profile={profile} />
    </header>
  );
}
export default Header;
