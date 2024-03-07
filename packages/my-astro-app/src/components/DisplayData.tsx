import React, { useState } from "react";

interface Todo {
  id: string;
  title: string;
}

interface ILists {
  lists: Todo[];
  userId: string;
}

const DisplayData: React.FC<ILists> = ({ lists }) => {
  const [todos, setTodos] = useState<Todo[]>(lists);
  const [input, setInput] = useState<string>("");

  const handleAddTodo = async () => {
    if (!input) {
      console.warn("Please enter a todo title.");
      return;
    }

    try {
      const response = await fetch("/api/addTodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: input }),
      });

      if (response.ok) {
        const newTodo: Todo = await response.json();
        setTodos([...todos, newTodo]);
        setInput("");
      } else {
        console.error("Failed to add todo.");
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ex: Play Football"
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleAddTodo}>ADD</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
