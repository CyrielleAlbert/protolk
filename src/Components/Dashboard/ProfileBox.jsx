import React from "react";
import { Edit3 } from "react-feather";

export const ProfileBox = ({ profile, tags }) => {
  console.log(profile);
  return (
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
          profile.profilePicture["displayImage~"].elements[3].identifiers[0]
            .identifier
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {tags.map((tag) => {
          return (
            <div
              key={tag.id}
              style={{
                backgroundColor: tag.color_hex,
                color: "white",
                borderRadius: 16,
                padding: "4px 8px 4px 8px",
                margin: "4px 2px 4px 2px",
                fontSize: 10,
              }}
            >{`#${tag.value}`}</div>
          );
        })}
      </div>
    </div>
  );
};
