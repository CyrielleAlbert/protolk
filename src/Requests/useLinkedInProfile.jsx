import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";

export const useLinkedInProfile = (code) => {
  const [token, setToken] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["SESSION_ID"]);

  const updateCookie = (value) => {
    setCookie("SESSION_ID", value, { path: "/" });
  };

  const getAccessToken = (code) => {
    setLoading(true);
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
        updateCookie(res.data.access_token);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };

  const getProfileInfo = () => {
    setLoading(true);
    if (!token) {
      return;
    }
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
        setProfile(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (cookies.SESSION_ID) {
      setToken(cookies.SESSION_ID);
    }
    if (token) {
      getProfileInfo();
    }
  }, []);

  useEffect(() => {
    setToken(cookies.SESSION_ID);
  }, [cookies.SESSION_ID]);

  useEffect(() => {
    if (token) {
      console.log(token);
      console.log("Token fetched");
      getProfileInfo();
    }
  }, [token]);

  return {
    profile,
    token,
    loading,
    getAccessToken,
    getProfileInfo,
    updateCookie,
  };
};
