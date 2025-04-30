import { useState } from "react";
import img_1 from "../assets/image.png";
import img_2 from "../assets/image copy.png";

function NativeCity() {
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
      className="card-city"
      style={{ ...styleRandom, transition: "all 0.3s ease" }}
    >
      <h2>Місто: Володимир</h2>
      <p>Країна: Україна</p>
      <p>Рік заснування: 988</p>
      <div className="city-images">
        <img src={img_1} alt="Пам'ятка 1" />
        <img src={img_2} alt="Пам'ятка 2" />
      </div>
      <button onClick={handlerBtnClick}>Змінити стиль</button>
    </div>
  );
}

export default NativeCity;
