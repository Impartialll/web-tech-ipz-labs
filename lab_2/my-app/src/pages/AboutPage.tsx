import React from "react";
import UserCard from "../components/UserCard";
import NativeCity from "../components/NativeCity";

function AboutPage() {
  React.useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="page">
      <h1 style={{ color: "white" }}>Про мене</h1>
      <UserCard />
      <NativeCity />
    </div>
  );
}

export default AboutPage;
