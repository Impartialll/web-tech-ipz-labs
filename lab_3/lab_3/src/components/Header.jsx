import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <nav>
      <Link to="magic-ball">Магічна куля</Link>
      <Link to="biography">Біографія</Link>
      <Link to="masterpiece">Найвідоміша картина</Link>
      <Link to="gallery">Галерея</Link>
    </nav>
  );
}

export default Header;
