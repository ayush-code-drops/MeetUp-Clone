import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  WRONG_CREDENTIALS
} from "./actionTypes";

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}
export function loginFailure(err) {
  return {
    type: LOGIN_FAILURE,
    payload: err
  };
}

export function wrongCredentials() {
  return {
    type: WRONG_CREDENTIALS
  };
}
