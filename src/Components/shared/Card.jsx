import React from "react";
import { Edit3 } from "react-feather";

export const Card = ({ positions, title, editable, children }) => {
  const [gridColomnStart, gridColomnEnd, gridRowStart, gridRowEnd] = positions;
  return (
    <div
      style={{
        gridColumnStart: gridColomnStart,
        gridColumnEnd: gridColomnEnd,
        gridRowStart: gridRowStart,
        gridRowEnd: gridRowEnd,
        backgroundColor: "#F7F7FA",
        borderColor: "#818181",
        borderWidth: 0.1,
        borderStyle: "dotted",
        borderRadius: 16,
        padding: 8,
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
          {title}
        </h2>
        {editable && (
          <button
            style={{
              width: 27,
              height: 27,
              position: "absolute",
              top: 4,
              right: 0,
              borderRadius: "50%",
              borderStyle: "none",
              backgroundColor: "transparent",
              padding: 4,
            }}
          >
            <Edit3 size={16} />
          </button>
        )}
      </div>
      {children}
    </div>
  );
};
