import { useState } from "react";
import { Quest } from "../types/Quest";

type Props = {
question: Quest;
count: number;
onAnswer: (answer: number) => void;
}

export const QuestionItem = ({question, count, onAnswer}: Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const checkQuestion = (key: number) => {
        if(selectedAnswer === null){
            setSelectedAnswer(key);
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null);
            }, 600)
            
        }
    }

    return(
        <div>
            <div className="font-bold text-3xl">{count}. {question.quest}</div>
            <div>
            {question.options.map((item,key) => (
                <div
                    key={key}
                    onClick={() => checkQuestion(key)}
                className={`p-2 text-lg my-4 border rounded-md bg-slate-700
                    
                    ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                    ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'border-green-300 bg-green-500'}
                    ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'border-red-300 bg-red-500'}
                    `}                
                >{item}</div>
            ))}
            </div>
        </div>
    );
}