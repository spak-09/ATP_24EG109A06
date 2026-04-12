import { useEffect, useState } from "react";

function Users({ onAddUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {users.map(user => (
        <div
          key={user.id}
          className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition"
        >
          <h2 className="text-xl font-bold mb-2">{user.name}</h2>
          <p className="text-gray-400 text-sm">{user.email}</p>

          <button
            onClick={onAddUser}
            className="mt-4 w-full bg-purple-500 hover:bg-purple-600 py-2 rounded-lg font-semibold transition"
          >
            Add User
          </button>
        </div>
      ))}
    </div>
  );
}

export default Users;