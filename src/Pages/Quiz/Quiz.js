import "./Quiz.css";
import { BatmanQuizContainer } from "../../component/Wrapper/BatmanQuizContainer/BatmanQuizContainer";
import { useParams } from "react-router-dom";
import { QuizCard } from "../../component/Cards";
import { useQuestions } from "../../context/QuestionsContext";
import { useAnswers } from "../../context/answersContext";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
  const { categoryName } = useParams();
  const { questionsState } = useQuestions();
  const { answerState } = useAnswers();
  const navigate = useNavigate();
  const quizCategoryObj = questionsState.find(
    (category) => category.categoryName === categoryName
  );

  const questions = quizCategoryObj.questions;
  const quizSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/result");
  };

  return (
    <BatmanQuizContainer>
      <div className="flex-col  gap-1">
        <div className="flex-col bord-3-yellow quiz-title-sticky">
          <div className="quiz-title-container flex-row align-center-flex justify-center-flex">
            <h2>{categoryName} Quiz</h2>
          </div>
        </div>
        <div className="quiz-form-container">
          <form onSubmit={quizSubmitHandler}>
            <div className="flex-col align-center-flex justify-center-flex gap-2">
              {questions.map((question) => {
                return <QuizCard key={question.id} question={question} />;
              })}
            </div>
            <div className="flex-row submit-btn-container align-center-flex justify-center-flex">
              <button className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </BatmanQuizContainer>
  );
};

export { Quiz };
