import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../../../store/actions/user.action";
import { NavLink, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./styles.scss";

function Login() {
  const result = useState({});

  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(user.taiKhoan, user.matKhau, history));
  };

  useEffect(function () {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, []);
  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fa fa-user" />
                <input type="text" placeholder="Tài Khoản" />
              </div>
              <div className="input-field">
                <i className="fa fa-lock" />
                <input type="password" placeholder="Mật Khẩu" />
              </div>
              <input type="submit" defaultValue="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <img
                  className="social-icon"
                  src="https://i.ibb.co/82dNbSw/facebook.png"
                  alt="facebook"
                />
                <img
                  className="social-icon"
                  src="https://i.ibb.co/0216T1t/twitter-1.png"
                  alt="twitter-1"
                />
                <img
                  className="social-icon"
                  src="https://i.ibb.co/HBhvtjg/search-1.png"
                  alt="search-1"
                />
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <input type="submit" className="btn" defaultValue="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <img
                  className="social-icon"
                  src="https://i.ibb.co/82dNbSw/facebook.png"
                  alt="facebook"
                />
                <img
                  className="social-icon"
                  src="https://i.ibb.co/0216T1t/twitter-1.png"
                  alt="twitter-1"
                />
                <img
                  className="social-icon"
                  src="https://i.ibb.co/HBhvtjg/search-1.png"
                  alt="search-1"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img
              src="https://i.ibb.co/10GL7jy/undraw-home-cinema-l7yl.png"
              className="image"
              alt
            />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img
              src="https://i.ibb.co/vqB97GF/undraw-movie-night-fldd.png"
              className="image"
              alt
            />
          </div>
        </div>
      </div>

      {/* <div className="login-modal">
        <NavLink to="/">
          <img src="https://i.ibb.co/8mVr0DS/group-2x.png" alt="group-2x" />
        </NavLink>
        <div className="login-text">
          Đăng nhập để được nhiều ưu đãi, mua vé <br />
          và bảo mật thông tin!
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <TextField
                id="outlined-basic"
                label="Tài Khoản"
                variant="outlined"
                name="taiKhoan"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <TextField
                id="outlined-basic"
                label="Mật Khẩu"
                variant="outlined"
                name="matKhau"
                onChange={handleChange}
                type="password"
              />
            </div>
          </form>
        </div>
        <div className="login-signUp-or-social"></div>
      </div> */}
      {/* <h1 className="text-center">Login</h1>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taiKhoan">Tài khoản</label>
          <input
            type="text"
            className="form-control"
            id="taiKhoan"
            name="taiKhoan"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="matKhau"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form> */}
    </div>
  );
}
export default Login;
