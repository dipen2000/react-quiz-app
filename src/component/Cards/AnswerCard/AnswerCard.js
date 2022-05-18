import "./AnswerCard.css";
import { useAnswers } from "../../../context/answersContext";

const AnswerCard = ({ question }) => {
  const { answerState } = useAnswers();
  return (
    <div className="solution-container bord-3-green">
      <div className="solution-section flex-col bord-3-yellow">
        <h3>{question.question}</h3>
        <div className="flex-row align-center-flex gap-1">
          <div className="flex-row align-center-flex gap-1">
            <span>Right answer : </span>
            <span
              style={{ backgroundColor: "green" }}
              className="answer-container bord-3-blue"
            >
              {question.answer}
            </span>
          </div>
          <div className="flex-row align-center-flex gap-1">
            <span>Your answer : </span>
            <span
              style={{
                backgroundColor:
                  question.answer === answerState[question.number]
                    ? "green"
                    : "red",
              }}
              className="answer-container bord-3-blue"
            >
              {answerState[question.number]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AnswerCard };
