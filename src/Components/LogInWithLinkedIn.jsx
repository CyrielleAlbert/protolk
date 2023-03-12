import { useEffect } from "react";
import { useState } from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";
import { useNavigate } from "react-router-dom";
import { useLinkedInProfile } from "../Requests/useLinkedInProfile";
import * as Router from "../router.js";

export const LogInWithLinkedIn = ({ value, style }) => {
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const { loading, profile, getAccessToken, createUserInDB } =
    useLinkedInProfile();

  useEffect(() => {
    //Might move to useLinkedInProfile with handling disconnection
    if (profile) {
      createUserInDB();
      navigate(Router.path.dashboard);
    }
  }, [profile]);

  return (
    <>
      {profile ? (
        <button
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
            navigate(Router.path.dashboard);
          }}
        >
          {`Log in as ${profile.localizedFirstName} ${profile.localizedLastName}`}
          <img alt="linkedin-Icon" src="/linkedin.svg" width={48} height={48} />
        </button>
      ) : (
        <LinkedIn
          clientId={process.env.REACT_APP_CLIENT_ID}
          redirectUri={`${window.location.origin}${Router.path.linkedin}`}
          onSuccess={(code) => {
            getAccessToken(code);
          }}
          scope={"r_emailaddress r_liteprofile"}
        >
          {({ linkedInLogin }) => (
            <button
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
                minWidth: 210,
                ...style,
              }}
              onClick={linkedInLogin}
            >
              {loading ? (
                <>Loading</>
              ) : (
                <>
                  {value}{" "}
                  <img
                    alt="linkedin-Icon"
                    src="/linkedin.svg"
                    width={48}
                    height={48}
                  />
                </>
              )}
            </button>
          )}
        </LinkedIn>
      )}
    </>
  );
};
