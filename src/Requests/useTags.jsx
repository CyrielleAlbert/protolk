import axios from "axios";
import { useEffect, useState } from "react";

export const useTags = ({ token }) => {
  const [tags, setTags] = useState();

  useEffect(() => {
    if (token) {
      console.log("token", token);
      axios({
        method: "get",
        baseURL: "http://localhost:8888",
        url: "/data/getUserTags",
        params: {
          token: token,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
      })
        .then((res) => {
          console.log(res.data); //tags
          setTags(res.data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [token]);
  return { tags };
};
