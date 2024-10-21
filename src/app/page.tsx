"use client"

import { useState } from "react";
import { questions } from "./data/questions";
import { QuestionItem } from "./components/QuestionItem";
import { Results } from "./components/Results";



const Page = () => {

  const [answers, setAnswers] = useState<number[]>([]);

  const [currentQuestion, setCurrentQuestion] = useState<number>(0)

  const [showResult, setShowResult] = useState(false)

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-xl bg-slate-800 border rounded-md text-white shadow shadow-white">
        <div className="p-5 font-bold text-2xl border-b">Quiz de violão</div>
        <div className="p-5">
          {!showResult &&
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          }
          {showResult &&
            <Results 
              questions={questions}
              answers={answers}
            />
          }
        </div>
        <div className="p-5 border-t text-center">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta`
          }
          {showResult &&
            <button className="px-3 py-2 rounded-md bg-slate-500" onClick={handleRestartButton}>Reiniciar Quiz</button>
          }
        
        </div>
      </div>
    </div>
  );
}
export default Page;