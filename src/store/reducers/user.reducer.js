import { LOGIN_FAILED, LOGIN_SUCCESS } from "../constants/user.const";

const initialState = {
  userDetail: {},
  errors: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS: {
      return { ...state, userDetail: payload };
    }
    case LOGIN_FAILED: {
      return { ...state, errors: payload };
    }
    default:
      return state;
  }
};
export default userReducer;
