import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="task-one">Завдання 1</Link>
      <Link to="task-two">Завдання 2</Link>
      <Link to="task-three">Завдання 3</Link>
    </header>
  );
}
