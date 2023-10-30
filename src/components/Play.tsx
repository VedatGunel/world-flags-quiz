import { useContext } from "react";
import QuestionContainer from "./QuestionContainer";

import ScoreContext, { ScoreCtx } from "../context/score";

export default function Play() {
    const { score,  highScore } = useContext(ScoreContext) as ScoreCtx;

    return (
        <>
            <QuestionContainer />
            <div className="absolute top-0 right-0 md:text-2xl bg-zinc-700 p-3 rounded">
                Score: {score}
                <br />
                High Score: {highScore}
            </div>
        </>
    );
}
