import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function ToDoList({
  tasks,
  onTaskDelete,
  onValueChange,
  onStatusChange,
}) {
  return (
    <ul className="task_list">
      {tasks.map((task, index) => (
        <li key={`task_${index}`} className={task.completed ? "completed" : ""}>
          <label className="checkbox_wrapper">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onStatusChange(index)}
            />
            <span>
              <FaCheck />
            </span>
          </label>
          <label>
            <input
              type="text"
              disabled={task.completed}
              value={task.value}
              onChange={(e) => {
                onValueChange(index, { ...task, value: e.target.value });
              }}
            />
          </label>
          <button
            className="task_list__delete"
            onClick={() => {
              onTaskDelete(index);
            }}
          >
            <MdDeleteForever />
          </button>
        </li>
      ))}
    </ul>
  );
}
