import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import FootballClubPage from "./pages/FootballClubPage";

function App() {
  return (
    // BrowserRouter(мною змінена як Router) - обгортка над всім застосунком для можливості роутигу
    // Routes - обгортка над роутами, для можливості перенаправлення на наступну сторінку
    // Route - вказує на вікно для перенаправлення
    // Link - посилання на вікно згідно path який вказаний у Route
    <Router>
      <div className="top-nav">
        <Link to="/">Про мене</Link>
        <Link to="/club">Футбольний клуб</Link>
      </div>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/club" element={<FootballClubPage />} />
      </Routes>
    </Router>
  );
}

export default App;
