import { useContext } from "react";
import QuestionContainer from "./components/QuestionContainer";

import ScoreContext, { ScoreCtx } from "./context/score";

function App() {
    const { score, highScore } = useContext(ScoreContext) as ScoreCtx;

    return (
        <div className="relative bg-zinc-800 text-gray-100">
            <div className="flex flex-col justify-end items-center md:place-items-center h-screen">
                <QuestionContainer />
            </div>
            <div className="absolute top-0 right-0 md:text-2xl bg-zinc-700 p-3 rounded">
                Score: {score}
                <br />
                High Score: {highScore}
            </div>
        </div>
    );
}

export default App;
