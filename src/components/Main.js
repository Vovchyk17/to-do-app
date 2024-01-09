import { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ToDoFilter from "./ToDoFilter";

export default function Main() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [allChecked, setAllChecked] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [activeCount, setActiveCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleSubmitForm(e) {
    e.preventDefault();

    const input = e.target.querySelector(".add_new_task");
    const inputValue = input.value;

    if (inputValue) {
      setTasks([
        ...tasks,
        {
          value: inputValue,
          completed: false,
        },
      ]);
      input.value = "";
      setAllChecked(false);
    }
  }

  const isAnyItems = tasks.length > 0;

  function handleTaskDelete(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
    setAllChecked(newTasks.every((task) => task.completed));
  }

  function handleValueChange(index, newValue) {
    const newTasks = tasks.map((task, i) => (i === index ? newValue : task));
    setTasks(newTasks);
    setAllChecked(newTasks.every((task) => task.completed));
  }

  function handleToggleAll(isChecked) {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      completed: isChecked,
    }));
    setTasks(updatedTasks);
    setAllChecked(isChecked);
  }

  function handleStatusChange(index) {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task,
    );
    setTasks(newTasks);
    setAllChecked(newTasks.every((task) => task.completed));
  }

  function handleFilterChange(filter) {
    setCurrentFilter(filter);
  }

  useEffect(() => {
    function filterTasksByStatus(tasks, filter) {
      switch (filter) {
        case "Active":
          return tasks.filter((task) => !task.completed);
        case "Completed":
          return tasks.filter((task) => task.completed);
        default:
          return tasks;
      }
    }

    const filteredTasks = filterTasksByStatus(tasks, currentFilter);
    setFilteredTasks(filteredTasks);
  }, [tasks, currentFilter]);

  useEffect(() => {
    const activeTasks = tasks.filter((task) => !task.completed).length;
    setActiveCount(activeTasks);
  }, [tasks]);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    setCompletedCount(completedTasks);
  }, [tasks]);

  function handleClearCompleted() {
    const completedTasks = tasks.filter((task) => !task.completed);
    setTasks(completedTasks);
    setAllChecked(false);
  }

  return (
    <main id="main" className="container">
      <div className="content">
        <ToDoForm
          onSubmitForm={handleSubmitForm}
          onToggleAll={handleToggleAll}
          isAnyItems={isAnyItems}
          allChecked={allChecked}
        />

        {isAnyItems && (
          <ToDoFilter
            currentFilter={currentFilter}
            onFilterChange={handleFilterChange}
            activeTasks={activeCount}
            completedTasks={completedCount}
          />
        )}

        {isAnyItems && (
          <ToDoList
            tasks={filteredTasks}
            onTaskDelete={handleTaskDelete}
            onValueChange={handleValueChange}
            onStatusChange={handleStatusChange}
          />
        )}
        {isAnyItems && (
          <div className="content_bottom">
            <p>{activeCount > 0 ? `${activeCount} items left` : `All done!`}</p>
            {completedCount > 0 ? (
              <button onClick={handleClearCompleted}>Clear completed</button>
            ) : null}
          </div>
        )}
      </div>
    </main>
  );
}
