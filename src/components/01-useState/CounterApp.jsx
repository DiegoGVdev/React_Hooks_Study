import { useState } from "react";
import { ExplanationUseState } from "./ExplanationUseState";
export const CounterApp = () => {
  const [state, setState] = useState({
    contador1: 20,
    contador2: 40,
    contador3: 50,
  });

  const { contador1, contador2 } = state;

  const handleClick = () => {
    setState({
      ...state,
      contador1: contador1 + 1,
    });
  };

  return (
    <>
        <ExplanationUseState />
      <div className="flex flex-col items-center border-2 border-slate-400 rounded-xl">
      <h1 className="pt-2  ">Counter1:  {contador1}</h1>
      <h1 className="p-8 mb-4">Counter2:  {contador2}</h1>
      <button
        onClick={handleClick}
        className="bg-blue-600 lg:w-96 align-middle justify-center text-white rounded-xl p-4 mb-4 sm: w-[250px] cursor-pointer   "
      >
        +1
      </button>
    </div>
    </>
  );
};
