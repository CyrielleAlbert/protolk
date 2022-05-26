import { TopBar } from "../Components/TopBar";
import React from "react";
import { BottomBar } from "../Components/BottomBar";
import { Butt } from "../Components/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const HomePage = () => {
  const history = useHistory()
  return (
    <div
      style={{
        height: window.innerHeight,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "40%",
            marginLeft: "10%",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Where professional networking has no border.</h1>
          <p>
            Networking offers so many opportunities but we all know it can be
            time-consuming. With Protolk you will be able to meet other
            professionals from all around the world without fearing long and
            boring meetings. Protolk is an online speed meeting application. It
            is a safe place to extend our professional network.
          </p>
          <Butt
            value={"Start networking"}
            onClick={() => {history.push("/Login")}}
            style={{ marginTop: 20 }}
          />
        </div>
        <div style={{ width: "50%", marginLeft: "5%", marginRight: "5%" }}>
          <img
            src="/connection.png"
            style={{ margin: "auto", display: "block" }}
            width={"80%"}
            height={"auto"}
          />
        </div>
      </div>
      <BottomBar />
    </div>
  );
};
