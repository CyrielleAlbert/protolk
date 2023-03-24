import React from "react";
import { BottomBar } from "../Components/BottomBar";
import { LoggedInWithLinkedIn } from "../Components/LoggedInWithLinkedin";
import { TopBar } from "../Components/TopBar";
import { useNavigate } from "react-router-dom";
import { ProfileBox } from "../Components/Dashboard/ProfileBox";
import { ProfilesSuggestion } from "../Components/Dashboard/ProfilesSuggestion";
import { Statistics } from "../Components/Dashboard/Statistics";
import { Rooms } from "../Components/Dashboard/Rooms";

export const Dashboard = () => {
  const navigate = useNavigate();
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
          height: window.innerWidth - 200,
        }}
      >
        <ProfilesSuggestion />
        <ProfileBox />

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
        <Statistics />
        <Rooms />
      </div>
      <BottomBar />
    </div>
  );
};
