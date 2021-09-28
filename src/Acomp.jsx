import React from "react";

function Acomp({data}) {
  return (
    <div style={{
        backgroundColor: "red",
        width: "25%",
        position: "absolute",
        bottom: "0",
        color: "white",
        border: "1px solid",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Already Completed</h1>
      {data.map((obj) => (
        <p>{obj.text}</p>
      ))}
    </div>
  );
}

export default Acomp;
