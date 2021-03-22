import React, { useEffect, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import ModalTrailer from "../modal-trailer";

function DrawerComponent(props) {
  const useStyles = makeStyles({
    paper: {
      width: `${70}%`,
    },
  });
  const [profile, setProfile] = useState("profile");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  let count = 0;
  const handleClick = () => {
    count++;
    if (count % 2 !== 0) {
      document.getElementById("drawer-login-child").classList.add("active");
    } else {
      document.getElementById("drawer-login-child").classList.remove("active");
    }
  };
  const classes = useStyles();
  const isLogin = JSON.parse(localStorage.getItem("userInfo"));
  const renderAccount = () => {
    if (isLogin == null) {
      return (
        <div className="drawer-login-titles">
          <NavLink to="/login" className="drawer-nav-link">
            <img src="https://i.ibb.co/znh3gRK/avatar.png" alt="avatar" />

            <p>Đăng Nhập</p>
          </NavLink>
          <img
            className="drawer-close"
            src="https://i.ibb.co/k3ctpcW/next-session.png"
            alt="next-session"
            onClick={props.toggleDrawer}
          />
        </div>
      );
    } else {
      return (
        <ul id="drawer-login-ul" onClick={handleClick}>
          <li>
            <div className="drawer-login-title">
              <div to="/login" className="drawer-nav-link">
                <img src="https://i.ibb.co/znh3gRK/avatar.png" alt="avatar" />
                <p>{isLogin.hoTen}</p>
              </div>
              <img
                className="drawer-close"
                src="https://i.ibb.co/k3ctpcW/next-session.png"
                alt="next-session"
                onClick={props.toggleDrawer}
              />
            </div>
            <ul className="drawer-login-child" id="drawer-login-child">
              <li onClick={() => handleOpen()} className="li-child">
                Profile
              </li>
              <li className="li-child">History</li>
            </ul>
          </li>
        </ul>
      );
    }
  };
  return (
    <div>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor="right"
        open={props.open}
        onClose={props.toggleDrawer}
      >
        <div className="drawer-wrapper">
          {renderAccount()}
          <a
            className="drawer-title-display"
            href={window.location.pathname !== "/" ? "/" : "#newIn-wrapper"}
            onClick={props.toggleDrawer}
          >
            Lịch Chiếu
          </a>
          <a className="drawer-title-display" href="#">
            Cụm Rạp
          </a>
          <a className="drawer-title-display" href="#">
            Tin Tức
          </a>
          <a className="drawer-title-display" href="#">
            Ứng Dụng
          </a>
        </div>
      </Drawer>
      <ModalTrailer open={open} close={handleClose} profile={profile} />
    </div>
  );
}
export default DrawerComponent;
