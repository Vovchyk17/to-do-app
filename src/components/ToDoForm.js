import React from "react";
import { FaCheck, FaPlusCircle } from "react-icons/fa";

export default function ToDoForm({
  newTask,
  setNewTask,
  handleSubmitTask,
  handleToggleAll,
  selectAll,
}) {
  return (
    <form
      className="content__form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitTask(newTask);
      }}
    >
      <label className="checkbox_wrapper">
        <input
          type="checkbox"
          className="checked_all"
          onChange={handleToggleAll}
          checked={selectAll}
        />
        <span>
          <FaCheck />
        </span>
      </label>
      <label className="input_text__label">
        <input
          type="text"
          placeholder="What needs to be done?"
          className="add_task__input"
          value={newTask}
          onChange={({ target }) => {
            setNewTask(target.value);
          }}
        />
      </label>
      <button type="submit">
        <FaPlusCircle />
      </button>
    </form>
  );
}
