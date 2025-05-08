// src/types/index.ts

export interface Answer {
    text: string;
    type: string;
    image: string; 
  }
  

export interface Question {
    question: string;
    answers: Answer[];
}

export interface QuizState {
    currentQuestionIndex: number;
    typeTally: { [key: string] : number };
    selectedAnswers: number[];
    completed: boolean;
    resultType?: string;
}

