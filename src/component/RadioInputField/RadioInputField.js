import "./RadioInputField.css";
import { useAnswers } from "../../context/answersContext";
const RadioInputField = ({ option, number }) => {
  const { answerState, setAnswer } = useAnswers();
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setAnswer((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="option flex-row gap-1 align-center-flex">
      <input
        name={number}
        type="radio"
        id={option.id}
        onChange={inputChangeHandler}
        value={option.option}
        checked={option.option === answerState[number]}
        required
      />
      <label htmlFor={option.id}>{option.option}</label>
    </div>
  );
};

export { RadioInputField };
