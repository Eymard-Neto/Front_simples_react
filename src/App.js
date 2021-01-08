import React from "react";
import Header from "./Header";
import "./App.css";
import background from "./assets/background.jpg"
const App = () => {
  return (
    <>
      <img src={background} alt="bg"/>
      <Header>
        <h3>Olá Vida</h3>
      </Header>
    </>
  );
};

export default App;
