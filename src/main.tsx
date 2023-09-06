import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QuestionProvider } from "./context/question.tsx";
import { ScoreProvider } from "./context/score.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QuestionProvider>
            <ScoreProvider>
                <App />
            </ScoreProvider>
        </QuestionProvider>
    </React.StrictMode>
);
