import React from "react";
import { BottomBar } from "../Components/BottomBar";
import { LoggedInWithLinkedIn } from "../Components/LoggedInWithLinkedin";
import { TopBar } from "../Components/TopBar";
import { useLinkedInProfile } from "../Requests/useLinkedInProfile";
import { Edit3 } from "react-feather";
import { useHistory } from "react-router-dom";

export const Dashboard = () => {
  const { profile, disconnectUser } = useLinkedInProfile();
  const history = useHistory();
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
          <div
            style={{
              gridColumnStart: 2,
              gridColumnEnd: 3,
              gridRowStart: 1,
              gridRowEnd: 2,
              backgroundColor: "#F7F7FA",
              borderColor: "#818181",
              borderWidth: 0.1,
              borderStyle: "dotted",
              borderRadius: 16,
              padding: 8,
              // justifyContent: "center",
              // display: "flex",
              // flexDirection: "column",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                position: "relative",
                textAlign: "center",
                width: "inherit",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: "lighter" }}>
                My profile
              </h2>
              <div
                style={{
                  width: 27,
                  height: 27,
                  position: "absolute",
                  top: 8,
                  right: 0,
                  // right: ,
                  // backgroundColor: "white",
                  borderRadius: "50%",
                }}
              >
                <Edit3 size={16} />
              </div>
            </div>

            <img
              src={
                profile.profilePicture["displayImage~"].elements[3]
                  .identifiers[0].identifier
              }
              alt="Avatar"
              style={{
                borderRadius: "50%",
                width: 75,
                height: 75,
                marginTop: 24,
              }}
            />
            <p
              style={{ marginBottom: 0 }}
            >{`${profile.firstName.localized.xx_XX} ${profile.lastName.localized.xx_XX}`}</p>
            <p style={{ fontSize: 16, color: "#A6A6A6", marginTop: 0 }}>
              Frontend developer @Telia
            </p>
          </div>
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
