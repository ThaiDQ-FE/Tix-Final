import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../constants/user.const";
import { startLoading, stopLoading } from "./common.action";
import Swal from "sweetalert2";
export const postLogin = (taiKhoan, matKhau, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan,
        matKhau,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postLoginSuccess(res.data));
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công!",
          heightAuto: true,
          timerProgressBar: false,
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          history.goBack();
        }, 2000);
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postLoginFailed(err));
        Swal.fire({
          icon: "error",
          title: "Đăng nhập thất bại!",
          heightAuto: true,
          timerProgressBar: false,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
};

const postLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const postLoginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};

export const postRegister = (data, history) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
    })
      .then((res) => {
        console.log(res.data);
        console.log("đăng ký thành công");
        Swal.fire({
          icon: "success",
          title: "Đăng ký thành công!",
          heightAuto: true,
          timerProgressBar: false,
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        console.log("đăng ký thất bại");
        Swal.fire({
          icon: "error",
          title: "Đăng ký thất bại!",
          heightAuto: true,
          timerProgressBar: false,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
};
