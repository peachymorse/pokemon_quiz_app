import { useReducer, useEffect, useState } from "react";
import questionsData from "../pokemon_quiz_questions_v1.json";
import QuestionCard from "./QuestionCard";
import { Question, QuizState } from "../types";


const getRandomQuestions = (all: Question[], count: number) => {
  const shuffled = [...all].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};


type Action =
  | { type: "SELECT_ANSWER"; payload: { type: string; questionIndex: number } }
  | { type: "RESTART" };


interface InternalState {
  currentQuestionIndex: number;
  typeTally: Record<string, number>;
  selectedQuestionIndices: number[]; // track which questions were answered
  completed: boolean;
  resultType?: string;
}

const initialState: InternalState = {
  currentQuestionIndex: 0,
  typeTally: {},
  selectedQuestionIndices: [],
  completed: false,
  resultType: undefined,
};

const quizReducer = (state: InternalState, action: Action): InternalState => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const { type, questionIndex } = action.payload;
      const newTally = {
        ...state.typeTally,
        [type]: (state.typeTally[type] || 0) + 1,
      };

      const nextIndex = state.currentQuestionIndex + 1;
      const completed = nextIndex >= 5;

      const resultType = completed
        ? Object.entries(newTally).sort((a, b) => b[1] - a[1])[0][0]
        : undefined;

      return {
        ...state,
        currentQuestionIndex: nextIndex,
        typeTally: newTally,
        selectedQuestionIndices: [...state.selectedQuestionIndices, questionIndex],
        completed,
        resultType,
      };
    }

    case "RESTART":
      return initialState;

    default:
      return state;
  }
};


interface Props {
  quizState: QuizState;
  onComplete: (finalState: QuizState) => void;
}

const Quiz = ({ onComplete }: Props) => {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [state, dispatch] = useReducer(quizReducer, initialState);

  
  useEffect(() => {
    const selected = getRandomQuestions(questionsData, 5);
    setQuizQuestions(selected);
  }, []);

  
  useEffect(() => {
    if (state.completed && quizQuestions.length) {
        onComplete({
            currentQuestionIndex: state.currentQuestionIndex,
            typeTally: state.typeTally,
            selectedAnswers: state.selectedQuestionIndices, 
            completed: true,
            resultType: state.resultType,
          });
    }
  }, [state.completed]);


  if (!quizQuestions.length || state.completed) return null;

  const current = quizQuestions[state.currentQuestionIndex];

  return (
    <QuestionCard
      question={current}
      questionIndex={state.currentQuestionIndex}
      onAnswerSelect={(index) =>
        dispatch({
          type: "SELECT_ANSWER",
          payload: {
            type: current.answers[index].type,
            questionIndex: index,
          },
        })
      }
    />
  );
};

export default Quiz;
