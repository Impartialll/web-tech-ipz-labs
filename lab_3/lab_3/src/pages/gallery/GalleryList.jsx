import { useOutletContext, Link } from "react-router-dom";
import "./styles/Gallery.css";

const GalleryList = () => {
  const [artworks, setArtworks] = useOutletContext();

  const removeArtwork = (id) => {
    setArtworks((arts) => arts.filter((a) => a.id !== id));
  };

  return (
    <div className="gallery">
      <Link to="new">➕ Нова картина</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Зображення</th>
            <th>Назва</th>
            <th>Опис</th>
            <th>Видалити</th>
          </tr>
        </thead>
        <tbody>
          {artworks.map((art) => (
            <tr key={art.id}>
              <td>{art.id}</td>
              <td>
                <img width="50" src={art.img} alt={art.title} />
              </td>
              <td>
                <Link to={`/gallery/${art.id}`}>{art.title}</Link>
              </td>
              <td>{art.description}</td>
              <td>
                <button onClick={() => removeArtwork(art.id)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GalleryList;
