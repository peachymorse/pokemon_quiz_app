import { useReducer } from "react";
import IntroScreen from "./components/IntroScreen";
import Quiz from "./components/Quiz";
import LoadingScreen from "./components/LoadingScreen";
import ResultScreen from "./components/ResultScreen";
import { QuizState } from "./types";

type Screen = "splash" | "intro" | "quiz" | "loading" | "result";

interface AppState {
  screen: Screen;
  quizState: QuizState;
}

type AppAction =
  | { type: "GO_TO_INTRO" }
  | { type: "START_QUIZ" }
  | { type: "SHOW_LOADING" }
  | { type: "SHOW_RESULT"; payload: QuizState }
  | { type: "RESTART" };

const initialQuizState: QuizState = {
  currentQuestionIndex: 0,
  typeTally: {},
  selectedAnswers: [],
  completed: false,
  resultType: undefined
};

const initialAppState: AppState = {
  screen: "intro", 
  quizState: initialQuizState
};


const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "GO_TO_INTRO":
      return { ...state, screen: "intro" };
    case "START_QUIZ":
      return { ...state, screen: "quiz", quizState: initialQuizState };
    case "SHOW_LOADING":
      return { ...state, screen: "loading" };
    case "SHOW_RESULT":
      return { screen: "result", quizState: action.payload };
    case "RESTART":
      return initialAppState;
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  console.log("Current screen:", state.screen); // 

  return (
    <>

      {state.screen === "intro" && (
        <IntroScreen onStart={() => dispatch({ type: "START_QUIZ" })} />
      )}

      {state.screen === "quiz" && (
        <Quiz
          quizState={state.quizState}
          onComplete={(finalState) => {
            dispatch({ type: "SHOW_LOADING" });
            setTimeout(() => {
              dispatch({ type: "SHOW_RESULT", payload: finalState });
            }, 2000);
          }}
        />
      )}

      {state.screen === "loading" && <LoadingScreen />}
      {state.screen === "result" && state.quizState.resultType && (
      <ResultScreen
        resultType={state.quizState.resultType}
        onRestart={() => dispatch({ type: "RESTART" })}
      />
    )}

    </>
  );
};

export default App;
