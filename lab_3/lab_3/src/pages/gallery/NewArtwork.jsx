import React, { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import "./styles/NewArtwork.css";

const NewArtwork = () => {
  useEffect(() => {document.title = "Нова картина"},[]);
  const [artworks, setArtworks] = useOutletContext();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const addArtwork = () => {
    const newArt = {
      id: artworks.length > 0 ? Math.max(...artworks.map((a) => a.id)) + 1 : 1,
      title,
      author,
      year: parseInt(year),
      description,
      fullDescription,
      img,
    };
    setArtworks([...artworks, newArt]);
    navigate("/gallery");
  };

  return (
    <div>
    <h2>Додати нову картину</h2>
    <input
      placeholder="Назва"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    /><br />
    <input
      placeholder="Автор"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
    /><br />
    <input
      type="number"
      placeholder="Рік написання"
      value={year}
      onChange={(e) => setYear(e.target.value)}
    /><br />
    <input
      placeholder="Короткий опис"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    /><br />
    <textarea
      cols={30}
      rows={8}
      placeholder="Повний опис"
      value={fullDescription}
      onChange={(e) => setFullDescription(e.target.value)}
    /><br />
    <input
      placeholder="URL зображення"
      value={img}
      onChange={(e) => setImg(e.target.value)}
    /><br />
    <button onClick={addArtwork}>Додати</button>
  </div>
  );
};

export default NewArtwork;
