import React, { useState } from "react";
import Die from "../components/Die";

const oneDie = () => {
  const dieTypes = [4, 6, 8, 10, 12, 20, 100]; // array of die types
  const [click, setClick] = useState(true); // state for click
  const [roll, setRoll] = useState(""); // state for roll
  const [dieType, setDieType] = useState(6);

  const handleClick = (e) => {
    e.preventDefault();
    rollDie();
  };

  const handleSelect = (e) => {
    // strip away the 'd' from the value and set dieType
    setDieType(Number(e.target.value.substring(1)));
  };

  const rollDie = () => {
    setRoll(Math.floor(Math.random() * dieType) + 1);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div id="title" className="w-fit ">
        <h1 className="text-2xl md:text-3xl font-bold my-4 text-center">
          Let's roll <span className="text-green-500">ONE</span>
          <span className="text-green-500"> DIE</span>
        </h1>
        <div className="bg-green-500 w-full mt-4 h-1 shadow-lg"></div>
      </div>
      <div className="w-full h-full flex flex-col items-center gap-5 mt-10">
        <div className="flex flex-col items-center gap-4">
          <label htmlFor="dieType" className="text-xl">
            Type of Dice?
          </label>
          <select
            name="dieType"
            id="dieType"
            className="w-20 p-1"
            onChange={handleSelect}
            defaultValue="d6"
          >
            <option value="d4">d4</option>
            <option value="d6">d6</option>
            <option value="d8">d8</option>
            <option value="d10">d10</option>
            <option value="d12">d12</option>
            <option value="d20">d20</option>
            <option value="d100">d100</option>
          </select>
        </div>
        <div>
          <Die dieType={dieType} handleClick={handleClick} />
        </div>
        <div className="text-3xl mt-4 text-center">
          Result: <br />
          {roll}
        </div>
      </div>
    </div>
  );
};

export default oneDie;
