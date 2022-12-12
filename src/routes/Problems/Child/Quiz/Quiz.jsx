import React, { useState } from "react";
import QuizCard from "./QuizCard";

function Quiz({ title, count, options, correctAnswer }) {
  const [view, setView] = useState(false);
  const viewResult = () => {
    setView((prev) => !prev);
  };

  let counter = 0;

  return (
    <div className="p-12 md:w-full  rounded-lg  shadow-md  ">
      <div>
        <div
          className="text-sm  md:text-lg  text-gray-300 text-end mb-6 opacity-90 cursor-pointer"
          onClick={viewResult}
        >
          {!view ? (
            <i className="fa-regular fa-eye"></i>
          ) : (
            <i className="fa-regular fa-eye-slash"></i>
          )}
        </div>
        <div
          className={
            !view
              ? "hidden"
              : "relative ml-auto mb-4 w-48  rounded-md bg-neutral-800  py-1 shadow-lg  focus:outline-none transition ease-out duration-100"
          }
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex="-1"
        >
          <div
            className="block px-4 py-2  md:text-sm text-gray-300"
            tabIndex="-1"
          >
            {correctAnswer}
          </div>
        </div>
      </div>
      <div className="mb-2 text-xl text-justify md:text-center font-bold  text-gray-300 tracking-wide antialiased opacity-90 ">
        quiz {count} : {title}{" "}
      </div>

      <div>
        <div className="flex flex-col  md:flex-row flex-wrap flex-1 justify-center gap-4 ">
          {options.map((item) => {
            return (
              <QuizCard
                option={item}
                key={counter++}
                correctAnswer={correctAnswer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
