import React from "react";
import { Card } from "../shared/Card";

export const ProfilesSuggestion = () => {
  return (
    <Card
      positions={[1, 2, 1, 4]}
      title="You should also meet"
      editable={false}
    ></Card>
  );
};
