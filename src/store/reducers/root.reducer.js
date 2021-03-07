import { combineReducers } from "redux";
import commonReducer from "./common.reducer";
import movieReducer from "./movie.reducer";

const rootReducer = combineReducers({
  common: commonReducer,
  movie: movieReducer,
});

export default rootReducer;
