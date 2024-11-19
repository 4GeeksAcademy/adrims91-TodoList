import React from "react";

const TodoItem = ({ item, index, deleteTask, triggerDoneButton }) => {
  return (
    <li className="list-group-item">
      <i
        onClick={() => {
          const deleteAnswer = prompt("Do you want to delete the task? Yes/No");
          return deleteAnswer.toLowerCase() === "yes" ? deleteTask(index) : "";
        }}
        style={{ float: "left", cursor: "pointer" }}
        className="fa-solid fa-minus"
      ></i>{" "}
      <b
        style={{ textTransform: "capitalize" }}
        className={`${
          item.completed === true ? "text-success" : " text-danger"
        }`}
      >
        {item.text.toLowerCase()}
      </b>{" "}
      <small style={{ fontSize: "10px" }} className="ms-3">
        Added on {item.date}
      </small>{" "}
      {item.completed === true ? (
        <small style={{ fontSize: "10px" }}>- Closed on {item.date}</small>
      ) : (
        ""
      )}
      <i
        onClick={() => triggerDoneButton(index)}
        style={{ float: "right", cursor: "pointer" }}
        className="fa-solid fa-check"
      ></i>
    </li>
  );
};

export default TodoItem;
