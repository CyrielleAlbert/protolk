import React from "react";

export const TopBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: 100,
        backgroundColor: "#2E294E",
      }}
    >
      <img
        src="/Protolk-logo-name.png"
        style={{ margin:"auto", display:"block"}}
        width={150}
        height={"auto"}
      />
    </div>
  );
};
