import { useState } from "react";

function UserCard() {
  const randomStyles = [
    {
      color: "#333",
      background: "#c5cae9",
      border: "2px solidrgb(62, 242, 185)",
    },
    { color: "white", background: "#3f51b5", border: "2px solid #7986cb" },
  ];

  const [styleRandom, setStyleRandom] = useState(randomStyles[0]);
  const [index, setIndex] = useState(0);

  const handlerBtnClick = () => {
    const nextIndex = (index + 1) % randomStyles.length;
    setStyleRandom(randomStyles[nextIndex]);
    setIndex(nextIndex);
  };

  return (
    <div
      className="card-about"
      style={{ ...styleRandom, transition: "all 0.3s ease" }}
    >
      <h2>Максим Мельничук</h2>
      <p>Телефон: +380931202392</p>
      <p>Email: melnychuk.m@gmail.com</p>
      <button onClick={handlerBtnClick}>Змінити стиль</button>
    </div>
  );
}

export default UserCard;
