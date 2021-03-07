import axios from "axios";
import { GET_MOVIE_LIST } from "../constants/movie.const";

export const getMovieList = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      data: null,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
  };
};
