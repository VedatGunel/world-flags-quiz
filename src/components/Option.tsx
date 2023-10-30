import classNames from "classnames";
import { PropsWithChildren, useContext } from "react";
import { Country } from "../services/question.service";
import QuestionContext, { QuestionCtx } from "../context/question";

interface OptionProps {
    option: Country;
    onClick: () => void;
}

export default function Option({
    option,
    onClick,
}: PropsWithChildren<OptionProps>) {
    const { question, selectedOption } = useContext(
        QuestionContext
    ) as QuestionCtx;

    const isClicked = selectedOption === option.value;
    const isCorrect = question.correctAnswer === option;
    const isDisabled = selectedOption !== null;

    const classes = classNames(
        "w-full border border-gray-300 rounded text-center cursor-pointer py-3 md:py-5 my-1",
        "disabled:cursor-default",
        { "bg-red-400 text-black": isClicked && !isCorrect },
        { "bg-green-400 text-black": isDisabled && isCorrect },
        { "hover:bg-gray-500": !isDisabled }
    );

    return (
        <button disabled={isDisabled} className={classes} onClick={onClick}>
            {option.name}
        </button>
    );
}
