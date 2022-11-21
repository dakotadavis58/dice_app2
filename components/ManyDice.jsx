import React from "react";
import Form from "./Form";
import RollOutput from "./RollOutput";

function ManyDice({
  handleSubmit,
  handleSelect,
  handleAmount,
  dieAmount,
  handleMin,
  min,
  roll,
  rolls,
  successes,
  sorted,
  dieType,
}) {
  let count = 1;

  return (
    <>
      <div id="manyDiceRoller">
        <h1 className="text-2xl md:text-3xl font-bold my-4 text-center">
          Let's roll <span className="text-green-500">A LOT</span> of
          <span className="text-green-500"> DICE</span>
        </h1>
        <div className="bg-green-500 w-full mt-4 h-1 shadow-lg"></div>
      </div>
      <div className="grid grid-flow-col auto-cols-fr max-h-[70vh]">
        <div className="flex flex-col h-full text-center">
          <Form
            handleSubmit={handleSubmit}
            handleSelect={handleSelect}
            handleAmount={handleAmount}
            handleMin={handleMin}
            dieAmount={dieAmount}
            dieType={dieType}
            min={min}
            roll={roll}
          />
          <div className="w-full h-full text-center text-xl font-semibold">
            Successes: {successes}
          </div>
        </div>
        <div className="h-2/3">
          <div className="h-2/3 text-center">
            <h3 className="text-xl font-semibold m-2">Roll Results</h3>
            <div className="grid rolloutput">
              {sorted.map((rollIndex) => {
                return (
                  <RollOutput
                    key={count}
                    id={count++}
                    roll={rollIndex}
                    min={min}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManyDice;
