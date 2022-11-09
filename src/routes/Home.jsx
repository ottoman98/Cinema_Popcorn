import React from "react";
import NavBar from "../components/NavBar";
import LayOut from "../components/LayOut";

export default function Home() {
  return (
    <div className="home">
      <header>
        <NavBar />
      </header>
      <main>
        <LayOut />
      </main>
    </div>
  );
}
