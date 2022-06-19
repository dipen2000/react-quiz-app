import "./Quiz.css";
import { useParams } from "react-router-dom";
import { BatmanQuizContainer } from "../../component/Wrapper/BatmanQuizContainer/BatmanQuizContainer";
import { useNavigate } from "react-router-dom";
import { RadioInputField } from "../../component/RadioInputField/RadioInputField";
import { useQuestions } from "../../context/QuestionsContext";
import { useCategory } from "../../context/categoryContext";
import { useAnswers } from "../../context/answersContext";
const Quiz = () => {
  const { questionNum, categoryName } = useParams();
  const { setCategory } = useCategory();
  const { setAnswer } = useAnswers();
  const navigate = useNavigate();
  const { questionsState } = useQuestions();
  const currentCategory = questionsState.find(
    (category) => category.categoryName === categoryName
  );

  const currentQuestion = currentCategory.questions.find(
    (question) => question.number === questionNum
  );

  const quitQuizHandler = () => {
    setCategory("");
    setAnswer({ 1: "", 2: "", 3: "", 4: "", 5: "" });
    navigate("/");
  };

  return (
    <BatmanQuizContainer>
      <div className="flex-col gap-3 mt-2">
        <div className="flex-row align-center-flex justify-center-flex">
          <h2>{categoryName}</h2>
        </div>
        <div className="flex-row justify-center-flex">
          <div className="quiz-question-container">
            <div className="flex-col gap-2">
              <div className="flex-row align-center-flex justify-space-between-flex">
                <h3>
                  Question : {questionNum}/{currentCategory.questions.length}
                </h3>
                <button className="submit-btn" onClick={quitQuizHandler}>
                  Quit quiz
                </button>
              </div>
              <div className="quiz-question-card-container">
                <div className="flex-col gap-2">
                  <div className="quiz-question-section">
                    <h3>{currentQuestion.question}</h3>
                  </div>
                  <div className="flex-col align-center-flex gap-1">
                    {currentQuestion.options.map((option) => {
                      return (
                        <RadioInputField
                          key={option.id}
                          option={option}
                          number={currentQuestion.number}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex-row align-center-flex justify-space-between-flex">
                {questionNum > 1 ? (
                  <div
                    className="quiz-nav-link flex-row gap-1 align-center-flex curs-point"
                    onClick={() =>
                      navigate(
                        `/quiz/category/${categoryName}/question/${
                          Number(questionNum) - 1
                        }`
                      )
                    }
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                    <h3>Question {Number(questionNum) - 1}</h3>
                  </div>
                ) : (
                  <div
                    className="quiz-nav-link flex-row gap-1 align-center-flex curs-point"
                    onClick={() => navigate("/")}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                    <h3>Home</h3>
                  </div>
                )}
                {currentCategory.questions.length === Number(questionNum) ? (
                  <div
                    className="quiz-nav-link flex-row gap-1 align-center-flex curs-point"
                    onClick={() => navigate("/result")}
                  >
                    <h3>Result</h3>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                ) : (
                  <div
                    className="quiz-nav-link flex-row gap-1 align-center-flex curs-point"
                    onClick={() =>
                      navigate(
                        `/quiz/category/${categoryName}/question/${
                          Number(questionNum) + 1
                        }`
                      )
                    }
                  >
                    <h3>Question {Number(questionNum) + 1}</h3>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BatmanQuizContainer>
  );
};

export { Quiz };
