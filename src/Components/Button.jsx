import { useState } from "react";

export const Butt = ({ value, onClick, style }) => {
  const [bgColor, setBgColor] = useState("#E07112");
  return (
    <div
      onMouseEnter={()=>{setBgColor("#C26312")}}
      onMouseLeave={()=>setBgColor("#E07112")}
      style={{
        backgroundColor: bgColor,
        padding: "15px 20px 15px 20px",
        color: "white",
        fontSize: "1.5rem",
        borderRadius: 16,
        cursor:"pointer",
        ...style,
      }}
      onClick={onClick}
    >
      {value}
    </div>
  );
};
