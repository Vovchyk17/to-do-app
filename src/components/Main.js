import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function Main() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  function handleSubmitTask(task) {
    if (task !== "") {
      setTasks((prevTasks) => [...prevTasks, { value: task, isDone: false }]);
      setNewTask("");
    }
  }

  function handleDeleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  }

  function handleEditTaskValue(index, newValue) {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? newValue : task)),
    );
  }

  function handleToggleAll() {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({
        ...task,
        isDone: !selectAll,
      })),
    );
  }

  function handleToggleSingle(index) {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isDone: !task.isDone } : task,
      ),
    );
    setSelectAll(false); // Uncheck "check all" when an individual item is toggled
  }

  const isAnyItems = tasks.length > 0;

  return (
    <main id="main" className="container">
      <div className="content">
        <ToDoForm
          newTask={newTask}
          setNewTask={setNewTask}
          handleSubmitTask={handleSubmitTask}
          handleToggleAll={handleToggleAll}
          selectAll={selectAll}
        />
        {isAnyItems && (
          <ToDoList
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            handleEditTaskValue={handleEditTaskValue}
            selectAll={selectAll}
            handleToggleAll={handleToggleAll}
            handleToggleSingle={handleToggleSingle}
          />
        )}
      </div>
    </main>
  );
}
