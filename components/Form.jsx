import React from "react";

function Form({
  handleSubmit,
  handleSelect,
  handleAmount,
  dieAmount,
  handleMin,
  min,
  roll,
}) {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center py-2 gap-2"
      >
        <label htmlFor="dieType" className="text-xl">
          Type of Dice?
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
          How many?
        </label>
        <input
          id="roll"
          type="number"
          className=""
          onChange={handleAmount}
          value={dieAmount}
        />
        <label htmlFor="min" className="text-lg">
          Minimum?
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
  );
}

export default Form;
