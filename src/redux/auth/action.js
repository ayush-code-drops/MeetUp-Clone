import { fetchUserData } from "../../Components/Navbar/fetchUserData";
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


export const  verifyLogin=(payload) =>(dispatch)=> {
  dispatch(loginRequest())
  const { email, pass } = payload
  fetchUserData()
  .then((res) => {
    console.log(res.data);
    console.log("emee" ,email,pass)
    const userExist = res.data.filter((item) => {
      if (item.email === email && item.password === pass) {
        return item;
      }
    });

    if (userExist.length === 0) {
      dispatch(wrongCredentials());
      alert("Wrong Credentials");
    } else {
      dispatch(loginSuccess());
      alert("Login Successful");
    }
  })
  .catch((err) => {
    dispatch(loginFailure());
  });
  
}

