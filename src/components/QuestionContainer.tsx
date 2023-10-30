import { useContext, useState } from "react";
import classNames from "classnames";

import QuestionContext, { QuestionCtx } from "../context/question";
import ScoreContext, { ScoreCtx } from "../context/score";
import { questionService } from "../services/question.service";

import Flag from "./Flag";
import Option from "./Option";

export default function QuestionContainer() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const { question, setQuestion } = useContext(
        QuestionContext
    ) as QuestionCtx;
    const { setScore, highScore, setHighScore } = useContext(
        ScoreContext
    ) as ScoreCtx;

    const handleClick = (value: string) => {
        setSelectedOption(value);
        if (value === question.correctAnswer.value) {
            setScore((prevScore: number) => {
                const updatedScore = prevScore + 1;
                if (updatedScore > highScore) {
                    setHighScore(updatedScore);
                    localStorage.setItem("highScore", updatedScore.toString());
                }
                return updatedScore;
            });
        }
    };

    const isCorrect = selectedOption === question.correctAnswer.value;

    const btnClasses = classNames(
        "my-10 border border-gray-300 rounded text-center cursor-pointer py-3 md:py-5",
        "hover:bg-gray-500",
        { "text-red-400": !isCorrect },
        { "text-green-400": isCorrect }
    );

    const renderedOptions = question.options.map(option => (
        <Option
            option={option}
            selectedOption={selectedOption}
            key={option.value}
            onClick={() => handleClick(option.value)}
        />
    ));

    const handleComplete = () => {
        if (!isCorrect) {
            setScore(0);
        }
        setSelectedOption(null);
        setQuestion(questionService.getQuestion());
    };

    return (
        <div className="flex flex-col items-center h-5/6 md:h-screen border rounded min-w-min w-4/5 md:w-1/3 px-5 bg-zinc-700">
            <div className="flex items-center justify-center h-2/5">
                <Flag
                    src={`${import.meta.env.BASE_URL}/flags/${
                        question.correctAnswer.value
                    }.svg`}
                />
            </div>
            <div className="flex flex-col w-full h-3/5 justify-between">
                <div>{renderedOptions}</div>
                {selectedOption && (
                    <button className={btnClasses} onClick={handleComplete}>
                        {isCorrect ? "Next" : "Restart"}
                    </button>
                )}
            </div>
        </div>
    );
}
