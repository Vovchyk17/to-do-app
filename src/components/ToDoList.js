import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function ToDoList({
  tasks,
  handleDeleteTask,
  handleEditTaskValue,
  selectAll,
  handleToggleSingle,
}) {
  return (
    <ul className="task_list">
      {tasks.map((task, index) => (
        <li key={`task_${index}`} className={task.isDone ? "completed" : ""}>
          <label className="checkbox_wrapper">
            <input
              type="checkbox"
              checked={task.isDone || selectAll}
              onChange={() => handleToggleSingle(index)}
            />
            <span>
              <FaCheck />
            </span>
          </label>
          <label>
            <input
              type="text"
              id={`task_${index}`}
              className="task_list__input"
              disabled={task.isDone}
              value={task.value}
              onChange={(e) => handleEditTaskValue(index, e.target.task.value)}
            />
          </label>
          <button
            className="task_list__delete"
            onClick={() => {
              handleDeleteTask(index);
            }}
          >
            <MdDeleteForever />
          </button>
        </li>
      ))}
    </ul>
  );
}
