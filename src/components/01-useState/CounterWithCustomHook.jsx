import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { ExplanationUseState } from "./ExplanationUseState";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(0);
  const [factorCounter, setFactorCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleFactor = (e) => {
    setFactorCounter(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center border-2 border-slate-400 rounded-xl p-8 mt-4   ">
      <hr />
      <br />
      <h1>Counter with Hook</h1>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <label id="factor" className="text-2xl font-light">
          Enter the increment and decrement factor:{" "}
        </label>
        <input
          type="number"
          onChange={handleFactor}
          value={factorCounter}
          className="border border-gray-600 m-4 rounded-xl text-center text-gray-600 cursor-pointer "
          name="factor"
        />
      </form>

      <div className="flex justify-center w-96 h-48 border border-8 rounded-xl items-center m-8   ">
        <h1 className="text-6xl text-black  ">{state}</h1>
      </div>

      <div className="flex flex-row">
        <button
          className="m-4 bg-blue-600 lg:w-48 align-middle justify-center text-white rounded-xl p-4 mb-4 sm: w-[250px] cursor-pointer"
          onClick={() => increment(Number(factorCounter))}
        >
          +{factorCounter}
        </button>

        <button
          className="m-4 bg-red-300 lg:w-48 align-middle justify-center text-white rounded-xl p-4 mb-4 sm: w-[250px] cursor-pointer"
          onClick={reset}
        >
          Reset
        </button>

        <button
          className="m-4 bg-blue-600 lg:w-48 align-middle justify-center text-white rounded-xl p-4 mb-4 sm: w-[250px] cursor-pointer"
          onClick={() => decrement(factorCounter)}
        >
          -{factorCounter}
        </button>
      </div>
    </div>
  );
};
