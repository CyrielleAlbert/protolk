import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLinkedInProfile } from "../Requests/useLinkedInProfile";
import * as Router from "../router.js";

export const LoggedInWithLinkedIn = ({ style }) => {
  const history = useHistory();
  const [bgColor, setBgColor] = useState("#FFFFFF");

  const { profile, disconnectUser } = useLinkedInProfile();

  return profile ? (
    <button
      onMouseEnter={() => {
        setBgColor("#FFFFFF");
      }}
      onMouseLeave={() => setBgColor("#FFFFFF")}
      style={{
        backgroundColor: bgColor,
        // padding: "10px 5px 10px 5px",
        color: "black",
        fontSize: "1rem",
        borderRadius: 16,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50%",
        marginBlock: "auto",
        ...style,
      }}
      onClick={() => {
        disconnectUser();
        history.push(Router.path.login);
      }}
    >
      {`Log out ➞`}
    </button>
  ) : null;
};
