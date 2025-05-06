import React from "react";
import { useParams, useOutletContext } from "react-router-dom";
import "./styles/ArtworkDetail.css";

const ArtworkDetail = () => {
  const { id } = useParams();
  const [artworks] = useOutletContext();
  const artwork = artworks.find((a) => a.id === parseInt(id));
  React.useEffect(() => {document.title = artwork.title}, [artwork]);
  
  if (!artwork) return <p>Картину не знайдено</p>;

  return (
    <div className="artwork-detail">
    <img src={artwork.img} alt={artwork.title} />
    <div className="artwork-info">
      <h2>{artwork.title}</h2>
      <p><strong>Автор:</strong> {artwork.author}</p>
      <p><strong>Рік написання:</strong> {artwork.year}</p>
      <p id="full-description">{artwork.fullDescription}</p>
    </div>
  </div>
  );
};

export default ArtworkDetail;
