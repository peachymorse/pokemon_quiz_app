import { Question } from "../types";

interface Props {
  question: Question;
  questionIndex: number;
  onAnswerSelect: (answerIndex: number) => void;
}

const QuestionCard = ({ question, questionIndex, onAnswerSelect }: Props) => {
  return (
    <div className="question-card">
      <h2 className="question-title">Question {questionIndex + 1}</h2>
      <p className="question-text">{question.question}</p>
      <div className="answer-options">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => onAnswerSelect(index)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
