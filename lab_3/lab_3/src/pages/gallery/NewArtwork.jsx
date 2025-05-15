import React, { useRef, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import "./styles/NewArtwork.css";

export default function NewArtwork() {
  useEffect(() => {document.title = "Нова картина"},[]);

  const navigate = useNavigate();
  const [artworks, setArtworks] = useOutletContext();

  const titleRef = useRef("");
  const authorRef = useRef("");
  const yearRef = useRef(0);
  const descriptionRef = useRef("");
  const fullDescriptionRef = useRef("");
  const imgRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newArt = {
      id: artworks.length > 0 ? Math.max(...artworks.map((a) => a.id)) + 1 : 1,
      title: titleRef.current?.value || "",
      author: authorRef.current?.value || "",
      year: parseInt(yearRef.current?.value || "0"),
      description: descriptionRef.current?.value || "",
      fullDescription: fullDescriptionRef.current?.value || "",
      img: imgRef.current?.value || "",
    };

    setArtworks([...artworks, newArt]);
    navigate("/gallery");
  };

  return (
    <div>
      <h2>Додати нову картину</h2>
      <form onSubmit={handleSubmit}>
        <input ref={titleRef} placeholder="Назва" /><br />
        <input ref={authorRef} placeholder="Автор" /><br />
        <input ref={yearRef} type="number" placeholder="Рік написання" /><br />
        <input ref={descriptionRef} placeholder="Короткий опис" /><br />
        <textarea
          ref={fullDescriptionRef}
          cols={30}
          rows={8}
          placeholder="Повний опис"
        /><br />
        <input ref={imgRef} placeholder="URL зображення" /><br />
        <button type="submit">Додати</button>
      </form>
    </div>
  );
};
