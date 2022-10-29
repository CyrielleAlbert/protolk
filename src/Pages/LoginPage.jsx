import { BottomBar } from "../Components/BottomBar";
import { LogInWithLinkedIn } from "../Components/LogInWithLinkedIn";
import { TopBar } from "../Components/TopBar";

export const LoginPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#2E294E",
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
            color: "white",
            justifyContent: "center",
          }}
        >
          <h1>Welcome on Protolk.</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <LogInWithLinkedIn value={"Log in with"} style={{ margin: 15 }} />
          </div>
          <p
            style={{
              textAlign: "left",
              display: "flex",
              justifyContent: "left",
              fontWeight: "bolder",
            }}
          >
            Why to connect with Linkedin?
          </p>
          <p>
            Protolk is a professional network. We believe that using LinkedIn
            profiles will deter inappropriate behaviors. In addition to it, to
            facilitate networking, your Linkedin profile will be shared with the
            professionals you will meet.
          </p>
        </div>
        <div style={{ width: "50%", marginLeft: "5%", marginRight: "5%" }}>
          <img
            src="/connect.png"
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
