import React from "react";
import { useCounter } from "./CounterContext";

const EditCounter = ({ label }) => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="bg-purple-600 p-32 m-3.5 border-4 shadow-2xl  ">
      <h3>{label}</h3>
      <p>{count}</p>
      <button onClick={increment} className="bg-white p-3 rounded-4xl m-2">+</button>
      <button onClick={decrement} className="bg-white p-3 rounded-4xl m-2">−</button>
    </div>
  );
};

export default EditCounter;
