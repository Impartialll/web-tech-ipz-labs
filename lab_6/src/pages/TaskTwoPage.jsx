import React, { useEffect, useState } from "react";

export default function TaskTwoPage() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    // завантажити час з API при старті
    const fetchTime = async () => {
      try {
        const res = await fetch(
          "http://worldtimeapi.org/api/timezone/Europe/Kyiv"
        );
        const data = await res.json();
        const date = new Date(data.datetime);
        setTime(date);
      } catch (err) {
        console.error("Помилка отримання часу: ", err);
      }
    };

    fetchTime();
  }, []);

  useEffect(() => {
    // запустити оновлення кожної секунди
    const interval = setInterval(() => {
      setTime((prevTime) =>
        prevTime ? new Date(prevTime.getTime() + 1000) : null
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h2>Поточний час у Києві</h2>
      {time ? <h3>{time.toLocaleTimeString()}</h3> : <p>Завантаження...</p>}
    </div>
  );
}
