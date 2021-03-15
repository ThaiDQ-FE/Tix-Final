import axios from "axios";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "../constants/user.const";
import { startLoading, stopLoading } from "./common.action";
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
        console.log(res.data);
        dispatch(postLoginSuccess(res.data));
        history.goBack();
        console.log("thành công");
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postLoginFailed(err));
        console.log("thất bại");
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
