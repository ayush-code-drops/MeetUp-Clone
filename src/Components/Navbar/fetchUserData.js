import axios from "axios";

export function fetchUserData() {
  return axios.get("https://json-server-deploy-mock.herokuapp.com/user");
}
