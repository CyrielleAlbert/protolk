import axios from "axios";

export function getAccessToken(code, setToken) {
  axios({
    method: "get",
    baseURL: "http://localhost:8888",
    url: "/linkedin/accessToken",
    params: {
      code: code,
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((res) => {
      console.log(res.data);
      setToken(res.data.access_token);
    })
    .catch((error) => {
      console.log("error", error);
    });
}

export function getProfileInfo(token, callback) { 
  axios({
    method: "get",
    baseURL: "http://localhost:8888",
    url: "/linkedin/profile",
    params: {
      token: token,
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log("error", error);
    });
}
