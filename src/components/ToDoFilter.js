import { useEffect } from "react";

export default function ToDoFilter({
  currentFilter,
  onFilterChange,
  activeTasks,
  completedTasks,
}) {
  const filters = ["All", "Active", "Completed"];
  const allTasksCount = activeTasks + completedTasks || 0;

  return (
    <div className="filter_list">
      {filters.map((filter) => (
        <button
          key={filter}
          className={currentFilter === filter ? "active" : ""}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
          {filter === "All" && ` (${allTasksCount})`}
          {filter === "Active" && ` (${activeTasks})`}
          {filter === "Completed" && ` (${completedTasks})`}
        </button>
      ))}
    </div>
  );
}
