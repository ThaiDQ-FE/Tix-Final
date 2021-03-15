import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin, postRegister } from "../../../store/actions/user.action";
import { NavLink, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./styles.scss";
import { CircularProgress } from "@material-ui/core";

function Login() {
  const result = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const [userRegister, setUserRegister] = useState({
    users: {
      dkTaiKhoan: "",
      dkMatKhau: "",
      dkEmail: "",
      dkHoTen: "",
      dkMaNhom: "",
      dkMaLoaiNguoiDung: "KhachHang",
      dkDienThoai: "",
    },
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleChangeRegister = (event) => {
    const { value, name } = event.target;
    let users = { ...userRegister.users, [name]: value };
    setUserRegister({
      users,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(user.taiKhoan, user.matKhau, history));
  };
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    dispatch(postRegister(userRegister.users, history));
    console.log(userRegister.users);
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
  useEffect(() => {
    try {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="login-wrapper">
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form onSubmit={handleSubmit} className="sign-in-form">
                <NavLink to="/">
                  <img
                    className="title"
                    src="https://i.ibb.co/8mVr0DS/group-2x.png"
                    alt="group-2x"
                  />
                </NavLink>
                <div className="input-field">
                  <i className="fa fa-user" />
                  <input
                    type="text"
                    placeholder="Tài Khoản"
                    name="taiKhoan"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <i className="fa fa-lock" />
                  <input
                    type="password"
                    placeholder="Mật Khẩu"
                    name="matKhau"
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="submit"
                  defaultValue="Login"
                  className="btn solid"
                  value="Đăng Nhập"
                />
                <p className="social-text">Hoặc</p>
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
              <form onSubmit={handleSubmitRegister} className="sign-up-form">
                <NavLink to="/">
                  <img
                    className="title-two"
                    src="https://i.ibb.co/8mVr0DS/group-2x.png"
                    alt="group-2x"
                  />
                </NavLink>
                <div className="input-field">
                  <i class="fa fa-user"></i>
                  <input
                    type="text"
                    placeholder="Tài Khoản"
                    name="dkTaiKhoan"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="input-field">
                  <i className="fa fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Mật Khẩu"
                    name="dkMatKhau"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="input-field">
                  <i class="fa fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    name="dkEmail"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="input-field">
                  <i class="fa fa-phone"></i>
                  <input
                    type="number"
                    placeholder="Số Điện Thoại"
                    name="dkDienThoai"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="input-field">
                  <i class="fa fa-users"></i>
                  <input
                    type="text"
                    placeholder="Họ Tên"
                    name="dkHoTen"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="input-field">
                  <select name="dkMaNhom" onChange={handleChangeRegister}>
                    <option value="" selected disabled hidden>
                      Choose here
                    </option>
                    {[...Array(10)].map((item, index) => {
                      return (
                        <option
                          value={`GP${
                            index < 9 ? "0" + parseInt(index + 1) : index + 1
                          }`}
                        >{`GP${
                          index < 9 ? "0" + parseInt(index + 1) : index + 1
                        }`}</option>
                      );
                    })}
                  </select>
                </div>
                <input
                  type="submit"
                  className="btn"
                  defaultValue="Sign up"
                  value="Đăng Ký"
                />
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Người mới ?</h3>
                <p>
                  Đăng ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!
                </p>
                <button className="btn transparent" id="sign-up-btn">
                  Đăng Ký
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
                <h3>Thành viên kỳ cựu ?</h3>
                <p>
                  Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
                </p>
                <button className="btn transparent" id="sign-in-btn">
                  Đăng Nhập
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
      </div>
    </>
  );
}
export default Login;
