import React, { useEffect, useMemo, useState } from "react";
import { Button, InputAdornment, Modal, TextField } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import WarningIcon from "@material-ui/icons/Warning";
import { validate } from "../../assets/vender/validate";
import { Autoplay } from "swiper";
import Swal from "sweetalert2";
import axios from "axios";

import "./styles.scss";

function ModalTrailer(props) {
  const profileUser = useMemo(
    () => JSON.parse(localStorage.getItem("detail-user")) || {},
    [localStorage.getItem("detail-user")]
  );
  const userDetail = JSON.parse(localStorage.getItem("userInfo"));
  const [file, setFile] = useState("");
  const [user, setUser] = useState({
    data: profileUser || {},
  });
  const [errorIcon, setErrorIcon] = useState({
    isHoTenHover: false,
    isEmailHover: false,
    isSoDTHover: false,
    isMatKhauHover: false,
  });
  const [newDataInput, setNewDataInput] = useState({
    data: {
      hoTen: "",
      email: "",
      matKhau: "",
      soDT: "",
    },
    error: {
      hoTen: "",
      email: "",
      matKhau: "",
      soDT: "",
    },
    isValid: true,
  });
  const handleChangeData = (event) => {
    const { value, name } = event.target;
    let data = { ...newDataInput.data, [name]: value };
    let error = {
      ...newDataInput.error,
      [name]: validate(name, value) ? validate(name, value, 4, 30) : "",
    };
    let isValid = true;
    for (const [key] of Object.entries(data)) {
      if (data[key] !== "") {
        isValid = false;
      } else {
        isValid = true;
        break;
      }
    }
    console.log(isValid);
    console.log(error);
    setNewDataInput({ ...newDataInput, data, error, isValid });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user !== null) {
      axios({
        method: "POST",
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        data: {
          TaiKhoan: user.taiKhoan,
        },
      })
        .then((res) => {
          let { data } = res;
          localStorage.setItem("detail-user", JSON.stringify(data));
        })
        .catch((err) => {});
    }
  }, []);
  const handleUpload = (event) => {
    setFile(event.target.files[0]);
  };
  const ImageThumb = ({ image }) => {
    return (
      <img
        className="h-image"
        src={URL.createObjectURL(image)}
        alt={image.name}
      />
    );
  };
  const renderImage = () => {
    if (file == "") {
      return (
        <img
          className="n-image"
          src="https://i.ibb.co/znh3gRK/avatar.png"
          alt="avata"
        />
      );
    } else {
      return file && <ImageThumb image={file} />;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let matKhauInput = newDataInput.data.matKhau;
    let hoTenInput = newDataInput.data.hoTen;
    let emailInput = newDataInput.data.email;
    let soDTInput = newDataInput.data.soDT;
    let matKhau, hoTen, email, soDT;
    if (matKhauInput === "") {
      matKhau = profileUser.matKhau;
    } else {
      matKhau = matKhauInput;
    }
    if (hoTenInput === "") {
      hoTen = profileUser.hoTen;
    } else {
      hoTen = hoTenInput;
    }
    if (emailInput === "") {
      email = profileUser.email;
    } else {
      email = emailInput;
    }
    if (soDTInput === "") {
      soDT = profileUser.soDT;
    } else {
      soDT = soDTInput;
    }

    console.log(matKhau);
    console.log(hoTen);
    console.log(email);
    console.log(soDT);
    let data = {
      ...user.data,
      maLoaiNguoiDung: "KhachHang",
      matKhau,
      hoTen,
      email,
      soDT,
    };
    console.log(data);
    axios({
      method: "PUT",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data,
      headers: {
        Authorization: `Bearer ${userDetail.accessToken}`,
      },
    })
      .then((res) => {
        let { data } = res;
        let newMatKhau = data.matKhau;
        let newHoTen = data.hoTen;
        let newEmail = data.email;
        let newSoDT = data.soDT;
        let newData = {
          ...user.data,
          matKhau: newMatKhau,
          hoTen: newHoTen,
          soDt: newSoDT,
          email: newEmail,
        };
        setUser({ ...user, data: newData });
        Swal.fire({
          icon: "success",
          title: "Cập nhật thành công!",
          heightAuto: true,
          timerProgressBar: false,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((err) => {
        let timerInterval;
        Swal.fire({
          icon: "error",
          title: "Cập nhật thất bại!",
          html: "Chúng tôi sẽ refresh trang trong <b></b> milliseconds.",
          heightAuto: true,
          timerProgressBar: false,
          showConfirmButton: false,
          timer: 2000,
          didOpen: () => {
            timerInterval = setInterval(() => {
              const content = Swal.getContent();
              if (content) {
                const b = content.querySelector("b");
                if (b) {
                  b.textContent = Swal.getTimerLeft();
                }
              }
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
        setTimeout(() => {
          window.location.reload(true);
        }, 2000);
      });
  };
  let dataError = newDataInput.error;
  let isError =
    dataError.hoTen + dataError.email + dataError.matKhau + dataError.soDT;
  console.log(isError);
  const handleChangeHoTen = () => {
    const isHoTenHover = errorIcon.isHoTenHover;
    setErrorIcon({
      isHoTenHover: !isHoTenHover,
    });
  };
  const handleChangeEmail = () => {
    const isEmailHover = errorIcon.isEmailHover;
    setErrorIcon({
      isEmailHover: !isEmailHover,
    });
  };
  const handleChangeSoDT = () => {
    const isSoDTHover = errorIcon.isSoDTHover;
    setErrorIcon({
      isSoDTHover: !isSoDTHover,
    });
  };
  const handleChangeMatKhau = () => {
    const isMatKhauHover = errorIcon.isMatKhauHover;
    setErrorIcon({
      isMatKhauHover: !isMatKhauHover,
    });
  };
  const renderBody = () => {
    if (props.profile) {
      return (
        <div className="modal-profile-css">
          <img
            className="modal-trailer-close"
            src="https://i.ibb.co/9sLW6gQ/close.png"
            alt="close"
            onClick={props.close}
          />
          <form className="modal-form">
            <div className="modal-wrapper">
              <div class="item info-header">Thông Tin Tài Khoản</div>
              <div class="item info-image">
                <input
                  className="input-file"
                  type="file"
                  onChange={handleUpload}
                  id="file"
                />
                <label htmlFor="file" style={{ cursor: "pointer" }}>
                  <img src="https://i.ibb.co/jZmmMRz/camera.png" alt="" />
                </label>

                {renderImage()}
              </div>
              <div class="item content-1">
                <TextField
                  type="text"
                  label="Họ Tên"
                  defaultValue={profileUser.hoTen}
                  name="hoTen"
                  onChange={handleChangeData}
                  helperText={
                    errorIcon.isHoTenHover === true
                      ? newDataInput.error.hoTen
                      : ""
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {newDataInput.error.hoTen == "" ? (
                          <EditIcon />
                        ) : (
                          <WarningIcon
                            color="error"
                            onMouseEnter={handleChangeHoTen}
                            onMouseLeave={handleChangeHoTen}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  type="email"
                  label="Email"
                  defaultValue={profileUser.email}
                  name="email"
                  onChange={handleChangeData}
                  helperText={
                    errorIcon.isEmailHover === true
                      ? newDataInput.error.email
                      : ""
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {newDataInput.error.email == "" ? (
                          <EditIcon />
                        ) : (
                          <WarningIcon
                            color="error"
                            onMouseEnter={handleChangeEmail}
                            onMouseLeave={handleChangeEmail}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Mật Khẩu"
                  type="password"
                  defaultValue={profileUser.matKhau}
                  name="matKhau"
                  onChange={handleChangeData}
                  helperText={
                    errorIcon.isMatKhauHover === true
                      ? newDataInput.error.matKhau
                      : ""
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {newDataInput.error.matKhau == "" ? (
                          <EditIcon />
                        ) : (
                          <WarningIcon
                            color="error"
                            onMouseEnter={handleChangeMatKhau}
                            onMouseLeave={handleChangeMatKhau}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div class="item content-2">
                <TextField
                  label="Tài Khoản"
                  defaultValue={profileUser.taiKhoan}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  type="number"
                  label="Số ĐT"
                  defaultValue={profileUser.soDT}
                  name="soDT"
                  onChange={handleChangeData}
                  helperText={
                    errorIcon.isSoDTHover === true
                      ? newDataInput.error.soDT
                      : ""
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {newDataInput.error.soDT == "" ? (
                          <EditIcon />
                        ) : (
                          <WarningIcon
                            color="error"
                            onMouseEnter={handleChangeSoDT}
                            onMouseLeave={handleChangeSoDT}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Mã Nhóm"
                  defaultValue={profileUser.maNhom}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
              <div class="item content-5">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  disabled={isError == "" ? false : true}
                >
                  Cập nhật
                </Button>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="modal-trailer-css">
          <img
            className="modal-trailer-close"
            src="https://i.ibb.co/9sLW6gQ/close.png"
            alt="close"
            onClick={props.close}
          />
          <iframe
            src={props.trailer + `?autoplay=1`}
            allow={Autoplay}
            className="modal-trailer-iframe"
          ></iframe>
        </div>
      );
    }
  };
  const themeModal = createMuiTheme({
    overrides: {
      MuiTextField: {
        root: {
          width: `${100}%`,
          padding: "10px 0",
          position: "relative",
        },
      },
      MuiInput: {
        underline: {
          "&&&&:hover:before": {
            borderBottom: "2px solid #3f51b5",
          },
          "&&&&:before": {
            borderBottom: "2px solid #3f51b5",
          },
        },
      },
      MuiInputBase: {
        root: {
          color: "white",
        },
      },
      MuiInputLabel: {
        root: {
          color: "white",
          opacity: 0.6,
        },
      },
      MuiFormHelperText: {
        root: {
          backgroundColor: "red",
          color: "white",
          width: "auto",
          position: "absolute",
          padding: "5px 10px",
          borderRadius: "5px",
          top: 0,
          right: 0,
        },
      },
      MuiSvgIcon: {
        root: {
          width: 16,
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={themeModal}>
      <Modal open={props.open} onClose={props.close}>
        {renderBody()}
      </Modal>
    </MuiThemeProvider>
  );
}
export default ModalTrailer;
