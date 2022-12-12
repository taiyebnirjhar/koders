import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./QuizDetails.css";

function QuizDetails() {
  const QuizData = useLoaderData();
  const { name, questions } = QuizData.data;
  let counter = 1;

  return (
    <div className="main__container ">
      {/* md:h-max-content lg:h-screen */}
      <div
        className="mx-auto 
      
      md:max-w-5xl px-2 sm:px-6 lg:px-8 "
      >
        <div className="flex flex-col flex-1 justify-center">
          <div className="flex flex-col flex-1 items-center p-12 leading-5 gap-8">
            <h3 className="text-3xl text-gray-300 opacity-90 font-bold tracking-tight  py-8 text-center ">
              Quiz for {name}
            </h3>
            {questions.map((item) => {
              return (
                <Quiz
                  title={item.question}
                  count={counter++}
                  key={item.id}
                  options={item.options}
                  correctAnswer={item.correctAnswer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizDetails;
