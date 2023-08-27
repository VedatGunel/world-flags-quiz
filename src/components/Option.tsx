import classNames from "classnames";
import { PropsWithChildren, useContext } from "react";
import { Country } from "../services/question.service";
import QuestionContext, { QuestionCtx } from "../context/question";

type OptionProps = {
    option: Country,
    onClick: () => void
}

export default function Option({option, onClick}: PropsWithChildren<OptionProps>) {
    const {question, selectedOption} = useContext(QuestionContext) as QuestionCtx;

    const isCurrentlyClicked = selectedOption === option.value;
    const isCorrect = question.correctAnswer === option;
    const disabled = selectedOption !== null;

    const optionClasses = classNames(
        "w-full border border-gray-300 rounded text-center cursor-pointer py-5 my-1",
        "disabled:cursor-default",
        {"bg-red-400 text-black": isCurrentlyClicked && !isCorrect},
        {"bg-green-400 text-black": disabled && isCorrect},
        {"hover:bg-gray-500": !disabled}
    );

    return (
        <button disabled={disabled} className={optionClasses} onClick={onClick}>
            {option.name}
        </button>
    );
}
