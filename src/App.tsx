import { useContext } from "react";
import QuestionContainer from "./components/QuestionContainer";
import { questionService } from "./services/question.service"
import QuestionContext, { QuestionCtx } from "./context/question";
import ScoreContext, { ScoreCtx } from "./context/score";

function App() {
  const {setSelectedOption, setQuestion} = useContext(QuestionContext) as QuestionCtx;
  const {score, highScore} = useContext(ScoreContext) as ScoreCtx;

  const handleComplete = () => {
    setSelectedOption(null);
    setQuestion(questionService.getQuestion());
  }

  return (
    <div className="relative bg-zinc-800 text-gray-100">
      <div className="flex flex-col justify-end items-center md:place-items-center h-screen">
        <QuestionContainer onComplete={handleComplete}/>
      </div>
      <div className="absolute top-0 right-0 md:text-2xl bg-zinc-700 p-3 rounded-lg">
        Score: {score}
        <br />
        High Score: {highScore}
      </div>
    </div>

  )
}

export default App
