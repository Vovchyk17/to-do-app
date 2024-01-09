import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function Main() {
  const [tasks, setTasks] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

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
    if (isChecked) {
      setTasks(tasks.map((task) => ({ ...task, completed: true })));
    } else {
      setTasks(tasks.map((task) => ({ ...task, completed: false })));
    }
    setAllChecked(isChecked);
  }

  function handleStatusChange(index) {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task,
    );
    setTasks(newTasks);
    setAllChecked(newTasks.every((task) => task.completed));
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
          <ToDoList
            tasks={tasks}
            onTaskDelete={handleTaskDelete}
            onValueChange={handleValueChange}
            onStatusChange={handleStatusChange}
          />
        )}
      </div>
    </main>
  );
}
