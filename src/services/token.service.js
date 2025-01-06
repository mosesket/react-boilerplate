import axios from "axios";

export const setSession = (access_token, expirationTime) => {
  if (access_token) {
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("token_expiration", expirationTime);

    axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
  } else {
    localStorage.removeItem("access_token");
    localStorage.removeItem("token_expiration");

    delete axios.defaults.headers.common["Authorization"];
  }
};

export const getAccessToken = () => {
  return window.localStorage.getItem("access_token");
};

export const getTokenExpiration = () => {
  return window.localStorage.getItem("token_expiration");
};
