import { TopBar } from "../Components/TopBar";
import React from "react";
import { BottomBar } from "../Components/BottomBar";
import { Butt } from "../Components/Button";
import * as Router from "../router";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const navigate = useNavigate();
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
            onClick={() => {
              navigate(Router.path.login);
            }}
            style={{ marginTop: 20 }}
          />
        </div>
        <div style={{ width: "50%", marginLeft: "5%", marginRight: "5%" }}>
          <img
            src="/connection.png"
            alt="illustration-connection"
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
