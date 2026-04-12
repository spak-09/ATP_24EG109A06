import { useState } from "react";
import Users from "./components/Users";
import UserCount from "./components/UserCount";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">User App</h1>

      <UserCount count={count} />

      <Users onAddUser={incrementCount} />
    </div>
  );
}

export default App;