import React, { useState } from "react";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import "./Style.css";

export default function TodoListOnePage() {
  React.useEffect(() => {
    document.title = "Tasks 1";
  }, []);

  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h3>Перший варіант</h3>
      <h1>Список завдань</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 1, text: "Сходити за продуктами", done: false },
  { id: 2, text: "Завершити проєкт", done: false },
];
