import { Question } from "../types";
import "../styles/QuestionCard.css";


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
          className="answer-card"
          onClick={() => onAnswerSelect(index)}
        >
    <img
      src={`/assets/answers/${answer.image}`}
      alt={answer.text}
      className="answer-image"
    />
    <p className="answer-text">{answer.text}</p>
    </button>
    ))}

      </div>
    </div>
  );
};

export default QuestionCard;
