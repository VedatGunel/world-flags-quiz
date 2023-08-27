import { createContext, useState, PropsWithChildren } from "react";
import { Country, Question, questionService } from "../services/question.service";

export interface QuestionCtx {
    selectedOption: string | null,
    setSelectedOption: (a: string | null) => void,
    question: Question<Country>,
    setQuestion: (q: Question<Country>) => void
}

const QuestionContext = createContext<QuestionCtx | null>(null);

function QuestionProvider({ children }: PropsWithChildren) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [question, setQuestion] = useState<Question<Country>>(() => questionService.getQuestion());
    
    return (<QuestionContext.Provider value={{selectedOption, setSelectedOption, question, setQuestion}}>
        {children}
    </QuestionContext.Provider>)
}

export { QuestionProvider };

export default QuestionContext;