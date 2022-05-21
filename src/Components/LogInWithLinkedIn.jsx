import { useState } from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";
import axios from "axios";

export const LogInWithLinkedIn = ({ value, style }) => {
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [token, setToken] = useState("");

  const getAccessToken = (code) => {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    axios({
      method: "post",
      baseURL: "https://www.linkedin.com",
      url: "/oauth/v2/accessToken",
      params: {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://protolk.netlify.app/Home",
        client_id: env.CLIENT_ID,
        client_secret: env.CLIENT_SECRET,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*"
      },
    })
      .then((response) => {
        console.log(response);
        setToken(response.access_token);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <LinkedIn
      clientId={env.CLIENT_ID}
      redirectUri={`${window.location.origin}/linkedin`}
      onSuccess={(code) => {
        console.log(code);
        getAccessToken(code);
      }}
      scope={"r_emailaddress r_liteprofile"}
    >
      {({ linkedInLogin }) => (
        <div
          onMouseEnter={() => {
            setBgColor("#FFFFFF");
          }}
          onMouseLeave={() => setBgColor("#FFFFFF")}
          style={{
            backgroundColor: bgColor,
            padding: "15px 20px 15px 20px",
            color: "black",
            fontSize: "1.5rem",
            borderRadius: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 200,
            ...style,
          }}
          onClick={linkedInLogin}
        >
          {value} <img src="/linkedin.svg" width={48} height={48} />
        </div>
      )}
    </LinkedIn>
  );
};
