import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { questions } from "../Helpers/Questions.js";

const EndScreen = () => {
  const { score, setGameState, setScore } = useContext(QuizContext);
  const restartQuizHandle = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="text-center">
      <h1 className="font-[500] mb-4 text-lg text-slate-900 ">
        Results: {score} / {questions?.length}
      </h1>
      <button
        onClick={restartQuizHandle}
        className="bg-gray-200 font-[500] text-lg text-slate-900 py-2 px-5 rounded-lg"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default EndScreen;
