import React from "react";

function RollOutput({ id, roll, min }) {
  return (
    <div
      className={`text-lg ${id < min ? "text-red-400" : "text-green-400"}`}
      key={id}
    >
      {id} x {roll}
    </div>
  );
}

export default RollOutput;
