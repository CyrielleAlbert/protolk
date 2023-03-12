import React from "react";
import { BottomBar } from "../Components/BottomBar";
import { LoggedInWithLinkedIn } from "../Components/LoggedInWithLinkedin";
import { TopBar } from "../Components/TopBar";
import { useLinkedInProfile } from "../Requests/useLinkedInProfile";
import { Edit3 } from "react-feather";
import { useNavigate } from "react-router-dom";
import { ProfileBox } from "../Components/Dashboard/ProfileBox";
import { useTags } from "../Requests/useTags";

export const Dashboard = () => {
  const { profile, token } = useLinkedInProfile();
  const { tags } = useTags({ token });
  const navigate = useNavigate();
  if (!profile) {
    return null;
  } else {
    return (
      <div
        style={{
          height: window.innerHeight,
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Poppins",
        }}
      >
        <TopBar>
          <LoggedInWithLinkedIn />
        </TopBar>
        <div
          style={{
            gridTemplateColumns: "repeat(4,1fr)",
            gridTemplateRows: "repeat(3,1fr)",
            display: "grid",
            columnGap: 24,
            rowGap: 24,
            padding: 24,
            width: "inherit",
            height: "inherit",
          }}
        >
          <div
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 2,
              gridRowStart: 1,
              gridRowEnd: 4,
              backgroundColor: "#F7F7FA",
              borderColor: "#818181",
              borderWidth: 0.1,
              borderStyle: "dotted",
              borderRadius: 16,
              padding: 8,
            }}
          >
            You should meet
          </div>
          <ProfileBox profile={profile} tags={tags} />

          <div
            style={{
              gridColumnStart: 3,
              gridColumnEnd: 4,
              gridRowStart: 1,
              gridRowEnd: 2,
              backgroundColor: "#F7F7FA",
              borderColor: "#818181",
              borderWidth: 0.1,
              borderStyle: "dotted",
              borderRadius: 16,
            }}
          >
            Actions
          </div>
          <div
            style={{
              gridColumnStart: 4,
              gridColumnEnd: 5,
              gridRowStart: 1,
              gridRowEnd: 2,
              backgroundColor: "#F7F7FA",
              borderColor: "#818181",
              borderWidth: 0.1,
              borderStyle: "dotted",
              borderRadius: 16,
            }}
          >
            Stats
          </div>
          <div
            style={{
              gridColumnStart: 2,
              gridColumnEnd: 5,
              gridRowStart: 2,
              gridRowEnd: 4,
              backgroundColor: "#F7F7FA",
              borderColor: "#818181",
              borderWidth: 0.1,
              borderStyle: "dotted",
              borderRadius: 16,
            }}
          >
            Rooms
          </div>
        </div>
        <BottomBar />
      </div>
    );
  }
};
