import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./actions/todoAction";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <div>
        <input
          type="text"
          value={task}
          placeholder="Write your Todo"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggle(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
