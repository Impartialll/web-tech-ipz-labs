import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";

export default function TodoListTwoPage() {
  React.useEffect(() => {
    document.title = "Tasks 2";
  }, []);

  return (
    <TasksProvider>
      <h3>Другий варіант, з використанням context</h3>
      <h1>Список завдань</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
