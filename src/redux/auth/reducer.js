import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  WRONG_CREDENTIALS
} from "./actionTypes";

const initState = {
  isAuth: false,
  isLoading: false,
  isError: false
};
export function authReducer(state = initState, { type, payload }) {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    case WRONG_CREDENTIALS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
