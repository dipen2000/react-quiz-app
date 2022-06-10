import "./AnswerCard.css";
import { useAnswers } from "../../../context/answersContext";

const AnswerCard = ({ question }) => {
  const { answerState } = useAnswers();
  return (
    <div className="solution-container">
      <div className="solution-section flex-col">
        <h3>{question.question}</h3>
        <div className="flex-row align-center-flex gap-1">
          <div className="flex-row align-center-flex gap-1">
            <span>Right answer : </span>
            <span
              style={{ backgroundColor: "#5FD068", color: "black" }}
              className="answer-container"
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
                    ? "#5FD068"
                    : "#FD5D5D",
                color: "black",
              }}
              className="answer-container"
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
