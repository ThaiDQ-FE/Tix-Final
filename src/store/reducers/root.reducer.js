import { combineReducers } from "redux";
import commonReducer from "./common.reducer";
import movieReducer from "./movie.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  common: commonReducer,
  movie: movieReducer,
  user: userReducer,
});

export default rootReducer;
