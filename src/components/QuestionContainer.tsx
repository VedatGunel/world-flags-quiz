import { useContext } from "react";
import Option from "./Option";
import QuestionContext, { QuestionCtx } from "../context/question";
import ScoreContext, { ScoreCtx } from "../context/score";
import classNames from "classnames";

interface QuestionProps {
    onComplete: () => void
}

export default function QuestionContainer({onComplete}: QuestionProps) {
    const {selectedOption, setSelectedOption, question} = useContext(QuestionContext) as QuestionCtx;
    const {setScore, highScore, setHighScore} = useContext(ScoreContext) as ScoreCtx;
    
    const handleClick = (value: string) => {
        setSelectedOption(value);
        if (value === question.correctAnswer.value) {
            setScore((prevScore: number) => {
                const updatedScore = prevScore + 1;
                console.log("old score:", prevScore, "new score", updatedScore)
                if (updatedScore > highScore) {
                    setHighScore(updatedScore);
                    localStorage.setItem("highScore", updatedScore.toString());
                }
                return updatedScore;
            });
        }
    }

    const isCorrect = selectedOption && selectedOption === question.correctAnswer.value;

    const btnClasses = classNames(
        "my-10 border border-gray-300 rounded text-center cursor-pointer py-5",
        "hover:bg-gray-500",
        {"text-red-400 ": !isCorrect},
        {"text-green-400": isCorrect},
    );

    const renderedOptions = question.options.map(country => {
            return (
                <Option
                    option={country}
                    key={country.value} 
                    onClick={() => handleClick(country.value)}
                />
            )
        }
    )

    const handleComplete = () => {
        if(!isCorrect) {
            setScore(0);
        }
        onComplete();
    }

    return (
        <div className="flex flex-col items-center h-5/6 md:h-screen border min-w-min w-4/5 md:w-1/3 px-5 bg-zinc-700">
            <div className="flex items-center justify-center h-2/5">
                <img className="h-2/3 object-contain pointer-events-none" src={`${import.meta.env.BASE_URL}/flags/${question.correctAnswer.value}.svg`} />
            </div>
            <div className="flex flex-col w-full h-fit justify-between">
                <div>
                    {renderedOptions}
                </div>
                {selectedOption && 
                <button className={btnClasses} onClick={handleComplete}>
                    {isCorrect ? "Next" : "Restart"}
                </button>}
            </div>
        </div>
    );
}