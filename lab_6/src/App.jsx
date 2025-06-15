import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import TaskOnePage from "./pages/TaskOnePage";
import TaskTwoPage from "./pages/TaskTwoPage";
import TaskThreePage from "./pages/TaskThreePage";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TaskOnePage />} />
        <Route path="task-one" element={<TaskOnePage />} />
        <Route path="task-two" element={<TaskTwoPage />} />
        <Route path="task-three" element={<TaskThreePage />} />
      </Routes>
    </Router>
  );
}
