import React from "react";
import { CounterProvider } from "./components/CounterContext";
import EditCounter from "./components/EditCounter";

function App() {
  return (
    <CounterProvider>
      <div className=" grid grid-cols-2 grid-rows-2 p-28 bg-gray-900 min-h-screen text-black font-bold">
        <EditCounter label="EditCounter1" />
        <EditCounter label="EditCounter2" />
        <EditCounter label="EditCounter3" />
        <EditCounter label="EditCounter4" />
      </div>
    </CounterProvider>
  );
}

export default App;
