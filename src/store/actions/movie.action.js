import axios from "axios";
import {
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAILED,
} from "../constants/movie.const";
import { startLoading, stopLoading } from "./common.action";

export const getMovieList = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getMovieListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getMovieListFailed(err));
      });
  };
};

const getMovieListSuccess = (movieList) => {
  return {
    type: GET_MOVIE_LIST_SUCCESS,
    payload: movieList,
  };
};

const getMovieListFailed = (err) => {
  return {
    type: GET_MOVIE_LIST_FAILED,
    payload: err,
  };
};
