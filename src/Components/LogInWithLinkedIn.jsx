import { useState } from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLinkedInProfile } from "../Requests/useLinkedInProfile";

export const LogInWithLinkedIn = ({ value, style }) => {
  const history = useHistory();
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const { loading, profile, getAccessToken } = useLinkedInProfile();

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
            history.push("/");
          }}
        >
          {`Log in as ${profile.localizedFirstName} ${profile.localizedLastName}`}
          <img src="/linkedin.svg" width={48} height={48} />
        </button>
      ) : (
        <LinkedIn
          clientId={process.env.REACT_APP_CLIENT_ID}
          redirectUri={`${window.location.origin}/linkedin`}
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
                  {value} <img src="/linkedin.svg" width={48} height={48} />
                </>
              )}
            </button>
          )}
        </LinkedIn>
      )}
    </>
  );
};
