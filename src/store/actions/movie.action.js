import { GET_MOVIE_LIST } from "../constants/movie.const";

export const getMovieList = (movieList) => {
  return {
    type: GET_MOVIE_LIST,
    payload: movieList,
  };
};
