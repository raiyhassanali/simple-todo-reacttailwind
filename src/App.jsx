import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-md">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          Simple Todo App
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (todo === "") return;

            setTodolist([...todolist, todo]);
            setTodo("");
          }}
          className="flex gap-2 mb-4"
        >
          <input
            type="text"
            placeholder="Enter todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2"
          />

          <button className="bg-blue-500 text-white px-4 rounded-lg">
            Add
          </button>
        </form>

        {todolist.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border rounded-lg px-3 py-2 mb-2 bg-gray-50"
          >
            <span>{item}</span>

            <div className="flex gap-2">
              <button className="text-blue-500 text-sm">
                Edit
              </button>
              <button className="text-red-500 text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
