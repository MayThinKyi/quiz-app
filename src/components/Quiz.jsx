import React, { useContext, useState } from "react";
import { questions } from "../Helpers/Questions.js";
import { QuizContext } from "../Helpers/Contexts.js";
const Quiz = () => {
  let [currentIndex, setCurrentIndex] = useState(0);
  let [ans, setAns] = useState("");
  let { score, setScore, gameState, setGameState } = useContext(QuizContext);

  const nextQuizHandle = () => {
    if (ans) {
      if (questions[currentIndex]?.answer === ans) {
        setScore((score += 1));
      }
      setAns("");
      setCurrentIndex((currentIndex += 1));
    } else {
      alert("Please choose one answer!🐱‍🚀");
    }
  };
  const getResultsHandle = () => {
    if (ans) {
      if (questions[currentIndex]?.answer === ans) {
        setScore((score += 1));
      }
      setAns("");
      setGameState("endScreen");
    } else {
      alert("Please choose one answer!🐱‍🚀");
    }
  };

  return (
    <div className="Quiz text-center">
      <h1 className="font-[500] text-lg mb-5">
        {questions[currentIndex]?.prompt}
      </h1>
      <button
        onClick={() => setAns("A")}
        className={`quizBtn ${ans == "A" ? "activeBtn" : ""} `}
      >
        {questions[currentIndex]?.optionA}
      </button>
      <button
        onClick={() => setAns("B")}
        className={`quizBtn ${ans == "B" ? "activeBtn" : ""} `}
      >
        {questions[currentIndex]?.optionB}
      </button>
      <button
        onClick={() => setAns("C")}
        className={`quizBtn ${ans == "C" ? "activeBtn" : ""} `}
      >
        {questions[currentIndex]?.optionC}
      </button>{" "}
      <button
        onClick={() => setAns("D")}
        className={`quizBtn ${ans == "D" ? "activeBtn" : ""} `}
      >
        {questions[currentIndex]?.optionD}
      </button>
      {currentIndex === questions?.length - 1 ? (
        <button
          onClick={getResultsHandle}
          className="bg-gray-200 mt-4 font-[500] text-md text-slate-900 py-2 px-5 rounded-lg"
        >
          Get Results
        </button>
      ) : (
        <button
          onClick={nextQuizHandle}
          className="bg-gray-200 mt-4 font-[500] text-md text-slate-900 py-2 px-5 rounded-lg"
        >
          Next Quiz
        </button>
      )}
    </div>
  );
};

export default Quiz;
