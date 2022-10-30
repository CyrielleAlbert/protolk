import React from "react";

export const TopBar = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: 100,
        backgroundColor: "#2E294E",
        alignItems: "center",
      }}
    >
      <img
        src="/Protolk-logo-name.png"
        style={{ margin: "auto", display: "block" }}
        width={150}
        height={"auto"}
      />
      {props.children}
    </div>
  );
};
