import axios from "axios";
import {
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_SCHEDULE_SUCCESS,
  GET_MOVIE_SCHEDULE_FAILED,
} from "../constants/movie.const";
import { startLoading, stopLoading } from "./common.action";

export const getMovieList = () => {
  return (dispatch) => {
    // dispatch(startLoading());
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
      data: null,
    })
      .then((res) => {
        // dispatch(stopLoading());
        dispatch(getMovieListSuccess(res.data));
      })
      .catch((err) => {
        // dispatch(stopLoading());
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

export const getMovieDetail = (movieCode) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getMovieDetailSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getMovieDetailFailed(err));
      });
  };
};

const getMovieDetailSuccess = (movieDetail) => {
  return {
    type: GET_MOVIE_DETAIL_SUCCESS,
    payload: movieDetail,
  };
};

const getMovieDetailFailed = (err) => {
  return {
    type: GET_MOVIE_DETAIL_FAILED,
    payload: err,
  };
};

export const getMovieSchedule = (movieCode) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieCode}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getMovieScheduleSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getMovieScheduleFailed(err));
      });
  };
};

const getMovieScheduleSuccess = (movieSchedule) => {
  return {
    type: GET_MOVIE_SCHEDULE_SUCCESS,
    payload: movieSchedule,
  };
};

const getMovieScheduleFailed = (err) => {
  return {
    type: GET_MOVIE_SCHEDULE_FAILED,
    payload: err,
  };
};
