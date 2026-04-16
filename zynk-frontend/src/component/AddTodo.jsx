// the input form
import React, { useState } from "react";
import "../App.css";
import axios from "axios";

function AddTodo({setTodos}) {
  const [task, setTask] = useState();

  const handleAdd = () => {
    axios
      .post("http://localhost:3006/add", { task: task })
      .then((result) => {
    setTodos(prev => [...prev, result.data])
})
      .catch((err) => console.log(err));
  };
  return (
    <div id="wrapper-form">
      <input
        type="text"
        name="todo-item"
        id="todo-input"
        placeholder="Write a todo and hit add..."
        onChange={(e) => setTask(e.target.value)}
      />

        <button id="add-btn" onClick={handleAdd}>
          ADD
        </button>
    </div>
  );
}

export default AddTodo;
