import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.scss";
import { NavLink } from "react-router-dom";

function DrawerComponent(props) {
  const useStyles = makeStyles({
    paper: {
      width: `${70}%`,
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor="right"
        open={props.open}
        onClose={props.toggleDrawer}
      >
        <div className="drawer-wrapper">
          <div className="drawer-login-title">
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
    </div>
  );
}
export default DrawerComponent;
