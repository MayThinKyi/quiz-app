import { useEffect, useState } from "react";
import "./App.css";
import { QuizContext } from "./Helpers/Contexts";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import logo from "./img/logo.png";
import axios from "axios";
function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
      <div className="App mb-12 ">
        <h1 className="font-semibold text-2xl text-center my-8">
          React Quiz App
        </h1>
        <img src={logo} className="h-[120px] my-5  mx-auto" />

        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </div>
    </QuizContext.Provider>
  );
}

export default App;
