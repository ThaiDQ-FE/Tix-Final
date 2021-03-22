export const validate = (name, value, min = 4, max = 30) => {
  const regexPhone = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if (typeof value === "string" || value instanceof String) {
    if (value.trim() === "") {
      return "Không được để trống";
    } else if (name === "matKhau") {
      if (!regexPassword.test(value)) {
        return "Mật khẩu không hợp lệ - Abcd1234";
      }
    } else if (name === "soDT") {
      if (!regexPhone.test(value)) {
        return "Số điện thoại hợp lệ!";
      }
    } else if (name === "email") {
      if (!regexEmail.test(value)) {
        return "Email không hợp lệ";
      }
    } else if (value.length > max) {
      return -`Không được dài hơn ${max} kí tự`;
    } else if (name !== "maNhom" && value.length < min) {
      return `Không được  duới ${min} kí tự`;
    }
  }
};
