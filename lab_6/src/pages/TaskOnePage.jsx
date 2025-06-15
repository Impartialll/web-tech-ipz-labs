import { useState, useEffect } from "react";
import React from "react";

export default function TaskOnePage() {
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());
  const timerAcion = () => {
    setCurrTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    let handlerTimer = setInterval(timerAcion, 1000);

    return () => {
      clearInterval(handlerTimer);
    };
  }, []);
  return <h1>{currTime}</h1>;
}
