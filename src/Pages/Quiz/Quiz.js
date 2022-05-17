import "./Quiz.css";
import { BatmanQuizContainer } from "../../component/Wrapper/BatmanQuizContainer/BatmanQuizContainer";
import { useParams } from "react-router-dom";
import { QuizCard } from "../../component/Cards/QuizCard/QuizCard";
const Quiz = () => {
  const { categoryName } = useParams();
  return (
    <BatmanQuizContainer>
      <div className="flex-col bord-3-green gap-1">
        <div className="quiz-title-container flex-row align-center-flex justify-center-flex">
          <h2>{categoryName} Quiz</h2>
        </div>
        <div className="flex-row align-center-flex justify-center-flex">
          <h2>Timer here</h2>
        </div>
        <div className="quiz-form-container bord-3-blue">
          <form>
            <div className="flex-col">
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
              <QuizCard />
            </div>
          </form>
        </div>
      </div>
    </BatmanQuizContainer>
  );
};

export { Quiz };
