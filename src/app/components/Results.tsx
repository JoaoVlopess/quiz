import { Quest } from "../types/Quest";

type Props = {
    questions: Quest[];
    answers: number[];
}

export const Results = ({questions, answers}: Props) => {
    return(
        <div>
            {questions.map((item,key) => (
              <div key={key} className="mb-3">
                <div className="font-bold">{key + 1}. {item.quest}</div>
                <div>
                    <span>({item.answer === answers[key] ? 'Acertou!' : 'Errou!'}) - </span>
                    {item.answer === answers[key] &&
                        item.options[item.answer]
                    }
                    {item.answer !== answers[key] &&
                        `Resposta correta : ${item.options[item.answer]}`
                    }

                </div>
              </div>  
            ))}
        </div>
    );
}