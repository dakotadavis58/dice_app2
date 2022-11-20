import Head from "next/head";
import { BsDice5 } from "react-icons/bs";
import { useState } from "react";

export default function Home() {
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
    console.log(rolls);
    console.log(sorted);
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
      ? setMin(dieType - 1)
      : setMin(Number(e.target.value));
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
    <div id="app" className="">
      <Head>
        <title>Dice Roller</title>
        <meta name="simple dice roller roll die" content="" />
        <link rel="icon" href="/dice-roll-white.png" />
      </Head>
      <div className="flex flex-col h-screen">
        <nav className="h-20 bg-gray-900 text-slate-50 text-3xl w-full flex justify-start items-center p-4 ">
          <BsDice5 className="mr-4" />
          <div>Dice Roller</div>
        </nav>
        <main className="h-full container mx-auto px-4 flex items-center">
          <div className="flex flex-col h-4/5 w-2/3 mx-auto justify-start items-center gap-10 shadow-xl py-4 bg-gray-900 rounded-lg">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold my-4 text-center">
                Let's roll some dice!
              </h1>
              <div className="bg-green-500 w-full mt-4 h-1 shadow-lg"></div>
            </div>
            <div className="flex flex-col h-full text-center">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center py-2 gap-2"
              >
                <label htmlFor="dieType" className="text-xl">
                  What kind of die?
                </label>
                <select
                  name="dieType"
                  id="dieType"
                  className="rounded p-1"
                  onChange={handleSelect}
                  defaultValue="d6"
                >
                  <option value="d4">d4</option>
                  <option value="d6">d6</option>
                  <option value="d8">d8</option>
                  <option value="d10">d10</option>
                  <option value="d12">d12</option>
                  <option value="d20">d20</option>
                </select>
                <label htmlFor="roll" className="text-xl">
                  How many dice to roll?
                </label>
                <input
                  id="roll"
                  type="number"
                  className=""
                  onChange={handleAmount}
                  value={dieAmount}
                />
                <label htmlFor="min" className="text-lg">
                  What's the minimum you need?
                </label>
                <input
                  id="min"
                  type="number"
                  className=""
                  value={min}
                  onChange={handleMin}
                />
                <button className="btn my-4" onClick={roll}>
                  Roll
                </button>
              </form>
            </div>
            <div className="w-full h-full text-center">
              Successes: {successes}
            </div>
            <div></div>
          </div>
        </main>
        <footer className="bg-gray-900">
          <div className="flex justify-center items-center py-4">
            Copyright &copy; Dakota Davis 2022
          </div>
        </footer>
      </div>
    </div>
  );
}
