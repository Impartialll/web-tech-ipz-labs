import { useState, useContext } from "react";
import { useTasksDispatch } from "./TasksContext.jsx";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        placeholder="Назва завдання"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Додати
      </button>
    </>
  );
}

let nextId = 3;
