import React from "react";

function Die({ dieType, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="die w-14 h-14 bg-slate-300 text-slate-800 font-medium text-lg flex justify-center items-center hover:"
      value={dieType}
    >
      {dieType}
    </button>
  );
}

export default Die;
