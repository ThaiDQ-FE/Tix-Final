import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin, postRegister } from "../../../store/actions/user.action";
import { NavLink, useHistory } from "react-router-dom";
import "./styles.scss";

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
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      maNhom: "",
      maLoaiNguoiDung: "KhachHang",
      soDt: "",
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
                    placeholder="T??i Kho???n"
                    name="taiKhoan"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <i className="fa fa-lock" />
                  <input
                    type="password"
                    placeholder="M???t Kh???u"
                    name="matKhau"
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="submit"
                  defaultValue="Login"
                  className="btn solid"
                  value="????ng Nh???p"
                />
                <p className="social-text">Ho???c</p>
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
                    placeholder="T??i Kho???n"
                    name="taiKhoan"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="input-field">
                  <i className="fa fa-lock"></i>
                  <input
                    type="password"
                    placeholder="M???t Kh???u"
                    name="matKhau"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="input-field">
                  <i class="fa fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="input-field">
                  <i class="fa fa-phone"></i>
                  <input
                    type="number"
                    placeholder="S??? ??i???n Tho???i"
                    name="soDt"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="input-field">
                  <i class="fa fa-users"></i>
                  <input
                    type="text"
                    placeholder="H??? T??n"
                    name="hoTen"
                    onChange={handleChangeRegister}
                  />
                </div>
                <div className="input-field">
                  <select name="maNhom" onChange={handleChangeRegister}>
                    <option value="" selected disabled hidden>
                      M?? Nh??m
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
                  value="????ng K??"
                />
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Ng?????i m???i ?</h3>
                <p>
                  ????ng k?? ????? ???????c nhi???u ??u ????i, mua v?? v?? b???o m???t th??ng tin!
                </p>
                <button className="btn transparent" id="sign-up-btn">
                  ????ng K??
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
                <h3>Th??nh vi??n k??? c???u ?</h3>
                <p>
                  ????ng nh???p ????? ???????c nhi???u ??u ????i, mua v?? v?? b???o m???t th??ng tin!
                </p>
                <button className="btn transparent" id="sign-in-btn">
                  ????ng Nh???p
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
