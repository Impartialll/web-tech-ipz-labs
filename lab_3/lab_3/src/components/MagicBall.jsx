import { useState } from "react";
import "../styles/MagicBall.css";

const answers = [
  "Так!",
  "Ні",
  "Можливо...",
  "Спробуй пізніше",
  "Без сумніву!",
  "Я не впевнений",
  "Шанси високі",
  "Краще не казати зараз",
];

function MagicBall() {
  const [answer, setAnswer] = useState("Задайте питання й натисніть кулю!");

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };

  return (
    <div className="magic-ball" onClick={getRandomAnswer}>
      <div className="answer">{answer}</div>
    </div>
  );
}

export default MagicBall;
