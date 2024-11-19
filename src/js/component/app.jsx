import React, { useState } from "react";
import TodoItem from "./TodoList";

const App = () => {
  const [task, setTask] = useState("");
  const [arrayTodos, setArrayTodos] = useState([]);
  const [inputButtonStatus, setInputButtonStatus] = useState(false);

  const addTask = () => {
    if (task !== "") {
      const newTask = {
        text: task,
        date: new Date().toLocaleDateString(),
        completed: false,
      };
      setArrayTodos([...arrayTodos, newTask]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newArr = arrayTodos.filter((_, i) => i !== index);
    setArrayTodos(newArr);
  };

  const triggerDoneButton = (index) => {
    const updateTodos = arrayTodos.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setArrayTodos(updateTodos);
  };

  const updateInputStatus = () => {
    setInputButtonStatus(!inputButtonStatus);
  };

  return (
    <>
      <div className="container text-center">
        <h1 className="p-3" style={{ backgroundColor: "cyan" }}>
          My tasks List
        </h1>
        <ul className="list-group">
          {inputButtonStatus ? (
            <input
              className="text-center list-group-item"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Insert a new task"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
            />
          ) : (
            ""
          )}

          {arrayTodos.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              index={index}
              deleteTask={deleteTask}
              triggerDoneButton={triggerDoneButton}
            />
          ))}
          <label
            className={`list-group-item ${
              arrayTodos.length === 0 ? "text-danger" : "text-success"
            }`}
            style={{ fontSize: "11px" }}
          >
            {arrayTodos.length === 0
              ? "No tasks, add a new task."
              : `${arrayTodos.length} tasks.`}
          </label>
        </ul>
      </div>
      <div className="d-flex justify-content-center m-5">
        <button onClick={updateInputStatus} className="btn btn-success ">
          {inputButtonStatus ? "Close input box" : "Open input box"}
        </button>
      </div>
    </>
  );
};

export default App;
