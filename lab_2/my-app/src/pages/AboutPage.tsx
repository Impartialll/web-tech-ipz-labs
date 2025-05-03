import React from "react";
import UserCard from "../components/UserCard";
import NativeCity from "../components/NativeCity";

function AboutPage() {
  // Коли сторінка активна - назва документу буде About
  React.useEffect(() => {
    document.title = "About";
  }, []);

  // Повертає сторінку із компонентами
  return (
    <div className="page">
      <h1 style={{ color: "white" }}>Про мене</h1>
      <UserCard />
      <NativeCity />
    </div>
  );
}

export default AboutPage;
