import { useEffect, useState } from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAccessToken, getProfileInfo } from "../Requests/linkedinRequests";

export const LogInWithLinkedIn = ({ value, style }) => {
  const history = useHistory();
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [token, setToken] = useState(undefined);
  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    if (token) {
      console.log("Token fetched");
      getProfileInfo(token, setProfile);
    }
  }, [token]);
  return (
    <>
      {profile ? (
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
            ...style,
          }}
          onClick={() => {
            history.push("/Home");
          }}
        >
          {`Log in as ${profile.localizedFirstName} ${profile.localizedLastName}`}
          <img src="/linkedin.svg" width={48} height={48} />
        </div>
      ) : (
        <LinkedIn
          clientId={process.env.REACT_APP_CLIENT_ID}
          redirectUri={`${window.location.origin}/linkedin`}
          onSuccess={(code) => {
            getAccessToken(code, setToken);
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
      )}
    </>
  );
};
