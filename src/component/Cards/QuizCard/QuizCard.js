import "./QuizCard.css";
import { RadioInputField } from "../../RadioInputField/RadioInputField";
const QuizCard = ({ question }) => {
  const options = question.options;
  return (
    <div className="flex-col gap-2 quiz-card-container bord-3-blue">
      <div className="quiz-question-container bord-3-red flex-row justify-space-between-flex">
        <h3>{question.question}</h3>
      </div>
      <div className="bord-3-yellow quiz-options-section">
        {options.map((optionObj) => {
          return (
            <RadioInputField
              key={optionObj.id}
              option={optionObj}
              name={question.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export { QuizCard };
