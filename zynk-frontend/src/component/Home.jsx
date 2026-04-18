// owns all todos state
import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import "../App.css";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function Home() {
  const [todos, setTodos] = useState([]);

  //   functionalities
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3006/delete/" + id)
      .then((result) => {
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleCheck = (id) => {
    axios
      .put("http://localhost:3006/update/" + id)
      .then((result) => {
        setTodos(
          todos.map((todo) => {
            if (todo._id === id) {
              return { ...todo, done: !todo.done };
            }
            return todo;
          }),
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3006/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Todo List </h1>
      {/* to display the todos */}
      <AddTodo setTodos={setTodos} />

      {todos.length === 0 ? (
        <h3>We aim. We ache. We rise.</h3>
      ) : (
        todos.map((todo) => (
          <div className="todo">
            <div
              className="custom-checkbox"
              onClick={() => handleCheck(todo._id)}
            >
              {todo.done ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
            </div>
            <p className={todo.done ? "line-through" : ""}>{todo.task}</p>
            <div className="delete-btn" onClick={() => handleDelete(todo._id)}>
              <DeleteIcon />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
