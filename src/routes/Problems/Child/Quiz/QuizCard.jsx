import React, { useState } from "react";
import "./QuizCard.css";

function QuizCard({ option, correctAnswer }) {
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    e.target.value && e.target.value === correctAnswer
      ? setResult(true)
      : setResult(false);
  };
  return (
    <div className="w-full md:w-2/5 rounded-lg  shadow-md hover:bg-neutral-900 py-4 px-8 mt-4">
      <input
        type="radio"
        name="default-radio"
        className={`w-4 h-4 text-neutral-600 bg-gray-100 border-gray-300 `}
        value={option}
        onClick={clickHandler}
      />
      <label
        className={`ml-2 text-base font-medium text-gray-300 ${
          (result === true && "text-green-400") ||
          (result === false && "text-red-400")
        } opacity-90`}
      >
        {option}
      </label>
    </div>
  );
}
// className="ml-2 text-base font-medium text-gray-300  opacity-90"
export default QuizCard;
