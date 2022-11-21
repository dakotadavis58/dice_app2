import { useState } from "react";
import ManyDice from "../components/ManyDice";

export default function Home({ children }) {
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
    // strip away the 'd' from the value
    setDieType(Number(e.target.value.substring(1)));
  };

  const handleAmount = (e) => {
    // max 99 dice, min 1
    e.target.value < 1
      ? setDieAmount(1)
      : setDieAmount(Number(e.target.value)) || e.target.value > 99
      ? setDieAmount(99)
      : setDieAmount(Number(e.target.value));
  };

  const handleMin = (e) => {
    // max is the die type - 1, min is 1
    e.target.value < 1
      ? setMin(1)
      : setMin(Number(e.target.value)) || e.target.value > dieType - 1
      ? setMin(dieType)
      : setMin(Number(e.target.value));
    setSorted(createAmountsPerRollArray(rolls));
  };

  const roll = (e) => {
    let rolls = [];
    for (let i = 0; i < dieAmount; i++) {
      rolls.push(Math.floor(Math.random() * dieType) + 1);
    }
    setRolls(rolls.sort());
    setSuccesses(rolls.filter((roll) => roll >= min).length);
    setSorted(createAmountsPerRollArray(rolls));
  };

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

  return (
    <ManyDice
      sorted={sorted}
      handleSubmit={handleSubmit}
      handleSelect={handleSelect}
      handleAmount={handleAmount}
      handleMin={handleMin}
      dieAmount={dieAmount}
      dieType={dieType}
      min={min}
      roll={roll}
      successes={successes}
    />
  );
}
