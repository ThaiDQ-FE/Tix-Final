import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

function Header() {
  const handleClickMenu = () => {
    document.getElementById("sideMenu").classList.add("sideMenu-active");
  };
  const handleClickArrow = () => {
    document.getElementById("sideMenu").classList.remove("sideMenu-active");
  };
  return (
    <header>
      <div id="home-navbar">
        <a href="/" className="home-navbar-left">
          <img src="https://i.ibb.co/nD3sxdP/web-logo.png" alt="web-logo" />
        </a>
        <div className="home-navbar-center">
          <a href="#">Lịch Chiếu</a>
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
              Đăng Nhập
            </NavLink>
          </div>
        </div>
        {/* Navbar for mobile */}
        <div className="home-navbar-mobile">
          <img
            src="https://i.ibb.co/XXMfvtT/menu-options.png"
            alt="menu-options"
            border="0"
            onClick={handleClickMenu}
          />
        </div>
        <div id="sideMenu" className="home-navbar-side">
          <div className="menuMobile customScroll">
            <div className="menuMoble-first">
              <NavLink className="nav-link" to="/login">
                <img
                  src="https://i.ibb.co/znh3gRK/avatar.png"
                  alt="avatar"
                  border="0"
                />
                Đăng Nhập
              </NavLink>
              <img
                src="https://i.ibb.co/k3ctpcW/next-session.png"
                alt="next-session"
                border="0"
                className="sideMenu-close icon-arrow-right"
                onClick={handleClickArrow}
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#xs">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                activeClassName="active-nav-link"
                className="nav-link"
                to="/"
                exact={true}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active-nav-link"
                className="nav-link"
                to="/movie-detail"
              >
                Movie Detail
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active-nav-link"
                className="nav-link"
                to="/booking"
              >
                Booking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active-nav-link"
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav> */}
    </header>
  );
}
export default Header;
