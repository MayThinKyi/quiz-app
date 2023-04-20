import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
const Menu = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="text-center">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
        className="bg-gray-200 font-[500] text-lg text-slate-900 py-2 px-5 rounded-lg"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Menu;
