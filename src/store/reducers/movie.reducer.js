import {
  CINEMA_SYSTEM_CODE,
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_SCHEDULE_FAILED,
  GET_MOVIE_SCHEDULE_SUCCESS,
  GET_MOVIE_THEATER,
  VAI_THI_LON,
} from "../constants/movie.const";

const initialState = {
  movieList: [],
  movieDetail: {},
  movieSchedule: {},
  errors: {},
  maHeThongRap: "",
  cumRapChieu: [],
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE_LIST_SUCCESS: {
      state.movieList = payload;
      return { ...state };
    }
    case GET_MOVIE_LIST_FAILED: {
      state.errors = payload;
      return { ...state };
    }
    case GET_MOVIE_DETAIL_SUCCESS: {
      return { ...state, movieDetail: payload };
    }
    case GET_MOVIE_DETAIL_FAILED: {
      return { ...state, errors: payload };
    }
    case GET_MOVIE_SCHEDULE_SUCCESS: {
      return { ...state, movieSchedule: payload };
    }
    case GET_MOVIE_SCHEDULE_FAILED: {
      return { ...state, errors: payload };
    }
    // case CINEMA_SYSTEM_CODE: {
    //   return { ...state, maHeThongRap: payload };
    // }
    case GET_MOVIE_THEATER: {
      return { ...state, cumRapChieu: payload };
    }
    default:
      return state;
  }
};

export default movieReducer;
