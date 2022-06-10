import "./QuizCard.css";
import { RadioInputField } from "../../RadioInputField/RadioInputField";
const QuizCard = ({ question }) => {
  const options = question.options;
  return (
    <div className="flex-col gap-2 quiz-card-container">
      <div className="quiz-question-container flex-row justify-space-between-flex">
        <h3>{question.question}</h3>
      </div>
      <div className="quiz-options-section">
        {options.map((optionObj) => {
          return (
            <RadioInputField
              key={optionObj.id}
              option={optionObj}
              number={question.number}
            />
          );
        })}
      </div>
    </div>
  );
};

export { QuizCard };
