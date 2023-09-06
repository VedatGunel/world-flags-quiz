import {
    createContext,
    useState,
    PropsWithChildren,
    Dispatch,
    SetStateAction,
} from "react";

export interface ScoreCtx {
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
    highScore: number;
    setHighScore: Dispatch<SetStateAction<number>>;
}

const ScoreContext = createContext<ScoreCtx | null>(null);

function ScoreProvider({ children }: PropsWithChildren) {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(() => {
        return parseInt(localStorage.getItem("highScore") ?? "0");
    });

    return (
        <ScoreContext.Provider
            value={{ score, setScore, highScore, setHighScore }}
        >
            {children}
        </ScoreContext.Provider>
    );
}

export { ScoreProvider };

export default ScoreContext;
