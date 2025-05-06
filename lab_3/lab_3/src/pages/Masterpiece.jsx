import React from "react";
import screamPaintImg from "../assets/images/scream.png";
import "../styles/Masterpiece.css";

export default function Masterpiece() {
  React.useEffect(() => {document.title = "Найвідоміша картина"}, []);
  return (
    <div className="page-paint">
      <h2>Найвідоміша картина</h2>
      <img src={screamPaintImg} alt="Крик" />
      <p>
        «Крик», або «Зойк» (норв. Skrik; створено, разом з версіями, у 1893-1910
        роки) — назва декількох експресіоністських полотен і відбитків
        норвезького художника Едварда Мунка, що зображують агонізуючу від жаху
        постать людини на тлі криваво-червоного неба. Тлом для твору є пейзаж
        фіорду Осло, що відкривається з пагорбу Екеберг в Кристіанії, Норвегія.
      </p>
    </div>
  );
}
