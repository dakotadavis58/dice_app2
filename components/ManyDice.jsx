import React, { useEffect, useState } from "react";
import Form from "./Form";
import RollOutput from "./RollOutput";

function ManyDice({}) {
  let count = 1;
  let max = 100;
  const [dieType, setDieType] = useState(6);
  const [dieAmount, setDieAmount] = useState(1);
  const [min, setMin] = useState(1);
  const [rolls, setRolls] = useState([]);
  const [successes, setSuccesses] = useState(0);
  const [sorted, setSorted] = useState([]);
  const [detailsActive, setDetailsActive] = useState(false);

  const handleSubmit = (e) => {
    // stop reload
    e.preventDefault();
  };

  const handleSelect = (e) => {
    // strip away the 'd' from the value and set dieType
    setDieType(Number(e.target.value.substring(1)));
  };

  const handleAmount = (e) => {
    // max 99 dice, min 1
    e.target.value < 1
      ? setDieAmount(1)
      : setDieAmount(Number(e.target.value)) || e.target.value > max
      ? setDieAmount(max)
      : setDieAmount(Number(e.target.value));
  };

  const handleMin = (e) => {
    // max is the die type - 1, min is 1
    if (e.target.value < 1) {
      setMin(1);
    } else if (e.target.value > dieType) {
      setMin(dieType);
    } else {
      setMin(Number(e.target.value));
    }
  };

  const checkSuccesses = () => {
    let successCount = 0;
    rolls.forEach((roll) => {
      if (roll >= min) {
        successCount++;
      }
    });
    setSuccesses(successCount);
  };

  // roll the dice
  const roll = (e) => {
    let rolls = [];
    for (let i = 0; i < dieAmount; i++) {
      rolls.push(Math.floor(Math.random() * dieType) + 1);
    }
    setRolls(rolls.sort());
    setSuccesses(rolls.filter((roll) => roll >= min).length);
    setSorted(createAmountsPerRollArray(rolls));
  };

  // * create an array of objects with the amount of each roll
  const createAmountsPerRollArray = (array) => {
    let sortedArray = new Array(dieType).fill(0);
    let sortedIndex = 0;
    let rollNum = 1;

    for (let i = 0; i < sortedArray.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] === rollNum) {
          sortedArray[sortedIndex]++;
        }
      }
      rollNum++;
      sortedIndex++;
    }
    return sortedArray;
  };

  useEffect(() => {
    checkSuccesses();
  }, [min]);

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
            <Successes successes={successes} />
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

function Successes({ successes }) {
  return <div>Successes: {successes}</div>;
}

export default ManyDice;
