import React, { useEffect } from "react";
import { Search, Users, Video } from "react-feather";
import { useRooms } from "../../Requests/useRooms";
import { Card } from "../shared/Card";

export const Rooms = () => {
  const { rooms, loading } = useRooms();
  const [searchValue, setSearchValue] = React.useState("");
  useEffect(() => {
    console.log("rooms", rooms);
  }, [rooms]);
  return (
    <Card positions={[2, 5, 2, 4]} title="" editable={false}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 8,
          width: "auto",
          margin: "1rem",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: "lighter" }}>
          Find a room
        </h2>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 32,
            width: 200,
            display: "flex",
          }}
        >
          <Search size={24} color={"#2E294E"} style={{ margin: 8 }} />
          <input
            type={"text"}
            placeholder="Search"
            width={"auto"}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{
              borderStyle: "none",
              backgroundColor: "transparent",
              outline: "none",
            }}
          />
        </div>
      </div>
      {loading || !rooms || rooms.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table
          style={{
            width: "auto",
            margin: "1rem",
            backgroundColor: "white",
            borderCollapse: "separate",
            borderSpacing: "0px 0.5rem",
            borderRadius: "0.5rem",
            textAlign: "left",
          }}
        >
          <thead>
            <tr
              style={{
                marginBottom: "0.5rem",
                height: "2.373rem",
                padding: 8,
                borderBottom: " 1px solid #F7F7FA",
              }}
            >
              <th style={{ width: "20%", paddingLeft: 8 }}>Name</th>
              <th style={{ width: "20%" }}>Room number</th>
              <th style={{ width: "20%" }}>Number of participants</th>
              <th style={{ width: "20%" }}>Tags</th>
              <th style={{ width: "10%" }} aria-label="action-join-room"></th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => {
              console.log(Object.keys(room));
              return (
                <tr
                  key={room["Id"]}
                  style={{
                    marginBottom: "0.5rem",
                    height: "2.375rem",
                    backgroundColor: "#FDFDFE",
                    border: "1px solid #F7F7FA",
                  }}
                >
                  <td
                    style={{
                      textAlign: "left",
                      paddingLeft: 8,
                      paddingRight: 8,
                    }}
                  >
                    {room.name}
                  </td>
                  <td style={{ paddingRight: 8 }}>{`#${room.id}`}</td>
                  <td
                    style={{
                      paddingRight: 8,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <Users size={24} style={{ marginRight: "1rem" }} />
                      {room.number_participants}
                    </div>
                  </td>
                  <td style={{ paddingRight: 8 }}>
                    <div style={{ display: "flex" }}>
                      {room.tags.map((tag) => {
                        return (
                          <div
                            key={tag.name}
                            style={{
                              backgroundColor: tag.color,
                              color: "white",
                              borderRadius: 16,
                              padding: "4px 8px 4px 8px",
                              margin: "4px 2px 4px 2px",
                              fontSize: 10,
                            }}
                          >{`#${tag.name}`}</div>
                        );
                      })}
                    </div>
                  </td>
                  <td style={{ paddingRight: 8 }}>
                    <button
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#FF7F11",
                        borderWidth: 0,
                        padding: "4px 8px 4px 8px",
                        borderRadius: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Video size={24} color={"white"} />
                        <div
                          style={{
                            color: "white",
                            fontSize: "1rem",
                            paddingLeft: "1rem",
                          }}
                        >
                          Join
                        </div>
                      </div>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Card>
  );
};
