import { createContext, useState, PropsWithChildren } from "react";
import {
    Country,
    Question,
    questionService,
} from "../services/question.service";

export interface QuestionCtx {
    question: Question<Country>;
    setQuestion: (q: Question<Country>) => void;
}

const QuestionContext = createContext<QuestionCtx | null>(null);

function QuestionProvider({ children }: PropsWithChildren) {
    const [question, setQuestion] = useState<Question<Country>>(() =>
        questionService.getQuestion()
    );

    return (
        <QuestionContext.Provider value={{ question, setQuestion }}>
            {children}
        </QuestionContext.Provider>
    );
}

export { QuestionProvider };

export default QuestionContext;
