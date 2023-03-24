import axios from "axios";
import { useEffect, useState } from "react";

export const useRooms = () => {
  const [rooms, setRooms] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const getRoomsData = () => {
    setLoading(true);
    axios({
      method: "get",
      baseURL: "http://localhost:8888",
      url: "/data/getRooms",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log("data", res.data);
        setRooms(
          res.data.map((room) => {
            const tags_name = room.tags_value.split(",");
            const tags_color = room.tags_color.split(",");
            const tags = tags_name.map((tag, index) => {
              return { name: tag, color: tags_color[index] };
            });
            return { ...room, tags: tags };
          })
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!rooms) {
      getRoomsData();
    }
  }, []);

  return {
    rooms,
    loading,
  };
};
